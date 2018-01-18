class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.min = 0;
    this.max = 0;
  }

  enqueue(val) {
    this.storage[this.max] = val;
    this.max++;
  }

  dequeue() {
    var val = this.storage[this.min];
    delete this.storage[this.min];
    this.min++;
    return val;
  }

  size() {
    if (this.max - this.min < 0) {
      return 0;
    }
    return this.max - this.min;
  }
}
