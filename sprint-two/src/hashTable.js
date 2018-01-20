

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuples = this._storage.get(index);
  if (tuples) {
    for (let i = 0; i < tuples.length; i++) {
      if (tuples[i][0] === k) {
        tuples[i][1] = v;
      } else {
        tuples.push([k, v]);
      }
    }
  } else {
    this._storage.set(index, [[k, v]]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuples = this._storage.get(index);
  if (tuples) {
    for (let i = 0; i < tuples.length; i++) {
      if (tuples[i][0] === k) {
        return tuples[i][1];
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuples = this._storage.get(index);
  if (tuples) {
    for (let i = 0; i < tuples.length; i++) {
      if (tuples[i][0] === k) {
        tuples.splice(i, 1);
      }
    }
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */




