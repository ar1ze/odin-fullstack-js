const mergeSort = function mergeSort(array) {
  const arrayLength = array.length;
  if (arrayLength <= 1) return array;

  const mid = Math.floor(arrayLength / 2);

  let leftArray = array.slice(0, mid);
  let rightArray = array.slice(mid, arrayLength);

  leftArray = mergeSort(leftArray);
  rightArray = mergeSort(rightArray);

  return merge(leftArray, rightArray);
};

const merge = function merge(leftArray, rightArray) {
  let result = [];
  let [i, j] = [0, 0];

  while (i < leftArray.length && j < rightArray.length) {
    if (leftArray[i] < rightArray[j]) {
      result.push(leftArray[i++]);
    } else {
      result.push(rightArray[j++]);
    }
  }

  return result.concat(leftArray.slice(i), rightArray.slice(j));
};

const array = [38, 27, 43, 3, 9, 82, 10];
const result = mergeSort(array);
console.log(result);
