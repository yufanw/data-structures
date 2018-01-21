

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.counter = 0;
};

HashTable.prototype.insert = function(k, v) { //best case: O(1), worst case: O(n)

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

  if (this.counter / this._limit >= 0.75) {
    var hash = this;
    var temp = Object.assign({}, this._storage);

    this._limit = this._limit * 2;
    this._storage = LimitedArray(this._limit);
    this.counter = 0;
    temp.each(function(el) {
      if (el) {
        for (let j = 0; j < el.length; j++) {
          hash.insert(el[j][0], el[j][1]);
        }
      }
    });
  }

  this.counter++;
};

HashTable.prototype.retrieve = function(k) { // O(1)
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

HashTable.prototype.remove = function(k) { //best case: O(1), worst case: O(n)

  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuples = this._storage.get(index);

  if (tuples) {
    for (let i = 0; i < tuples.length; i++) {
      if (tuples[i][0] === k) {
        tuples.splice(i, 1);
      }
    }
  }

  if (this.counter / this._limit <= 0.25) {
    var hash = this;
    var temp = Object.assign({}, this._storage);

    this._limit = this._limit / 2;
    this._storage = LimitedArray(this._limit);
    this.counter = 0;
    temp.each(function(el) {
      if (el) {
        for (let j = 0; j < el.length; j++) {
          hash.insert(el[j][0], el[j][1]);
        }
      }
    });
  }

  this.counter--;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

