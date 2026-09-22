import { BOARD_N, BOARD_WALLS } from '../config/constants.js';
import { mod, deepClone } from '../utils/math.js';
import { settle } from './physics.js';
import { tryMerge } from './bonding.js';
import { findWin, isCompleted } from './winCondition.js';
import { solveBFS } from './solver.js';
import { findSpawnPositions } from '../levels/spawnSystem.js';

/**
 * Generate full pre-solved solution timeline matching moves 1-to-1 (Move 0 to 63)
 * @param {Array<object>} levels
 * @returns {{timeline: Array<object>, totalMoves: number}}
 */
export function generateMoveTimeline(levels) {
  let nextCardIdSim = 1;
  let simCards = [];
  let simR = 0;
  let simAngle = 0;
  let simMoves = 0;
  const timeline = [];

  function spawnWord(wordIdx) {
    const lv = levels[wordIdx];
    const positions = findSpawnPositions(lv, lv.word.length, simCards);
    const newLetters = [...lv.word].map((ch, idx) => ({
      id: nextCardIdSim++,
      ch,
      x: positions[idx] ? positions[idx].x : 0,
      y: positions[idx] ? positions[idx].y : 0,
      wi: idx,
      we: idx,
      completed: false,
      isCompletedWord: false,
      isNew: false
    }));
    simCards.push(...newLetters);
  }

  // Initial spawn of word 0 (CAT)
  spawnWord(0);

  timeline.push({
    move: 0,
    wordIdx: 0,
    word: levels[0].word,
    r: simR,
    angle: simAngle,
    streak: 0,
    cards: deepClone(simCards),
    desc: `Starting Run: Spell <strong>${levels[0].word}</strong> (Word 1/${levels.length})`
  });

  for (let levelIdx = 0; levelIdx < levels.length; levelIdx++) {
    const lv = levels[levelIdx];
    const sol = solveBFS(lv.word, { r: simR, cards: simCards });

    if (sol && sol.length > 0) {
      for (let stepInLevel = 0; stepInLevel < sol.length; stepInLevel++) {
        const dir = sol[stepInLevel];
        const isLastMoveInLevel = stepInLevel === sol.length - 1;
        simMoves++;
        simR = mod(simR + dir, 4);
        simAngle += 90 * dir;
        simCards = settle(BOARD_N, BOARD_WALLS, simCards, mod(2 - simR, 4));

        const winIds = findWin(lv.word, simCards);
        if (!winIds) {
          const { newCards } = tryMerge(lv.word, simCards);
          simCards = newCards;
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
          delete survivor.wi;
          delete survivor.we;

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

          const isFinalLevel = levelIdx === levels.length - 1;

          if (!isFinalLevel) {
            const nextWordIdx = levelIdx + 1;
            spawnWord(nextWordIdx);
            timeline.push({
              move: simMoves,
              wordIdx: nextWordIdx,
              word: levels[nextWordIdx].word,
              r: simR,
              angle: simAngle,
              streak: levelIdx + 1,
              cards: deepClone(simCards),
              desc: `Move ${simMoves}: ${dir === -1 ? 'Turn Left ◀' : 'Turn Right ▶'} ➔ Formed <strong>${lv.word}</strong>! [Streak: ${levelIdx + 1}/${levels.length}] (Next: ${levels[nextWordIdx].word})`
            });
          } else {
            timeline.push({
              move: simMoves,
              wordIdx: levelIdx,
              word: lv.word,
              r: simR,
              angle: simAngle,
              streak: levels.length,
              cards: deepClone(simCards),
              desc: `Move ${simMoves}: ${dir === -1 ? 'Turn Left ◀' : 'Turn Right ▶'} ➔ Formed <strong>${lv.word}</strong>! 🎉 <strong>All ${levels.length} words completed!</strong>`,
              isVictory: true
            });
          }
        }
      }
    }
  }

  return { timeline, totalMoves: simMoves };
}
