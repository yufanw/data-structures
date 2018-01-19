var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) { // O(1)
  this._storage[item] = item;
};

setPrototype.contains = function(item) { // O(1)
  return this._storage[item] ? true : false;
};

setPrototype.remove = function(item) { // O(1)
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
// set = {
//   add: f(),
//   contains: f(),
//   remove: f(),
//   _storage: {}
// }