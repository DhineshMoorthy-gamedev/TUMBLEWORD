export const BOARD_N = 7;

export const BOARD_WALLS = [
  "......#",
  "...#...",
  "..#....",
  ".......",
  "...#..#",
  "...##..",
  "...##.."
];

export const DIRS = [
  [0, -1], // 0: Up
  [1, 0],  // 1: Right
  [0, 1],  // 2: Down
  [-1, 0]  // 3: Left
];

export const REDUCE_MOTION = typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const LOCK_MS = REDUCE_MOTION ? 60 : 820;
export const MERGE_MS = REDUCE_MOTION ? 20 : 320;
export const MAX_BFS_DEPTH = 30;
export const PLAYBACK_STEP_MS = 340;
export const BEST_STREAK_KEY = 'tumbleword-best-streak';
