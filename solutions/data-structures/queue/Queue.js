export default class Queue {
  constructor() {
    this.store = [];
  }

  isEmpty() {
    return !this.store.length;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.store[this.store.length -1];
  }

  enqueue(el) {
    return this.store.unshift(el);
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    return this.store.pop();
  }

  toString() {
    return this.store.toString();
  }
}
