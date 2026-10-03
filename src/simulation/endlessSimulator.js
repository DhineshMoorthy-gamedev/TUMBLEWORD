import { createPRNG, createEndlessWordDeck } from '../data/wordDictionary.js';
import { getEndlessWalls } from '../data/endlessWalls.js';
import { findSpawnPositions } from '../levels/spawnSystem.js';
import { solveBFS, simulateTurn } from './solver.js';
import { findWin } from './winCondition.js';

/**
 * Simulate a complete headless Endless Mode run for a specific seed using BFS
 * @param {number} seed
 * @param {number} [maxWords=100]
 * @param {object} [options={}]
 * @returns {{seed: number, streak: number, totalMoves: number, avgMoves: string, reason: string, wordsSolved: Array<object>}}
 */
export function simulateEndlessSeed(seed, maxWords = 100, options = {}) {
  const prng = createPRNG(seed);
  const wordDeck = createEndlessWordDeck(prng);
  const walls = getEndlessWalls(seed);
  const n = 6;
  let streak = 0;
  let totalMoves = 0;
  let state = { r: 0, cards: [] };
  const wordsSolved = [];

  for (let wordIdx = 0; wordIdx < maxWords; wordIdx++) {
    const word = wordDeck.getNextWord(wordIdx);
    const spawnSlots = findSpawnPositions(
      { word, n, walls },
      word.length,
      state.cards,
      n,
      walls,
      prng,
      state.r
    );

    if (!spawnSlots || spawnSlots.length < word.length) {
      return {
        seed,
        streak,
        totalMoves,
        avgMoves: streak > 0 ? (totalMoves / streak).toFixed(1) : '0.0',
        reason: `Board Saturated for word #${wordIdx + 1} ("${word}")`,
        wordsSolved
      };
    }

    const candidateCards = [
      ...state.cards,
      ...spawnSlots.map((slot, idx) => ({
        id: 1000 + wordIdx * 20 + idx,
        ch: word[idx],
        x: slot.x,
        y: slot.y,
        completed: false
      }))
    ];

    const candidateState = { r: state.r, cards: candidateCards, n, walls };
    const solution = solveBFS(word, candidateState, 12, n, walls);

    if (!solution || solution.length === 0) {
      return {
        seed,
        streak,
        totalMoves,
        avgMoves: streak > 0 ? (totalMoves / streak).toFixed(1) : '0.0',
        reason: `No BFS path found for word #${wordIdx + 1} ("${word}")`,
        wordsSolved
      };
    }

    // Execute solution
    let nextState = candidateState;
    for (const dir of solution) {
      nextState = simulateTurn(word, nextState, dir, n, walls);
    }

    const winIds = findWin(word, nextState.cards);
    if (!winIds) {
      return {
        seed,
        streak,
        totalMoves,
        avgMoves: streak > 0 ? (totalMoves / streak).toFixed(1) : '0.0',
        reason: `Turn execution did not reach win state for "${word}"`,
        wordsSolved
      };
    }

    // Convert survivor into obstacle with lifespan
    const survivor = nextState.cards.find(c => winIds.includes(c.id)) || nextState.cards[0];
    survivor.ch = word;
    survivor.completed = true;
    survivor.isCompletedWord = true;
    survivor.lifespan = word.length;

    // Age existing obstacles and dissolve expired ones
    const updatedObstacles = nextState.cards
      .filter(c => c.completed || c.isCompletedWord)
      .map(c => (c.id === survivor.id ? c : { ...c, lifespan: c.lifespan - 1 }))
      .filter(c => c.lifespan > 0);

    state = {
      r: nextState.r,
      cards: updatedObstacles
    };

    streak++;
    totalMoves += solution.length;
    wordsSolved.push({
      word,
      moves: solution.length,
      obstacleCount: updatedObstacles.length
    });
  }

  return {
    seed,
    streak,
    totalMoves,
    avgMoves: (totalMoves / streak).toFixed(1),
    reason: `Completed maximum target benchmark of ${maxWords} words!`,
    wordsSolved
  };
}

/**
 * Run a batch Monte Carlo simulation across multiple seeds
 * @param {number} [startSeed=1]
 * @param {number} [endSeed=50]
 * @param {number} [maxWords=100]
 * @returns {{totalSeeds: number, avgStreak: number, maxStreak: number, maxSeed: number, minStreak: number, minSeed: number, results: Array<object>}}
 */
