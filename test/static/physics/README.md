# Physics test fixtures — generation pipeline

End-to-end documentation for everything in `test/static/physics/`:
where each file comes from, the tool that generates it, and how
`_helpers.js` consumes it. This is the **single source of truth** for
"how do I refresh fixtures after a new recording" — the underlying
tool READMEs cover the deep details; this doc covers the pipeline.

---

## What lives in this directory

```
test/static/physics/
├── README.md                          ← you are here
├── _helpers.js                        ← Harness + makeFixtureWorld + getInputAtTick
├── <scenario>.test.js                 ← one mocha test per scenario (×N)
├── fixtures/
│   ├── world.json                     ← merged block geometry across all scenarios
│   ├── merge-worlds.js                ← merge tool (worlds/<scenario>.json → world.json)
│   └── inputs/<scenario>.json         ← per-tick PAI + harness controls
└── reports/
    ├── README.md                      ← top-level scenario index
    └── <scenario>/
        ├── README.md                  ← per-scenario tick stats table
        └── tick_NNNN.md               ← one file per tick (×N)
```

Two coupled artefacts per scenario: a `.test.js` (the assertion harness) and
a `fixtures/inputs/*.json` (full per-tick PAI state). Block geometry is
stored once in `fixtures/world.json` — a lossless merge of the per-scenario
block exports. All scenarios share this single world (`shared_world` from
the recorder builds the same superflat layout for all takes), so dedup is
zero-conflict.

---

## Recording → fixtures: full data flow

```
                  ┌───────────────────────────┐
                  │  Live Minecraft Bedrock   │
                  │  client w/ v26-tracer DLL │
                  └────────────┬──────────────┘
                               │
                  recording run produces 3 files at
                  D:/traces/1.26.13.1/<basename>.{proxy.bin, v26dump, v26world}
                               │
        ┌──────────────────────┼───────────────────────┐
        │                      │                       │
        ▼                      ▼                       ▼
  ┌──────────────┐       ┌───────────────┐       ┌──────────────┐
  │ .proxy.bin   │       │ .v26dump      │       │ .v26world    │
  │ (raw packets │       │ (ECS state +  │       │ (block log;  │
  │ in/out)      │       │ system events)│       │ not consumed │
  │              │       │               │       │ by fixtures) │
  └──────┬───────┘       └───────┬───────┘       └──────────────┘
         │                       │
         │ extract-physics-      │ v26_physics_tick_report
         │ fixtures.ts           │ (C++; uses dump_reader.h)
         │ AND BlockExport       │
         │ Analyzer              │
         ▼                       ▼
  ┌───────────────────────┐   ┌────────────────────────────┐
  │ <scenario>.test.js    │   │ reports/<scenario>/        │
  │ fixtures/inputs/*.json│   │   README.md                │
  │ fixtures/worlds/*.json│   │   tick_NNNN.md             │
  └───────────────────────┘   └────────────────────────────┘
       used by mocha               diff-by-eye debugging
```

Three tools produce the artefacts; each has its own README with the deep
details:

| Tool | Path | Reads | Writes |
|---|---|---|---|
| **extract-physics-fixtures.ts** | `D:/projects/bedrock-tools-v2/packages/recorder/scripts/` | `.proxy.bin` | `<scenario>.test.js` + `fixtures/inputs/*.json` |
| **BlockExportAnalyzer** (`main.ts`) | `D:/projects/mc/bedrock-oracle/tools/analyze-bin/` | `.proxy.bin` | `fixtures/worlds/*.json` |
| **v26_physics_tick_report** | `D:/projects/mc/bedrock-oracle-v26/projects/physics-tick-report/` | `.v26dump` | `reports/<scenario>/tick_NNNN.md` |

---

## Refreshing all fixtures after a new recording

After dropping a new `.proxy.bin` + `.v26dump` pair under
`D:/traces/1.26.13.1/`, run these three commands in order. Each is
independent — parallel-safe — but the test fixtures must be regenerated
**before** the tick-report tool, since the tick-report tool reads the
generated `.test.js` files to discover scenario tick ranges.

