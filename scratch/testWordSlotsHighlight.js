import { findTileRangesInWord } from '../src/rendering/WordSlotsRenderer.js';

console.log("=== TESTING findTileRangesInWord ===");

function test(name, word, cards, expectedBondedIndices) {
  const ranges = findTileRangesInWord(word, cards);
  const bondedIndices = [];
  for (const r of ranges) {
    if (r.isBonded) {
      for (let i = r.start; i < r.end; i++) {
        bondedIndices.push(i);
      }
    }
  }
  bondedIndices.sort((a, b) => a - b);
  const expectedSorted = [...expectedBondedIndices].sort((a, b) => a - b);
  const pass = JSON.stringify(bondedIndices) === JSON.stringify(expectedSorted);
  if (pass) {
    console.log(`✓ [PASS] ${name} => Bonded indices: [${bondedIndices.join(', ')}]`);
  } else {
    console.error(`✗ [FAIL] ${name} => Got [${bondedIndices.join(', ')}], expected [${expectedSorted.join(', ')}]`);
    console.error('  Ranges:', ranges);
    process.exit(1);
  }
}

// 1. All single raw letters
test("PLANET raw", "PLANET", [
  { ch: "P", completed: false },
  { ch: "L", completed: false },
  { ch: "A", completed: false },
  { ch: "N", completed: false },
  { ch: "E", completed: false },
  { ch: "T", completed: false }
], []);

// 2. One bonded tile at start
test("PLANET PL bonded", "PLANET", [
  { ch: "PL", completed: false },
  { ch: "A", completed: false },
  { ch: "N", completed: false },
  { ch: "E", completed: false },
  { ch: "T", completed: false }
], [0, 1]);

// 3. Two bonded tiles: PL and ET
test("PLANET PL and ET bonded", "PLANET", [
  { ch: "PL", completed: false },
  { ch: "A", completed: false },
  { ch: "N", completed: false },
  { ch: "ET", completed: false }
], [0, 1, 4, 5]);

// 4. Repeated letters BREEZE: BRE bonded
test("BREEZE BRE bonded", "BREEZE", [
  { ch: "BRE", completed: false },
  { ch: "E", completed: false },
  { ch: "Z", completed: false },
  { ch: "E", completed: false }
], [0, 1, 2]);

// 5. Repeated letters BREEZE: BRE and ZE bonded
test("BREEZE BRE and ZE bonded", "BREEZE", [
  { ch: "BRE", completed: false },
  { ch: "E", completed: false },
  { ch: "ZE", completed: false }
], [0, 1, 2, 4, 5]);

// 6. Repeated letters BREEZE: BREE and ZE bonded
test("BREEZE BREE and ZE bonded", "BREEZE", [
  { ch: "BREE", completed: false },
  { ch: "ZE", completed: false }
], [0, 1, 2, 3, 4, 5]);

// 7. Distinct multi-chunk PLA and NET for PLANET
test("PLANET PLA and NET distinct chunks", "PLANET", [
  { ch: "PLA", completed: false },
  { ch: "NET", completed: false }
], [0, 1, 2, 3, 4, 5]);

// 8. Ignoring completed obstacle tiles from previous words
test("With completed obstacle tiles", "STORM", [
  { ch: "SHADOW", completed: true, isCompletedWord: true },
  { ch: "ST", completed: false },
  { ch: "O", completed: false },
  { ch: "RM", completed: false }
], [0, 1, 3, 4]);

console.log("\n🎉 ALL TESTS PASSED SUCCESSFULLY!");
