var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);

  instance.storage = {}
  instance.min = 0;
  instance.max = 0;

  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function(val) {
  this.storage[this.max] = val;
  this.max++;
}

queueMethods.dequeue = function() {
  var val = this.storage[this.min];
  delete this.storage[this.min];
  this.min++;
  return val;
}

queueMethods.size = function() {
  if(this.max - this.min < 0) {
    return 0;
  }
  return this.max - this.min;
}