```bash
# 1. Test fixtures (.test.js + fixtures/inputs/*.json)
cd D:/projects/bedrock-tools-v2/packages/recorder
npx tsx scripts/extract-physics-fixtures.ts \
    D:/traces/1.26.13.1/<basename>.proxy.bin \
    D:/projects/prismarine-bedrock/test/static/physics \
    1.26.0

# 2. World geometry (fixtures/world.json)
# Step 2a: per-scenario worlds (intermediate output)
cd D:/projects/mc/bedrock-oracle/tools/analyze-bin
npx tsx src/main.ts \
    D:/traces/1.26.13.1/<basename>.proxy.bin \
    D:/projects/prismarine-bedrock/test/static/physics/fixtures/worlds
# Step 2b: merge into single world.json, then drop the intermediate dir
cd D:/projects/prismarine-bedrock
node test/static/physics/fixtures/merge-worlds.js
rm -rf test/static/physics/fixtures/worlds

# 3. Per-tick system reports (reports/<scenario>/)
cd D:/projects/mc/bedrock-oracle-v26
just physics-tick-report D:/traces/1.26.13.1/<basename>.v26dump
```

After all three: 183 / 183 / 183 across the layers should match the
scenario count from the recording's L records.

---

## Artefact reference

### `<scenario>.test.js`

One mocha test per scenario. Emitted by **extract-physics-fixtures.ts**
from per-tick `PlayerAuthInputPacket` records bracketed by
`test-case-start` / `test-case-end` L records in `.proxy.bin`. The test
calls `makeHarness({ scenario: '<name>' })` to load the world fixture
and runs through every recorded PAI tick comparing against expected
position/velocity.

The header comment encodes the tick range that drives downstream tools:

```js
// Frames: 52  (ticks 545..596)
```

`v26_physics_tick_report` greps this line to discover which ticks to
report on.

### `fixtures/inputs/<scenario>.json`

Per-tick FULL PAI state — no diffs. Loaded via `getInputAtTick()` /
`getInputTicks()` in `_helpers.js` when tests want to inspect what was
pressed at a specific tick without walking through previous diffs.

```json
{
  "scenario":  "sprint_forward",
  "startTick": 545,
  "endTick":   596,
  "frames":    52,
  "ticks": [
    {
      "t":         580,
      "pos":       [0.500, 1.620, 7.739],
      "yaw":       -0.0000305,
      "pitch":     0,
      "headYaw":   -0.0000305,
      "moveVector":[0, 1],
      "delta":     [0, -0.0784, 0.280],
      "controls":  { "forward": true, "back": false, "left": false,
                     "right": false, "jump": false, "sprint": true,
                     "sneak": false, "swim": false },
      "inputs":    { /* the full raw bedrock input_data bitset */ }
    }
  ]
}
```

`controls` is the 8-boolean form harness uses; `inputs` is the full PAI
bitfield (`up`, `jumping`, `sneakDown`, `handledTeleport`, etc.) for
advanced consumers.

### `fixtures/worlds/<scenario>.json`

Sparse block list covering the AABB the player traversed during the
scenario plus padding (±4 XZ, −2/+5 Y). Emitted by
**BlockExportAnalyzer** by walking the in-memory `prismarine-world`
state after replaying every `level_chunk` / `subchunk` / `update_block`
packet from `.proxy.bin`.

```json
{
  "scenario":  "walk_up_stairs",
  "version":   "1.26.0",
  "startTick": 2198,
  "endTick":   2245,
  "playerStart": [0.5, 1.62001, 2083.5],
  "bounds":    [[-16, -1, 2079], [4, 11, 2094]],
  "stats":     { "paiPositions": 47, "nonAirBlocks": 341, "paletteSize": 3 },
  "palette": [
    { "name": "grass_block",  "boundingBox": "block", "shapes": [[0,0,0,1,1,1]] },
    { "name": "stone",        "boundingBox": "block", "shapes": [[0,0,0,1,1,1]] },
    { "name": "stone_stairs", "boundingBox": "block",
      "shapes": [[0,0,0,1,0.5,1], [0.5,0.5,0,1,1,1]] }
  ],
  "blocks": [ [-16,-1,2079,0], [-16,-1,2080,0], ...  ]
}
```

Blocks are de-duplicated through a per-fixture palette so a 350-block
scenario with stairs+stone+grass stores three palette entries plus 350
tuples of `[x, y, z, paletteIndex]`. Most fixtures end up under 14 kB.

