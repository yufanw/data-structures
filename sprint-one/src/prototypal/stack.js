var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(stackMethods);

  instance.storage = {};
  instance.counter = 0;

  return instance;
};

var stackMethods = {};

stackMethods.push = function (val) {
  this.storage[this.counter] = val;
  this.counter++;
};

stackMethods.pop = function () {
  this.counter--;
  var val = this.storage[this.counter];
  delete this.storage[this.counter];
  return val;
};

stackMethods.size = function () {
  if(this.counter < 0) {
    return 0;
  }
  return this.counter;
};

