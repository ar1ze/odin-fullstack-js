const sumSquares = function sumSquares(array) {
  if (array.length === 0) return 0;
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const isArray = Array.isArray(element);

    if (isArray) {
      sum += sumSquares(element);
    } else {
      sum += element ** 2;
    }
  }
  return sum;
};

let l = [1, 2, 3];
let result = sumSquares(l);
console.log(result); // 1 + 4 + 9 = 14

l = [[1, 2], 3];
result = sumSquares(l);
console.log(result); // 1 + 4 + 9 = 14

l = [[[[[[[[[1]]]]]]]]];
result = sumSquares(l);
console.log(result); // 1 = 1

l = [10, [[10], 10], [10]];
result = sumSquares(l);
console.log(result); // 100 + 100 + 100 + 100 = 400