Loaded by `makeFixtureWorld(scenario)` in `_helpers.js`, which builds an
`O(1) Map<"x,y,z" → block>` and stamps `friction` overrides onto palette
entries by name (ice → 0.98, slime → 0.8, soul_sand → 0.4, etc. — see
`BLOCK_FRICTION_OVERRIDES` in `_helpers.js`). prismarine-block doesn't
carry friction as a field, so this is done at load time.

### `reports/<scenario>/tick_NNNN.md`

Per-tick per-system change report for the LocalPlayer. Emitted by the
C++ `v26_physics_tick_report` tool which reads `.v26dump`'s
`V26_TAG_SYSTEM_SNAPSHOT_V2` records, reconstructs entity state across
the dump using `trace::ShadowSnapshot` + `apply_subrecord` (same machine
the verifier uses), and emits a Markdown breakdown of which BDS system
changed which component on which entity.

```markdown
# `sprint_forward` · tick 580  *(of 545..596)*
[index](README.md) · [prev 579](tick_0579.md) · [next 581](tick_0581.md)

tracer pos = (0.5, 1.62, 2.378)  ·  systems=555  pkts=2  block_regions=1

## seq 268 · `DefaultMoveSystems - Ground`  *(d=0, cat=system)*
- * **StateVectorComponent** (idx=8, 36B)
    - after:  pos=(0.5,1.62,2.131) vel=(0,-0.0784,0.2784)
    - before: pos=(0.5,1.62,2.131) vel=(0,-0.0784,0.151)
- * **MobTravelComponent** (idx=332, 44B)
    - after:  lmv=(0,0,0.98) speed=0.13 friction=0.546 ...
```

Designed for "I'm porting this BDS system into prismarine-bedrock — what
does it actually do to the entity each tick?" Open `tick_NNNN.md` next
to your port and diff by eye.

---

## How `_helpers.js` consumes the fixtures

```js
const {
    makeHarness,      // Harness ctor — auto-loads world + ready for ticks
    makeFixtureWorld, // standalone world adapter
    getFixtureMeta,   // world meta (bounds, palette, stats)
    loadInputFixture, // raw input fixture access
    getInputAtTick,   // O(1) lookup for tick N
    getInputTicks,    // full per-tick array
} = require('./_helpers')

// Typical test setup
const h = makeHarness({
    version:  '1.26.0',
    scenario: 'walk_up_stairs',     // auto-loads fixtures/worlds/walk_up_stairs.json
    initial:  { position: { ... }, yaw: 0, pitch: 0, onGround: true }
})

// Per-tick: look up what was pressed
const t = getInputAtTick('walk_up_stairs', 2230)
//        ^^^ { t:2230, pos:[...], controls:{ forward:true, jump:true }, ... }
```

`Harness` constructor accepts `{ scenario }` to auto-load the world
fixture; or `{ world: customWorld }` for tests that build a hand-crafted
world; otherwise falls back to the legacy `makeWorld()`
rectangle-fill model (`WORLD_FILLS` in `_helpers.js`).

---

## Tool selection: what writes what

| If you want to update… | Run this tool | Reads | Writes |
|---|---|---|---|
| `*.test.js` + `fixtures/inputs/*.json` | `extract-physics-fixtures.ts` | `.proxy.bin` | `*.test.js` + `inputs/*.json` |
| `fixtures/worlds/*.json` | `analyze-bin` main (BlockExportAnalyzer) | `.proxy.bin` | `worlds/*.json` |
| `reports/<scenario>/` (per-tick MD) | `v26_physics_tick_report` | `.v26dump` | `reports/<scenario>/*.md` |
| Decoder names in tick reports | edit `decoders/*.inc` then rebuild | — | C++ binary |
| PAI → MoveInputState mapping | `v26_pai_flag_mapper` | `.v26dump` | `pai_flag_mapping.md` + `pai_to_mis.h` |

Each tool has its own README under its source directory:

- `D:/projects/bedrock-tools-v2/packages/recorder/src/scenarios.md` — what scenes get recorded
- `D:/projects/mc/bedrock-oracle/tools/analyze-bin/README.md` — block extraction details
- `D:/projects/mc/bedrock-oracle-v26/projects/physics-tick-report/README.md` — tick report internals + decoder system
- `D:/projects/mc/bedrock-oracle-v26/projects/physics-tick-report/decoders/README.md` — decoder contract
- `D:/projects/mc/bedrock-oracle-v26/projects/pai-flag-mapper/pai_to_mis.h` — the validated 13-rule mapping
- `D:/projects/prismarine-bedrock/docs/pai-to-move-input-state.md` — PAI mapping derivation

