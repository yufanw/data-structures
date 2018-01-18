var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};

  instance.storage = {};
  instance.counter = 0;

  _.extend(instance, stackMethods);

  return instance;
};

var stackMethods = {
  push: function (val) {
    this.storage[this.counter] = val;
    this.counter++;
  },

  pop: function () {
    this.counter--;
    var val = this.storage[this.counter];
    delete this.storage[this.counter];
    return val;
  },

  size: function () {
    if(this.counter < 0) {
      return 0;
    }
    return this.counter;
  }
};


