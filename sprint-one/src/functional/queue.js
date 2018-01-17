var Queue = function() {
  var someInstance = {};
  // Use an object with numeric keys to store values
  var storage = {};
  var max = 0;
  var min = 0;
  // Implement the methods below
  someInstance.enqueue = function(value) {
    storage[max] = value;
    max++;
  };

  someInstance.dequeue = function() {
    let val = storage[min];
    delete storage[min];
    min++;
    return val;
  };

  someInstance.size = function() {
    if(max - min < 0) {
      return 0;
    }
    return max - min;
  };

  return someInstance;
};