---

## Scenario discovery + filtering

Three filters work together to decide whether a recording window becomes
a fixture:

1. **L-record `test-case-start` / `test-case-end`** brackets the
   recording window. The recorder emits these around every scripted
   scenario.

2. **Preload filter** — both `extract-physics-fixtures.ts` and
   `BlockExportAnalyzer` skip windows where the L payload has
   `preload: true`, `isPreload: true`, `kind: "preload"`, OR the
   scenario name matches `/(^|_)preload(_|$)|(^|_)warmup(_|$)/i`.

3. **Minimum-frames filter** (extractor only) — windows with fewer
   than 3 PAI packets are skipped as too-short.

The block-exporter applies filters 1 and 2 (no minimum-frames check),
which is why `fixtures/worlds/*.json` may have slightly more entries
than `*.test.js` if any short windows pass the extractor's gate but
aren't useful for collision testing.

---

## Lineage of a single scenario (example: `sprint_forward`)

```
recorder.exe → records → 1.26.13.1-v2_prismarine_physics.proxy.bin
                       → 1.26.13.1-v2_prismarine_physics.v26dump

extract-physics-fixtures.ts
  reads .proxy.bin
  finds L-record "test-case-start" + name="1.21.0_pb_sprint_forward"
  collects 52 player_auth_input packets between start/end
  writes:
    test/static/physics/sprint_forward.test.js
    test/static/physics/fixtures/inputs/sprint_forward.json

analyze-bin BlockExportAnalyzer
  reads .proxy.bin
  same L-record bracketing, tracks PAI positions
  walks prismarine-world's accumulated chunk state inside
    [min_pos - 4, max_pos + 4] AABB
  writes:
    test/static/physics/fixtures/worlds/sprint_forward.json

v26_physics_tick_report (uses .v26dump, not .proxy.bin)
  reads test/static/physics/sprint_forward.test.js
  greps "// Frames: N  (ticks A..B)" → tick range
  reads V26_TAG_SYSTEM_SNAPSHOT_V2 records for those ticks
  reconstructs per-entity state via apply_subrecord
  writes:
    test/static/physics/reports/sprint_forward/README.md     (index)
    test/static/physics/reports/sprint_forward/tick_0545.md
    test/static/physics/reports/sprint_forward/tick_0546.md
    ...
    test/static/physics/reports/sprint_forward/tick_0596.md
```

Total: 1 scenario name → 1 `.test.js` + 1 `inputs/*.json` + 1 `worlds/*.json`
+ 1 `reports/<scenario>/README.md` + 52 `tick_NNNN.md` files = 56 artefacts.

---

## Known edge cases

- **Stale scenario folders**: if a future recording drops a scenario,
  none of the three tools removes the orphan directory. Manual
  `rm -rf reports/<old>` is needed.

- **Scenario rename**: extract-physics-fixtures.ts strips the
  `1.21.0_pb_` prefix and sanitises the rest to `[a-z0-9_-]`. A scenario
  named `1.21.0_pb_walk_FOO` becomes `walk_foo.test.js`. BlockExportAnalyzer
  applies the same sanitisation so paths line up.

- **`.v26dump` vs `.proxy.bin`**: the dump is recorded by the in-process
  v26-tracer DLL; the proxy.bin is recorded by the network-side
  recorder. Same session, two outputs. Tools that need ECS state read
  the dump; tools that need wire-level packets read the proxy.bin.
  Their tick numbers are the same (g_game_tick), so they cross-correlate.

- **Tick-number alignment**: PAI packets in `.proxy.bin` carry a `tick`
  field that's the same `g_game_tick` written in `V26_TAG_TICK` records
  in the dump. The tick-report tool relies on this to map scenario tick
  ranges (from `.test.js` headers) to dump records.

- **`.v26world`** is recorded but currently unused by the fixture
  pipeline; the world fixtures come from replaying packets through
  prismarine-chunk inside `analyze-bin`. The `.v26world` file is
  authoritative block-state but in a different format that would need
  its own reader.
