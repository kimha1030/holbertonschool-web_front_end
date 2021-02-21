#!/usr/bin/node

function countPrimeNumbers() {
  let prime_array = [];
  for (let i = 2; i <= 100; i++) {
    let x = 1;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        x = 0;
        break;
      }
    }
    if (x == 1) {
      prime_array.push(i);
    }
  }
  return prime_array.length;
}

let t0 = performance.now();
for (let x = 0; x < 100; x++) {
  countPrimeNumbers();
}
let t1 = performance.now();
let time_exec = t1 - t0;
console.log(
  "Execution time of calculating prime numbers 100 times was " +
    time_exec +
    " milliseconds."
);