export function runBatchSeedBenchmark(startSeed = 1, endSeed = 50, maxWords = 100) {
  const results = [];
  let totalStreak = 0;
  let maxStreak = -1;
  let maxSeed = startSeed;
  let minStreak = Infinity;
  let minSeed = startSeed;

  for (let seed = startSeed; seed <= endSeed; seed++) {
    const res = simulateEndlessSeed(seed, maxWords);
    results.push(res);
    totalStreak += res.streak;

    if (res.streak > maxStreak) {
      maxStreak = res.streak;
      maxSeed = seed;
    }
    if (res.streak < minStreak) {
      minStreak = res.streak;
      minSeed = seed;
    }
  }

  const totalSeeds = endSeed - startSeed + 1;
  const avgStreak = (totalStreak / totalSeeds).toFixed(1);

  return {
    totalSeeds,
    avgStreak: parseFloat(avgStreak),
    maxStreak,
    maxSeed,
    minStreak,
    minSeed,
    results
  };
}

/**
 * Build interactive move-by-move timeline snapshots for an endless seed run
 * @param {number} seed
 * @param {number} [maxWords=20]
 * @returns {{timeline: Array<object>, totalMoves: number, streak: number, words: Array<object>}}
 */
export function buildEndlessTimelineSnapshots(seed, maxWords = 20) {
  const prng = createPRNG(seed);
  const wordDeck = createEndlessWordDeck(prng);
  const walls = getEndlessWalls(seed);
  const n = 6;
  let simCards = [];
  let simR = 0;
  let simAngle = 0;
  let simMoves = 0;
  let streak = 0;
  const timeline = [];
  const wordsList = [];

  for (let wordIdx = 0; wordIdx < maxWords; wordIdx++) {
    const word = wordDeck.getNextWord(wordIdx);
    wordsList.push({ word, n, walls });

    const spawnSlots = findSpawnPositions(
      { word, n, walls },
      word.length,
      simCards,
      n,
      walls,
      prng,
      simR
    );

    if (!spawnSlots || spawnSlots.length < word.length) {
      break;
    }

    const newLetters = spawnSlots.map((slot, idx) => ({
      id: 1000 + wordIdx * 20 + idx,
      ch: word[idx],
      x: slot.x,
      y: slot.y,
      completed: false
    }));

    const candidateCards = [...simCards, ...newLetters];
    const testState = { r: simR, cards: candidateCards, n, walls };
    const solution = solveBFS(word, testState, 12, n, walls);

    if (!solution || solution.length === 0) {
      break;
    }

    simCards = candidateCards;

    timeline.push({
      move: simMoves,
      wordIdx,
      word,
      r: simR,
      angle: simAngle,
      streak,
      cards: simCards.map(c => ({ ...c })),
      desc: `Endless Seed #${seed}: Spell <strong>${word}</strong> (Streak ${streak})`
    });

    for (let sIdx = 0; sIdx < solution.length; sIdx++) {
      const dir = solution[sIdx];
      const isLastStep = sIdx === solution.length - 1;
      const turnName = dir === -1 ? 'Left ↺' : 'Right ↻';

      simR = (simR + dir + 4) % 4;
      simAngle += dir * 90;
      simMoves++;

      const nextState = simulateTurn(word, { r: (simR - dir + 4) % 4, cards: simCards, n, walls }, dir, n, walls);
      simCards = nextState.cards;

      if (isLastStep) {
        const winIds = findWin(word, simCards);
        if (winIds) {
          const survivor = simCards.find(c => winIds.includes(c.id)) || simCards[0];
          survivor.ch = word;
          survivor.completed = true;
          survivor.isCompletedWord = true;
          survivor.lifespan = word.length;

          simCards = simCards
            .filter(c => c.completed || c.isCompletedWord)
            .map(c => (c.id === survivor.id ? c : { ...c, lifespan: c.lifespan - 1 }))
            .filter(c => c.lifespan > 0);

          streak++;
        }
      }

      timeline.push({
        move: simMoves,
        wordIdx,
        word,
        r: simR,
        angle: simAngle,
        streak,
        cards: simCards.map(c => ({ ...c })),
        desc: isLastStep
          ? `Completed <strong>${word}</strong>! Streak: ${streak}`
          : `Turn ${turnName} -> Step ${sIdx + 1}/${solution.length}`
      });
    }
  }

  return {
    timeline,
    totalMoves: simMoves,
    streak,
    words: wordsList
  };
}
