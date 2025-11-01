import { HashMap } from './hashmap.js';

console.log('--- Initializing HashMap ---');
// Use the default capacity 16 and load factor 0.75
const test = new HashMap();

console.log('--- Populating Map (12 entries) ---');
test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');

console.log(`Current Length: ${test.length()}`); // Should be 12
console.log(`Current Capacity: ${test.capacity}`); // Should be 16
// Load is 12/16 = 0.75. This is *at* the load factor, so it won't resize yet.

console.log('\n--- Overwriting a few keys ---');
test.set('apple', 'dark green');
test.set('dog', 'spotted');
console.log(`Current Length: ${test.length()}`); // Should still be 12
console.log(`Get 'apple': ${test.get('apple')}`); // 'dark green'
console.log(`Get 'dog': ${test.get('dog')}`); // 'spotted'

console.log('\n--- Adding 13th key to trigger resize ---');
// Current load is 12/16 = 0.75.
// The set() method checks if (size / capacity >= loadFactor)
// Since 12/16 >= 0.75 is true, it resizes *before* adding 'moon'.
test.set('moon', 'silver');
console.log(`New Length: ${test.length()}`); // Should be 13
console.log(`New Capacity: ${test.capacity}`); // Should be 32 (doubled from 16)
console.log(`Get 'moon': ${test.get('moon')}`); // 'silver'

console.log('\n--- Testing other methods after resize ---');
console.log(`Has 'carrot': ${test.has('carrot')}`); // true
console.log(`Has 'star': ${test.has('star')}`); // false
console.log(`Removing 'dog': ${test.remove('dog')}`); // true
console.log(`Removing 'star': ${test.remove('star')}`); // false
console.log(`Length after remove: ${test.length()}`); // Should be 12

console.log('\n--- All Keys ---');
console.log(test.keys());

console.log('\n--- All Values ---');
console.log(test.values());

console.log('\n--- All Entries ---');
console.log(test.entries());

console.log('\n--- Clearing Map ---');
test.clear();
console.log(`Length after clear: ${test.length()}`); // 0
console.log(`Capacity after clear: ${test.capacity}`); // 32 (capacity remains)
console.log(`Get 'apple': ${test.get('apple')}`); // null
