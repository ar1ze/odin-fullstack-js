const productOfArray = function productOfArray(array) {
  if (array.length === 1) return array[0];
  const [first, ...rest] = array;
  return first * productOfArray(rest);
};

const array = [1, 2, 3];
const result = productOfArray(array);
console.log(result);
