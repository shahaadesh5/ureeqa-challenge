exports.getPrimes = async (n) => {
  let i,
    j,
    primes = [];
  for (i = 1; i <= n; i++) {
    if (await isPrime(i)) primes.push(i);
  }
  return primes;
};

const isPrime = (number) => {
  if (number === 1 || number === 0) return false;
  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }
  return true;
};

exports.primeMedians = (primes) => {
  const mid = Math.floor(primes.length / 2);

  return primes.length % 2 !== 0
    ? [primes[mid]]
    : [primes[mid - 1], primes[mid]];
};
