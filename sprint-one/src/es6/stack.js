class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.counter = 0;
  }

  push(val) {
    this.storage[this.counter] = val;
    this.counter ++;
  }

  pop() {
    this.counter--;
    var val = this.storage[this.counter];
    delete this.storage[this.counter];
    return val;
  }

  size() {
    if (this.counter < 0) {
      return 0;
    }
    return this.counter;
  }
}