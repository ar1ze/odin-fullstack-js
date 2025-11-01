import { Node } from './node.js';

export class LinkedList {
  constructor() {
    this.headNode = null;
  }

  isEmptyHeadNode() {
    return this.headNode === null;
  }

  isTail(node) {
    return node.nextNode === null;
  }

  head() {
    return this.headNode;
  }

  tail(node = this.headNode) {
    if (node === null) {
      return null;
    }
    if (node.nextNode === null) {
      return node;
    }
    return this.tail(node.nextNode);
  }

  append(value) {
    const newNode = new Node(value);

    if (this.isEmptyHeadNode()) {
      this.headNode = newNode;
      return;
    }

    const lastNode = this.tail();
    lastNode.nextNode = newNode;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.nextNode = this.headNode;
    this.headNode = newNode;
  }

  size(node = this.headNode) {
    if (node === null) {
      return 0;
    }
    return 1 + this.size(node.nextNode);
  }

  at(index, node = this.headNode) {
    if (node === null) {
      return null;
    }
    if (index === 0) {
      return node;
    }
    if (this.isTail(node)) {
      return null;
    }
    return this.at(index - 1, node.nextNode);
  }

  pop(node = this.headNode) {
    if (this.isEmptyHeadNode()) {
      return null;
    }

    // Single node case
    if (this.headNode.nextNode === null) {
      const removed = this.headNode;
      this.headNode = null;
      return removed;
    }

    // Found second-to-last node
    if (node.nextNode.nextNode === null) {
      const removed = node.nextNode;
      node.nextNode = null;
      return removed;
    }

    return this.pop(node.nextNode);
  }

  contains(value, node = this.headNode) {
    if (node === null) {
      return false;
    }
    if (node.value === value) {
      return true;
    }
    return this.contains(value, node.nextNode);
  }

  find(value, node = this.headNode, index = 0) {
    if (node === null) {
      return null;
    }
    if (node.value === value) {
      return index;
    }
    return this.find(value, node.nextNode, index + 1);
  }

  insertAt(value, index, node = this.headNode) {
    if (index < 0) {
      return;
    }

    const newNode = new Node(value);

    // Insert at head
    if (index === 0) {
      newNode.nextNode = this.headNode;
      this.headNode = newNode;
      return;
    }

    if (node === null) {
      return;
    }

    // Insert after current node
    if (index === 1) {
      newNode.nextNode = node.nextNode;
      node.nextNode = newNode;
      return;
    }

    this.insertAt(value, index - 1, node.nextNode);
  }

  removeAt(index, node = this.headNode) {
    if (this.headNode === null || index < 0) {
      return null;
    }

    // Remove head
    if (index === 0) {
      const removed = this.headNode;
      this.headNode = this.headNode.nextNode;
      removed.nextNode = null;
      return removed;
    }

    if (node.nextNode === null) {
      return null;
    }

    // Remove next node
    if (index === 1) {
      const removed = node.nextNode;
      node.nextNode = removed.nextNode;
      removed.nextNode = null;
      return removed;
    }

    return this.removeAt(index - 1, node.nextNode);
  }

  joinValues(node = this.headNode) {
    if (node === null) {
      return 'null';
    }
    const valueText = `( ${node.value} )`;
    return `${valueText} -> ${this.joinValues(node.nextNode)}`;
  }

  toString() {
    return this.joinValues();
  }
}
