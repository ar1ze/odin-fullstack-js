const all = function all(array, callback) {
  const copy = [...array];
  if (copy.length === 0) return true;

  if (callback(copy[0])) {
    copy.shift();
    return all(copy, callback);
  } else {
    return false;
  }
};

const arrayOne = [1, 2, 9];
const arrayTwo = [1, 2];
const arrays = [arrayOne, arrayTwo];

arrays.forEach((array) => {
  const allAreLessThanSeven = all(array, (num) => num < 7);
  console.log(allAreLessThanSeven);
});
