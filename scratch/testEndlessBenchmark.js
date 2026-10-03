import { simulateEndlessSeed, runBatchSeedBenchmark } from '../src/simulation/endlessSimulator.js';

console.log("=== RUNNING SEED #42 ENDLESS SIMULATION ===");
const singleResult = simulateEndlessSeed(42, 100);
console.log(`Seed: ${singleResult.seed}`);
console.log(`Max Streak Achieved: ${singleResult.streak} words`);
console.log(`Total Moves: ${singleResult.totalMoves} (Avg: ${singleResult.avgMoves} moves/word)`);
console.log(`Termination Reason: ${singleResult.reason}`);
console.log(`First 10 words solved:`, singleResult.wordsSolved.slice(0, 10).map(w => `${w.word} (${w.moves}m)`).join(', '));

console.log("\n=== RUNNING MONTE CARLO BATCH BENCHMARK (SEEDS 1 to 25) ===");
const batch = runBatchSeedBenchmark(1, 25, 100);
console.log(`Total Seeds Benchmarked: ${batch.totalSeeds}`);
console.log(`Average Max Streak: ${batch.avgStreak} words`);
console.log(`Highest Streak: ${batch.maxStreak} words (Seed #${batch.maxSeed})`);
console.log(`Lowest Streak: ${batch.minStreak} words (Seed #${batch.minSeed})`);

console.log("\nSample Seed Results:");
batch.results.slice(0, 10).forEach(r => {
  console.log(`  • Seed #${r.seed}: Streak ${r.streak} words | ${r.totalMoves} moves | ${r.reason}`);
});
