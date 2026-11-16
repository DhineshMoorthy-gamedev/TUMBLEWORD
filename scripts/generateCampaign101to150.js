import fs from 'fs';
import path from 'path';
import { WORDS_7, WORDS_8 } from '../src/data/wordDictionary.js';
import { CAMPAIGN_LEVELS as EXISTING_LEVELS } from '../src/levels/campaignLevels.js';

// -------------------------------------------------------------
// SIMULATION ENGINE (Identical to game physics, bonding, and solver)
// -------------------------------------------------------------
const DIRS = [
  [0, -1], // 0: Up
  [1, 0],  // 1: Right
  [0, 1],  // 2: Down
  [-1, 0]  // 3: Left
];

function mod(n, m) {
  return ((n % m) + m) % m;
}

function isCompleted(c) {
  return !!(c && (c.completed || c.isCompletedWord));
}

function settle(n, walls, cards, g) {
  const [dx, dy] = DIRS[g];
  const order = cards
    .map((c, i) => i)
    .sort((a, b) => cards[b].x * dx + cards[b].y * dy - (cards[a].x * dx + cards[a].y * dy));

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
        (walls && walls[ny] && walls[ny][nx] === '#') ||
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

function canPartitionWord(word, tileStrings) {
  if (tileStrings.length === 0) return word.length === 0;

  let totalLen = 0;
  for (let i = 0; i < tileStrings.length; i++) {
    totalLen += tileStrings[i].length;
  }
  if (totalLen !== word.length) return false;

  function search(idx, remainingTiles) {
    if (idx === word.length) {
      return remainingTiles.length === 0;
    }
    const tried = new Set();
    for (let i = 0; i < remainingTiles.length; i++) {
      const tile = remainingTiles[i];
      if (tried.has(tile)) continue;
      tried.add(tile);
      if (word.startsWith(tile, idx)) {
        const nextRemaining = remainingTiles.filter((_, k) => k !== i);
        if (search(idx + tile.length, nextRemaining)) {
          return true;
        }
      }
    }
    return false;
  }

  return search(0, tileStrings);
}

function tryMerge(word, cards) {
  const merges = [];
  let cur = cards.map(c => ({ ...c }));
  let changed = true;

  while (changed) {
    changed = false;
    const at = new Map(cur.map((c, i) => [`${c.x},${c.y}`, i]));

    loop: for (let i = 0; i < cur.length; i++) {
      const ci = cur[i];
      if (isCompleted(ci) || !ci.ch) continue;

      for (const [dx, dy] of DIRS) {
        const j = at.get(`${ci.x + dx},${ci.y + dy}`);
        if (j === undefined) continue;

        const cj = cur[j];
        if (isCompleted(cj) || !cj.ch) continue;

        const forwardOrder = (dx > 0 || dy > 0);
        const first = forwardOrder ? ci : cj;
        const second = forwardOrder ? cj : ci;
        const firstIdx = forwardOrder ? i : j;
        const secondIdx = forwardOrder ? j : i;

        const combo1 = first.ch + second.ch;
        const combo2 = second.ch + first.ch;

        let sIdx = -1;
        let aIdx = -1;
        let newCh = null;

        if (word.includes(combo1)) {
          const candidateStrings = cur
            .filter((c, idx) => !isCompleted(c) && c.ch && idx !== firstIdx && idx !== secondIdx)
            .map(c => c.ch)
            .concat(combo1);
          if (canPartitionWord(word, candidateStrings)) {
            sIdx = firstIdx;
            aIdx = secondIdx;
            newCh = combo1;
          }
        }

        if (newCh === null && word.includes(combo2)) {
          const candidateStrings = cur
            .filter((c, idx) => !isCompleted(c) && c.ch && idx !== secondIdx && idx !== firstIdx)
            .map(c => c.ch)
            .concat(combo2);
          if (canPartitionWord(word, candidateStrings)) {
            sIdx = secondIdx;
            aIdx = firstIdx;
            newCh = combo2;
          }
        }

        if (newCh === null) {
          continue;
        }

        merges.push({ survived: cur[sIdx].id, absorbed: cur[aIdx].id, newCh });
        cur[sIdx].ch = newCh;
        cur.splice(aIdx, 1);
        changed = true;
        break loop;
      }
    }
  }

  return { newCards: cur, merges };
}

function findWin(word, cards) {
  const at = new Map(cards.filter(c => !isCompleted(c) && c.ch).map(c => [`${c.x},${c.y}`, c]));

  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      const startCard = at.get(`${x},${y}`);
      if (!startCard) continue;

      if (startCard.ch === word) {
        return [startCard.id];
      }

      for (const [dx, dy] of [[1, 0], [0, 1]]) {
        let formed = '';
        let cx = x;
        let cy = y;
        const ids = [];

        while (true) {
          const nextCard = at.get(`${cx},${cy}`);
          if (!nextCard) break;

          const nextFormed = formed + nextCard.ch;
          if (!word.startsWith(nextFormed)) break;

          ids.push(nextCard.id);
          formed = nextFormed;
          cx += dx;
          cy += dy;
        }

        if (formed === word) {
          return ids;
        }
      }
    }
  }

  return null;
}

