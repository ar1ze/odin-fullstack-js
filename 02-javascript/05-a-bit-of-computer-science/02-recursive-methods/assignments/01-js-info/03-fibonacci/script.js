const fibonacciRecursive = function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

const fibonacciLoop = function fibonacciLoop(n) {
  let a = 0;
  let b = 1;

  for (let i = 1; i < n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
};

console.log(fibonacciRecursive(3));
console.log(fibonacciLoop(3));
