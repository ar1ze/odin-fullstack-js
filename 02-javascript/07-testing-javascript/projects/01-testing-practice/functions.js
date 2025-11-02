export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function reverseString(string) {
  return string.split('').reverse().join('');
}

export const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  },
  divide(a, b) {
    return a / b;
  },
};

export function analyzeArray(array) {
  const length = array.length;
  const average = array.reduce((acc, curr) => acc + curr) / length;
  const min = Math.min(...array);
  const max = Math.max(...array);
  return { average, min, max, length };
}