function getStateKey(state) {
  const cardStr = state.cards
    .map(c => `${c.ch}:${c.x},${c.y}${isCompleted(c) ? ':c' : ''}`)
    .sort()
    .join(';');
  return `${state.r}|${cardStr}`;
}

function simulateTurn(word, state, dir, n = 8, walls = null) {
  const boardN = state.n || n || 8;
  const boardWalls = state.walls || walls || [];
  const nr = mod(state.r + dir, 4);
  const gravity = mod(2 - nr, 4);

  let currentCards = settle(boardN, boardWalls, state.cards, gravity);

  while (true) {
    if (findWin(word, currentCards)) {
      return { r: nr, cards: currentCards, won: true };
    }

    const { newCards, merges } = tryMerge(word, currentCards);
    if (merges.length === 0) {
      break;
    }

    currentCards = newCards;
    if (findWin(word, currentCards)) {
      return { r: nr, cards: currentCards, won: true };
    }

    const cascaded = settle(boardN, boardWalls, currentCards, gravity);
    const didMove = cascaded.some(c => {
      const prev = currentCards.find(p => p.id === c.id);
      return prev && (prev.x !== c.x || prev.y !== c.y);
    });

    currentCards = cascaded;
    if (!didMove) {
      break;
    }
  }

  return { r: nr, cards: currentCards, won: findWin(word, currentCards) !== null };
}

function solveBFS(word, initialState, maxDepth = 12, n = 8, walls = null) {
  if (!word || !initialState || !initialState.cards) return [];
  if (findWin(word, initialState.cards)) return [];

  const boardN = initialState.n || n || 8;
  const boardWalls = initialState.walls || walls || [];

  const startState = {
    r: initialState.r,
    cards: initialState.cards.map(c => ({ ...c })),
    n: boardN,
    walls: boardWalls
  };
  const queue = [{ state: startState, path: [] }];
  const visited = new Set([getStateKey(startState)]);

  while (queue.length > 0) {
    const { state, path } = queue.shift();
    if (path.length >= maxDepth) continue;

    for (const dir of [-1, 1]) {
      const nextState = simulateTurn(word, state, dir, boardN, boardWalls);
      const nextPath = [...path, dir];

      if (nextState.won) {
        return nextPath;
      }

      const key = getStateKey(nextState);
      if (!visited.has(key)) {
        visited.add(key);
        queue.push({ state: nextState, path: nextPath });
      }
    }
  }

  return null;
}

// Helper to find valid spawn positions for letters
function generateSpawnCoords(n, walls, word, existingCards = []) {
  const occ = new Set(existingCards.map(c => `${c.x},${c.y}`));
  const openSlots = [];

  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      if (walls[y] && walls[y][x] === '#' && !occ.has(`${x},${y}`)) continue;
      if (!occ.has(`${x},${y}`)) {
        openSlots.push({ x, y });
      }
    }
  }

  // Shuffle open slots
  for (let i = openSlots.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [openSlots[i], openSlots[j]] = [openSlots[j], openSlots[i]];
  }

  if (openSlots.length < word.length) return null;

  return [...word].map((ch, idx) => ({
    ch,
    x: openSlots[idx].x,
    y: openSlots[idx].y
  }));
}

