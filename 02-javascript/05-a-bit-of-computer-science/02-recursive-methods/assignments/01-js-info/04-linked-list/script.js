let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

const printListRecursive = function printList(list) {
  console.log(list.value);
  if (list.next) printList(list.next);
};

const printListLoop = function printListLoop(list) {
  let tmp = list;
  while (tmp) {
    console.log(tmp.value);
    tmp = tmp.next;
  }
};

printListRecursive(list);
console.log('');
printListLoop(list);
