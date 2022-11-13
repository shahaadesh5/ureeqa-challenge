/**
 *
 * @param {Number} n
 * @returns {Array} - Prime numbers upto n
 */

exports.getPrimes = async (n) => {
  let i,
    primes = [];
  for (i = 1; i <= n; i++) {
    if (await isPrime(i)) primes.push(i);
  }
  return primes;
};
/**
 *
 * @param {Number} number
 * @returns {Boolean} - if number is prime or not
 */
const isPrime = (number) => {
  if (number === 1 || number === 0) return false;
  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }
  return true;
};
/**
 *
 * @param {Array} primes
 * @returns {Array} - Median (center) of prime numbers inputted
 */
exports.primeMedians = (primes) => {
  if (!primes.length) return [];
  const mid = Math.floor(primes.length / 2);

  return primes.length % 2 !== 0
    ? [primes[mid]]
    : [primes[mid - 1], primes[mid]];
};
