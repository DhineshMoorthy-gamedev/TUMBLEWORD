import { mod, deepClone } from '../utils/math.js';
import { settle } from './physics.js';
import { tryMerge } from './bonding.js';
import { findWin, isCompleted } from './winCondition.js';
import { solveBFS } from './solver.js';
import { findSpawnPositions } from '../levels/spawnSystem.js';

/**
 * Generate full pre-solved solution timeline matching moves 1-to-1 for any level
 * @param {object|Array<object>} levelOrWords
 * @returns {{timeline: Array<object>, totalMoves: number}}
 */
export function generateMoveTimeline(levelOrWords) {
  const words = Array.isArray(levelOrWords)
    ? levelOrWords
    : (levelOrWords.words || []);
  const boardN = levelOrWords.n || (words[0] && words[0].n) || 5;
  const boardWalls = levelOrWords.walls || (words[0] && words[0].walls) || [];

  let nextCardIdSim = 1;
  let simCards = [];
  let simR = 0;
  let simAngle = 0;
  let simMoves = 0;
  const timeline = [];

  if (!words || words.length === 0) {
    return { timeline: [], totalMoves: 0 };
  }

  function spawnWord(wordIdx) {
    const lv = words[wordIdx];
    const positions = findSpawnPositions(lv, lv.word.length, simCards, boardN, boardWalls);
    const newLetters = [...lv.word].map((ch, idx) => ({
      id: nextCardIdSim++,
      ch,
      x: positions[idx] ? positions[idx].x : 0,
      y: positions[idx] ? positions[idx].y : 0,
      completed: false,
      isCompletedWord: false,
      isNew: false
    }));
    simCards.push(...newLetters);
  }

  // Initial spawn of word 0
  spawnWord(0);

  timeline.push({
    move: 0,
    wordIdx: 0,
    word: words[0].word,
    r: simR,
    angle: simAngle,
    streak: 0,
    cards: deepClone(simCards),
    desc: `Starting Level: Spell <strong>${words[0].word}</strong> (Word 1/${words.length})`
  });

  for (let levelIdx = 0; levelIdx < words.length; levelIdx++) {
    const lv = words[levelIdx];
    const sol = solveBFS(
      lv.word,
      { r: simR, cards: simCards, n: boardN, walls: boardWalls },
      30,
      boardN,
      boardWalls
    );

    if (sol && sol.length > 0) {
      for (let stepInLevel = 0; stepInLevel < sol.length; stepInLevel++) {
        const dir = sol[stepInLevel];
        const isLastMoveInLevel = stepInLevel === sol.length - 1;
        simMoves++;
        simR = mod(simR + dir, 4);
        simAngle += 90 * dir;
        const gravity = mod(2 - simR, 4);
        simCards = settle(boardN, boardWalls, simCards, gravity);

        while (true) {
          const winIds = findWin(lv.word, simCards);
          if (winIds) break;

          const { newCards, merges } = tryMerge(lv.word, simCards);
          if (merges.length === 0) break;

          simCards = newCards;
          if (findWin(lv.word, simCards)) break;

          const cascaded = settle(boardN, boardWalls, simCards, gravity);
          const didMove = cascaded.some(c => {
            const prev = simCards.find(p => p.id === c.id);
            return prev && (prev.x !== c.x || prev.y !== c.y);
          });
          simCards = cascaded;
          if (!didMove) break;
        }

        if (!isLastMoveInLevel) {
          timeline.push({
            move: simMoves,
            wordIdx: levelIdx,
            word: lv.word,
            r: simR,
            angle: simAngle,
            streak: levelIdx,
            cards: deepClone(simCards),
            desc: `Move ${simMoves}: ${dir === -1 ? 'Turn Left ◀' : 'Turn Right ▶'} (Spelling ${lv.word})`
          });
        } else {
          // Word completed at this move
          const winIdsNow = findWin(lv.word, simCards) || [simCards[0].id];
          const winCards = simCards.filter(c => winIdsNow.includes(c.id));
          const survivor = winCards[0] || simCards[0];
          survivor.ch = lv.word;
          survivor.completed = true;
          survivor.isCompletedWord = true;
          survivor.lifespan = lv.word.length;

          const expiredIds = [];
          simCards.forEach(c => {
            if (isCompleted(c) && c.id !== survivor.id && c.lifespan !== undefined) {
              c.lifespan--;
              if (c.lifespan <= 0) expiredIds.push(c.id);
            }
          });

          const removeIds = winCards.slice(1).map(c => c.id);
          simCards = simCards.filter(
            c => !removeIds.includes(c.id) && !expiredIds.includes(c.id)
          );

          const isFinalLevel = levelIdx === words.length - 1;

          if (!isFinalLevel) {
            const nextWordIdx = levelIdx + 1;
            spawnWord(nextWordIdx);
            timeline.push({
              move: simMoves,
              wordIdx: nextWordIdx,
              word: words[nextWordIdx].word,
              r: simR,
              angle: simAngle,
              streak: levelIdx + 1,
              cards: deepClone(simCards),
              desc: `Move ${simMoves}: ${dir === -1 ? 'Turn Left ◀' : 'Turn Right ▶'} ➔ Formed <strong>${lv.word}</strong>! [Streak: ${levelIdx + 1}/${words.length}] (Next: ${words[nextWordIdx].word})`
            });
          } else {
            timeline.push({
              move: simMoves,
              wordIdx: levelIdx,
              word: lv.word,
              r: simR,
              angle: simAngle,
              streak: words.length,
              cards: deepClone(simCards),
              desc: `Move ${simMoves}: ${dir === -1 ? 'Turn Left ◀' : 'Turn Right ▶'} ➔ Formed <strong>${lv.word}</strong>! 🎉 <strong>All ${words.length} words completed!</strong>`,
              isVictory: true
            });
          }
        }
      }
    }
  }

  return { timeline, totalMoves: simMoves };
}
