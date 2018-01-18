var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};

  instance.storage = {};
  instance.min = 0;
  instance.max = 0;

  _.extend(instance, queueMethods);
  return instance;
};

var queueMethods = {
  enqueue: function (val) {
    this.storage[this.max] = val;
    this.max++;
  },

  dequeue: function () {
    let val = this.storage[this.min];
    delete this.storage[this.min];
    this.min++;
    return val;
  },

  size: function () {
    if(this.max - this.min < 0) {
      return 0;
    }
    return this.max - this.min;
  }
};