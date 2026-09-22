/**
 * Canonical modulo operation handling negative dividends
 * @param {number} a
 * @param {number} m
 * @returns {number}
 */
export function mod(a, m) {
  return ((a % m) + m) % m;
}

/**
 * Deep clone serializable objects
 * @template T
 * @param {T} obj
 * @returns {T}
 */
export function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}
