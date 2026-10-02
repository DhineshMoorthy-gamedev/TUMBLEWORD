import { CAMPAIGN_LEVELS } from '../src/levels/campaignLevels.js';
import { solveBFS, simulateTurn } from '../src/simulation/solver.js';
import { findWin } from '../src/simulation/winCondition.js';

console.log(`Verifying all ${CAMPAIGN_LEVELS.length} levels with src/simulation engine...`);

let failed = 0;

for (const level of CAMPAIGN_LEVELS) {
  let simState = { r: 0, cards: [] };
  
  for (let wIdx = 0; wIdx < level.words.length; wIdx++) {
    const wordData = level.words[wIdx];
    const wordStr = wordData.word;
    
    // Spawn cards
    const testCards = [
      ...simState.cards,
      ...wordData.cards.map((c, i) => ({ id: 100 + i, ch: c.ch, x: c.x, y: c.y, completed: false }))
    ];
    
    const testState = { r: simState.r, cards: testCards, n: level.n, walls: level.walls };
    const solution = solveBFS(wordStr, testState, 12, level.n, level.walls);
    
    if (!solution || solution.length === 0) {
      console.error(`❌ Level ${level.id} (${level.name}), word #${wIdx + 1} "${wordStr}" failed BFS solve!`);
      failed++;
      break;
    }
    
    // Simulate solution
    let nextState = testState;
    for (const dir of solution) {
      nextState = simulateTurn(wordStr, nextState, dir, level.n, level.walls);
    }
    
    const winIds = findWin(wordStr, nextState.cards);
    if (!winIds) {
      console.error(`❌ Level ${level.id} (${level.name}), word "${wordStr}" did not reach win state after path!`);
      failed++;
      break;
    }
    
    const survivor = nextState.cards.find(c => winIds.includes(c.id)) || nextState.cards[0];
    if (survivor) {
      survivor.ch = wordStr;
      survivor.completed = true;
      survivor.isCompletedWord = true;
      survivor.lifespan = wordStr.length;
    }
    
    simState = {
      r: nextState.r,
      cards: nextState.cards.filter(c => c.completed || c.isCompletedWord)
    };
  }
}

if (failed === 0) {
  console.log(`✅ All ${CAMPAIGN_LEVELS.length} levels verified 100% solvable with src/ simulation engine!`);
} else {
  console.error(`❌ ${failed} levels failed verification.`);
  process.exit(1);
}
