const factorial = function factorial(n) {
  if (n == 1) return n;
  return n * factorial(n - 1);
};

const result = factorial(5);
console.log(result);
