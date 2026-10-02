function canPartitionWord(word, pieces) {
  function match(target, remaining) {
    if (target === '') return remaining.length === 0;
    for (let i = 0; i < remaining.length; i++) {
      const p = remaining[i];
      if (target.startsWith(p)) {
        const nextTarget = target.slice(p.length);
        const nextRemaining = remaining.filter((_, idx) => idx !== i);
        if (match(nextTarget, nextRemaining)) {
          return true;
        }
      }
    }
    return false;
  }
  return match(word, pieces);
}

console.log('["BRE", "E", "Z", "E"] ->', canPartitionWord('BREEZE', ['BRE', 'E', 'Z', 'E'])); // true
console.log('["BRE", "EZ", "E"] ->', canPartitionWord('BREEZE', ['BRE', 'EZ', 'E'])); // true
console.log('["BRE", "EEZ"] ->', canPartitionWord('BREEZE', ['BRE', 'EEZ'])); // false (CORRECT! Prevented!)
console.log('["BREE", "ZE"] ->', canPartitionWord('BREEZE', ['BREE', 'ZE'])); // true
console.log('["BREEZE"] ->', canPartitionWord('BREEZE', ['BREEZE'])); // true
console.log('["BAN", "ANA"] ->', canPartitionWord('BANANA', ['BAN', 'ANA'])); // true
console.log('["BANA", "NA"] ->', canPartitionWord('BANANA', ['BANA', 'NA'])); // true
console.log('["BAAN", "NA"] ->', canPartitionWord('BANANA', ['BAAN', 'NA'])); // false
