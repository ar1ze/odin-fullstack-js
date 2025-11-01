const sumToLoop = function sumToLoop(n) {
  for (let i = n - 1; i > 0; i--) {
    n += i;
  }
  return n;
};

const sumToRecursion = function sumToRecursion(n) {
  if (n === 1) {
    return 1;
  }
  return n + sumToRecursion(n - 1);
};

const sumToFormula = function sumToFormula(n) {
  return (n * (n + 1)) / 2;
};

console.log(sumToLoop(100));
console.log(sumToRecursion(100));
console.log(sumToFormula(100));
