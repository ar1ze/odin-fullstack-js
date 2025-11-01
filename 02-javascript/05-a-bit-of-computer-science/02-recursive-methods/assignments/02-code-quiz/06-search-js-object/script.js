var nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: 'foo2',
          },
        },
      },
    },
  },
};

const contains = function nestedObject(object, value) {
  for (let key in object) {
    if (typeof object[key] === 'object') {
      return contains(object[key], value);
    }

    if (object[key] === value) return true;
  }
  return false;
};

let hasIt = contains(nestedObject, 44);
let doesntHaveIt = contains(nestedObject, 'foo');

console.log(hasIt);
console.log(doesntHaveIt);
