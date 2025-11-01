const totalIntegers = function totalIntegers(array) {
  let sum = 0;
  array.forEach((element) => {
    const isArray = Array.isArray(element);
    if (isArray) {
      sum += totalIntegers(element);
    }

    if (typeof element === 'number') sum++;
  });
  return sum;
};

const array = [[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]; // 7
const result = totalIntegers(array);
console.log(result);
