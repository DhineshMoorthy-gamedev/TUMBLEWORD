# Tumbleword Refactor & Migration Report

## 1. Overview
This document records the migration of Tumbleword from a single-file monolith (`tumbleword.html`) into a clean, modular ES module architecture bundled with **Vite**.

---

## 2. What Was Moved & Split

| Original Location (`tumbleword.html`) | New Target Module | Purpose |
| :--- | :--- | :--- |
| `<style>` (Lines 10–250) | `styles/main.css` | Extracted all typography, responsive layout, CSS grid styling, and animations into a standalone stylesheet. |
| `LEVELS` array (Lines 330–343) | `src/levels/levelData.js` | Data-driven level definitions containing words, starting coords, and wall masks. |
| `findSpawnPositions` & card creation | `src/levels/spawnSystem.js` | Floor cell spatial allocation and initial tile instantiation. |
| `settle` function | `src/simulation/physics.js` | Pure gravity settling simulation along 4 cardinal directions. |
| `tryMerge` function | `src/simulation/bonding.js` | Adjacent letter merge and compound tile generation. |
| `findWin` & `isCompleted` | `src/simulation/winCondition.js` | Compound and spatial win condition validation. |
| `solveBFS` & `simulateTurn` | `src/simulation/solver.js` | Optimal pathfinding search algorithm. |
| `generateMoveTimeline` | `src/simulation/timeline.js` | Pre-computing 64-step move sequence (Move 0 to 63). |
| Board DOM manipulation & face updates | `src/rendering/BoardRenderer.js` | Board rotation, CSS transitions, font scaling (`data-len`), and durability badges. |
| Word slots rendering | `src/rendering/WordSlotsRenderer.js` | Target word letter slots and win highlights. |
| Status & score text updates | `src/ui/UIManager.js` | Score metrics, status messages, and victory modal overlay. |
| Scrubber slider & play/pause timer | `src/ui/TimelineController.js` | Timeline navigation, scrubbing input, and playback controller. |
| Button clicks & keydown bindings | `src/input/InputManager.js` | Input routing and mode toggle handling. |
| Game state variables (`S`, `hist`, `streak`) | `src/core/GameState.js` | Encapsulated, serializable state model. |
| Game lifecycle (`turn`, `undo`, `completeWord`) | `src/core/GameEngine.js` | Central orchestrator for interactive gameplay. |
| Bootstrap logic | `src/main.js` | Module graph entry point. |

---

## 3. What Was Removed or Cleaned Up

* **Duplicate functions**: Removed duplicated `startEndlessRun` declarations and leftover prototype experiments from early iterations.
* **Global Variables**: Removed direct window global leaks (`window.S`, `window.cardEls`, etc.), encapsulating all state inside modular class instances.
* **Inline Event Handlers**: Replaced inline listeners with structured `InputManager` event binding.

---

## 4. Behavior-Preservation Decisions

1. **Exact 1-to-1 Move Scrubber**: Preserved the Move 0 to Move 63 timeline mapping with matching step counters and victory trigger on Move 63.
2. **Compound Letter Scaling**: Preserved the exact CSS dynamic font sizing formula (`calc(100cqw / var(--n) * .54)`, etc.) based on `data-len` attribute so bonded words remain readable across all board sizes.
3. **Decaying Obstacle Mechanics**: Preserved word durability counters (`lifespan = word.length`), badge pulse animations on expiration (`badge.expiring`), and dissolution delays.
4. **Zero Gameplay Alteration**: Par move targets, gravity physics, wall collisions, rotation timing (`LOCK_MS = 820ms`), and merge animation duration (`MERGE_MS = 320ms`) are 100% identical to the prototype.

---

## 5. Verification & Validation Performed

| Check | Result | Verification Notes |
| :--- | :---: | :--- |
| **`npm install`** | ✅ PASS | Vite installed cleanly with zero vulnerability alerts. |
| **`npm run build`** | ✅ PASS | Built production bundle in `dist/` (HTML 3.98 kB, JS 22.32 kB, CSS 10.09 kB). |
| **`npm run preview`** | ✅ PASS | Production preview server serves the application with relative path compatibility. |
| **Interactive Play Mode** | ✅ PASS | Turns (`←` / `→`), undos (`Z`), restarts (`R`), tile compounding, and victory triggers operate smoothly. |
| **Editor / Solver Mode** | ✅ PASS | Range slider scrubs from Move 0 to 63; solution playback timer animates all 12 words to completion. |
