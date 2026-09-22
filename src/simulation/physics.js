import { DIRS } from '../config/constants.js';

/**
 * Settle all tiles (active letters and completed word blocks tumble together)
 * @param {number} n
 * @param {Array<string>} walls
 * @param {Array<object>} cards
 * @param {number} g - Gravity direction (0: up, 1: right, 2: down, 3: left)
 * @returns {Array<object>}
 */
export function settle(n, walls, cards, g) {
  const [dx, dy] = DIRS[g];
  const order = cards
    .map((c, i) => i)
    .sort(
      (a, b) =>
        cards[b].x * dx + cards[b].y * dy - (cards[a].x * dx + cards[a].y * dy)
    );

  const out = cards.map(c => ({ ...c }));
  const occ = new Set(out.map(c => `${c.x},${c.y}`));

  for (const i of order) {
    let { x, y } = out[i];
    occ.delete(`${x},${y}`);

    while (true) {
      const nx = x + dx;
      const ny = y + dy;
      if (
        nx < 0 ||
        ny < 0 ||
        nx >= n ||
        ny >= n ||
        walls[ny][nx] === '#' ||
        occ.has(`${nx},${ny}`)
      ) {
        break;
      }
      x = nx;
      y = ny;
    }

    out[i].x = x;
    out[i].y = y;
    occ.add(`${x},${y}`);
  }

  return out;
}