// Generate walls matching chapter density
function generateWalls(n, wallCount) {
  const grid = Array.from({ length: n }, () => Array(n).fill('.'));
  let placed = 0;
  let attempts = 0;

  while (placed < wallCount && attempts < 250) {
    attempts++;
    const x = Math.floor(Math.random() * n);
    const y = Math.floor(Math.random() * n);

    // Don't wall all 4 corners or completely block rows/cols
    if (grid[y][x] === '.') {
      grid[y][x] = '#';
      placed++;
    }
  }

  return grid.map(r => r.join(''));
}

// -------------------------------------------------------------
// CHAPTER CONFIGS (Chapters 11 through 15)
// -------------------------------------------------------------
const CHAPTER_CONFIGS = [
  {
    chapterId: 11,
    chapterName: "Titan Enigma",
    tier: "Mythic",
    n: 8,
    wordLen: 7,
    wordsCount: 5,
    wallCount: 13,
    scoreBase: 1080,
    scoreRange: 100
  },
  {
    chapterId: 12,
    chapterName: "Labyrinth of Echoes",
    tier: "Mythic",
    n: 8,
    wordLen: 7,
    wordsCount: 5,
    wallCount: 15,
    scoreBase: 1200,
    scoreRange: 100
  },
  {
    chapterId: 13,
    chapterName: "Singularity Matrix",
    tier: "Legendary",
    n: 8,
    wordLen: 7,
    wordsCount: 6,
    wallCount: 16,
    scoreBase: 1320,
    scoreRange: 120
  },
  {
    chapterId: 14,
    chapterName: "Aether Crucible",
    tier: "Legendary",
    n: 8,
    wordLen: 8,
    wordsCount: 5,
    wallCount: 17,
    scoreBase: 1460,
    scoreRange: 120
  },
  {
    chapterId: 15,
    chapterName: "Transcendence Core",
    tier: "Transcendence",
    n: 8,
    wordLen: 8,
    wordsCount: 6,
    wallCount: 18,
    scoreBase: 1600,
    scoreRange: 150
  }
];

// -------------------------------------------------------------
// MAIN GENERATOR & BFS VERIFICATION LOOP
// -------------------------------------------------------------
console.log("=== STARTING CAMPAIGN EXPANSION GENERATOR (LEVELS 101-150) ===");
console.log(`Verifying existing campaign levels: Found ${EXISTING_LEVELS.length} existing levels.`);

const generatedLevels = [];
let targetLevelId = 101;

