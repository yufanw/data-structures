

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage.get(index)) {
    this._storage.each(function(el, i, storage) {
      if (storage[index][i] && storage[index][i][0] === k) {
        storage[index][i][1] = v;
      } else {
        storage[index].push([k, v]);
      }
    });
  } else {
    this._storage.set(index,[[k, v]]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index)) {
    var tuples = this._storage.get(index);
    for (let i = 0; i < tuples.length; i++) {
      if (tuples[i][0] === k) {
        return tuples[i][1];
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each(function(el, i, storage) {
    if (i === index) {
      storage.splice(i, 1);
    }
  });
};


/*
 * Complexity: What is the time complexity of the above functions?
 */


