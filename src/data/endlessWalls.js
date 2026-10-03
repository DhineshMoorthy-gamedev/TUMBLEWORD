import { CAMPAIGN_LEVELS } from '../levels/campaignLevels.js';

// Curate distinct N=6 wall patterns from campaign levels
export const ENDLESS_WALL_TEMPLATES = (function() {
  const templates = [];
  const seen = new Set();
  for (const lvl of CAMPAIGN_LEVELS) {
    if (lvl.n === 6 && lvl.walls && lvl.walls.length === 6) {
      const key = lvl.walls.join(',');
      if (!seen.has(key)) {
        seen.add(key);
        templates.push(lvl.walls);
      }
    }
  }
  return templates.length > 0 ? templates : [
    [
      "......",
      "...#..",
      "......",
      "..#...",
      "......",
      "......"
    ]
  ];
})();

/**
 * Get deterministic fixed wall layout for an endless mode run based on seed
 * @param {number|() => number} seedOrPrng
 * @returns {Array<string>} 6x6 walls array
 */
export function getEndlessWalls(seedOrPrng) {
  if (ENDLESS_WALL_TEMPLATES.length === 0) {
    return Array(6).fill('......');
  }
  let idx = 0;
  if (typeof seedOrPrng === 'function') {
    idx = Math.floor(seedOrPrng() * ENDLESS_WALL_TEMPLATES.length);
  } else {
    idx = Math.abs(Math.floor(Number(seedOrPrng) || 0)) % ENDLESS_WALL_TEMPLATES.length;
  }
  return ENDLESS_WALL_TEMPLATES[idx];
}