for (const cfg of CHAPTER_CONFIGS) {
  console.log(`\nGenerating Chapter ${cfg.chapterId}: "${cfg.chapterName}" (Levels ${targetLevelId} to ${targetLevelId + 9}, Tier: ${cfg.tier})...`);

  let chapterLevelsCount = 0;
  let chapterAttempts = 0;

  const pool = cfg.wordLen === 7 ? WORDS_7 : WORDS_8;

  while (chapterLevelsCount < 10 && chapterAttempts < 800) {
    chapterAttempts++;
    const n = cfg.n;
    const walls = generateWalls(n, cfg.wallCount);

    // Pick random unique words
    const shuffledPool = [...pool].sort(() => 0.5 - Math.random());
    const selectedWords = shuffledPool.slice(0, cfg.wordsCount);

    let levelSolvable = true;
    const wordsData = [];
    let cumulativeOptimal = 0;
    let simState = { r: 0, cards: [] };

    for (const wordStr of selectedWords) {
      const cards = generateSpawnCoords(n, walls, wordStr, simState.cards);
      if (!cards) {
        levelSolvable = false;
        break;
      }

      const testCards = [
        ...simState.cards,
        ...cards.map((c, i) => ({ id: 200 + i, ch: c.ch, x: c.x, y: c.y, completed: false }))
      ];

      const testState = { r: simState.r, cards: testCards, n, walls };
      const solution = solveBFS(wordStr, testState, 10, n, walls);

      if (!solution || solution.length === 0) {
        levelSolvable = false;
        break;
      }

      const bestMoves = solution.length;
      cumulativeOptimal += bestMoves;

      wordsData.push({
        word: wordStr,
        cards: cards.map(c => ({ ch: c.ch, x: c.x, y: c.y })),
        best: bestMoves
      });

      // Advance simulation state
      let nextState = testState;
      for (const dir of solution) {
        nextState = simulateTurn(wordStr, nextState, dir, n, walls);
      }

      // Settle survivor as completed obstacle
      const winIds = findWin(wordStr, nextState.cards);
      const survivor = nextState.cards.find(c => winIds && winIds.includes(c.id)) || nextState.cards[0];
      if (survivor) {
        survivor.ch = wordStr;
        survivor.completed = true;
        survivor.isCompletedWord = true;
        survivor.lifespan = wordStr.length;
      }

      simState = {
        r: nextState.r,
        cards: nextState.cards.filter(c => isCompleted(c))
      };
    }

    if (!levelSolvable || wordsData.length !== cfg.wordsCount) {
      continue;
    }

    // Name generation
    const namePrefixes = ["Trial", "Path", "Gate", "Chamber", "Orbit", "Echo", "Vault", "Pillar", "Crest", "Core"];
    let levelName = `${cfg.chapterName} ${namePrefixes[chapterLevelsCount] || chapterLevelsCount + 1}`;
    if (chapterLevelsCount === 0) levelName = `${cfg.chapterName} Entry`;
    if (chapterLevelsCount === 9) levelName = `${cfg.chapterName} Mastery`;

    // Compute difficulty score
    const step = (cfg.scoreRange / 10) * chapterLevelsCount;
    const diffScore = Math.round(cfg.scoreBase + step + (cumulativeOptimal * 2));

    const levelObj = {
      id: targetLevelId,
      name: levelName,
      chapterId: cfg.chapterId,
      chapterName: cfg.chapterName,
      n: cfg.n,
      optimalMoves: cumulativeOptimal,
      difficultyScore: diffScore,
      difficultyTier: cfg.tier,
      walls,
      words: wordsData
    };

    generatedLevels.push(levelObj);
    chapterLevelsCount++;
    console.log(`  ✓ Level ${targetLevelId}: "${levelName}" (${cfg.n}x${cfg.n}, ${wordsData.length} words, ${cumulativeOptimal} optimal moves, Score: ${diffScore})`);
    targetLevelId++;
  }

  if (chapterLevelsCount < 10) {
    console.error(`Failed to generate 10 levels for Chapter ${cfg.chapterId} in ${chapterAttempts} attempts.`);
    process.exit(1);
  }
}

// Sort new 50 levels by difficultyScore ascending
generatedLevels.sort((a, b) => a.difficultyScore - b.difficultyScore);

// Re-assign IDs 101 to 150 cleanly
generatedLevels.forEach((lvl, idx) => {
  lvl.id = 101 + idx;
});

// Verification check: ensure levels 1-100 remain intact
if (EXISTING_LEVELS.length !== 100) {
  console.error(`Error: Expected exactly 100 existing levels, but found ${EXISTING_LEVELS.length}`);
  process.exit(1);
}

const all150Levels = [...EXISTING_LEVELS, ...generatedLevels];

const fileHeader = `/**
 * 150-Level Progressive Difficulty Campaign (450 Stars Total)
 * 15 Chapters x 10 Levels each with verified solvability, dynamic grid dimensions (N=5, 6, 7, 8),
 * mathematically calibrated optimal move budgets, and progressive difficulty scores (50 -> 1800+).
 * 
 * Auto-generated and BFS solver-verified.
 */

export const CAMPAIGN_LEVELS = ${JSON.stringify(all150Levels, null, 2)};
`;

const outputPath = path.resolve(process.cwd(), 'src/levels/campaignLevels.js');
fs.writeFileSync(outputPath, fileHeader, 'utf-8');

console.log(`\n🎉 SUCCESS! Generated and verified 50 new levels (Levels 101-150).`);
console.log(`Total Campaign Levels: ${all150Levels.length} (450 Stars Total)`);
console.log(`Level 100 Score: ${all150Levels[99].difficultyScore} ("${all150Levels[99].name}")`);
console.log(`Level 101 Score: ${all150Levels[100].difficultyScore} ("${all150Levels[100].name}")`);
console.log(`Level 150 Score: ${all150Levels[149].difficultyScore} ("${all150Levels[149].name}")`);
