import { LinkedList } from './linkedList.js';

function testLinkedList() {
  const list = new LinkedList();

  list.append('First Node');
  list.append('Second Node');
  list.prepend('Zeroth Node');

  console.log('Initial list:', list.toString());

  console.log('Head:', list.head());
  console.log('Tail:', list.tail());
  console.log('Size:', list.size());

  console.log('Pop:', list.pop());
  console.log('After pop:', list.toString());

  console.log('Contains "First Node"?', list.contains('First Node'));
  console.log('Index of "First Node":', list.find('First Node'));

  list.insertAt('Inserted Node', 1);
  console.log('After insertAt(1):', list.toString());

  list.removeAt(1);
  console.log('After removeAt(1):', list.toString());
}

testLinkedList();
