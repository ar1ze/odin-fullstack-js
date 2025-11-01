import { Node } from './node.js';

export class HashMap {
  constructor(loadFactor = 0.75, capacity = 16) {
    this.loadFactor = loadFactor;
    this.capacity = capacity;
    this.clear();
  }

  _checkIndex(index) {
    if (index < 0 || index >= this.buckets.length) {
      throw new Error('Trying to access index out of bounds');
    }
  }

  _hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      const charCode = primeNumber * hashCode + key.charCodeAt(i);
      hashCode = charCode % this.capacity;
    }
    return hashCode;
  }

  _resize() {
    const oldBuckets = this.buckets;
    this.capacity *= 2;
    this.buckets = new Array(this.capacity).fill(null);
    this.size = 0;

    // Rehash all existing entries
    for (const bucket of oldBuckets) {
      let current = bucket;
      while (current) {
        this.set(current.key, current.value);
        current = current.next;
      }
    }
  }

  _isExceedingLoadFactor() {
    return this.size / this.capacity >= this.loadFactor;
  }

  set(key, value) {
    if (this._isExceedingLoadFactor()) {
      this._resize();
    }

    const index = this._hash(key);
    this._checkIndex(index);
    let current = this.buckets[index];

    // Case 1: The bucket is empty.
    if (current === null) {
      this.buckets[index] = new Node(key, value);
      this.size++;
      return;
    }

    // Case 2: The bucket is not empty. Traverse the chain
    while (current) {
      // Case 2a: Key already exists. Update the value.
      if (current.key === key) {
        current.value = value;
        return;
      }

      // Case 2b: Reached the end of the chain. Add the new node.
      if (current.next === null) {
        current.next = new Node(key, value);
        this.size++;
        return;
      }

      // Move to the next node in chain
      current = current.next;
    }
  }

  get(key) {
    const index = this._hash(key);
    this._checkIndex(index);
    let current = this.buckets[index];

    // Traverse the chain in the bucket
    while (current) {
      if (current.key === key) {
        return current.value;
      }
      current = current.next;
    }

    // Key not found
    return null;
  }

  has(key) {
    return this.get(key) !== null;
  }

  remove(key) {
    const index = this._hash(key);
    this._checkIndex(index);
    let current = this.buckets[index];
    let prev = null;

    // Traverse the chain
    while (current) {
      if (current.key === key) {
        // We found the key
        if (prev === null) {
          // it's the first node in the chain
          this.buckets[index] = current.next;
        } else {
          // It's in the middle or at the end
          prev.next = current.next;
        }
        this.size--;
        return true;
      }
      prev = current;
      current = current.next;
    }

    // Key not found
    return false;
  }

  length() {
    return this.size;
  }

  clear() {
    this.buckets = new Array(this.capacity).fill(null);
    this.size = 0;
  }

  keys() {
    const allKeys = [];
    for (const bucket of this.buckets) {
      let current = bucket;
      while (current) {
        allKeys.push(current.key);
        current = current.next;
      }
    }
    return allKeys;
  }

  values() {
    const allValues = [];
    for (const bucket of this.buckets) {
      let current = bucket;
      while (current) {
        allValues.push(current.value);
        current = current.next;
      }
    }
    return allValues;
  }

  entries() {
    const allEntries = [];
    for (const bucket of this.buckets) {
      let current = bucket;
      while (current) {
        allEntries.push([current.key, current.value]);
        current = current.next;
      }
    }
    return allEntries;
  }
}
