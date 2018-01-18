var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.min = 0;
  this.max = 0;
};

Queue.prototype.enqueue = function(val) {
  this.storage[this.max] = val;
  this.max++;
};

Queue.prototype.dequeue = function() {
  var val = this.storage[this.min];
  delete this.storage[this.min];
  this.min++;
  return val;
};

Queue.prototype.size = function() {
  if(this.max - this.min < 0) {
    return 0;
  }
  return this.max - this.min;
};
