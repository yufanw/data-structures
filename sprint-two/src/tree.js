var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target) {
  var doesContain = false;
  if (this.value === target) {
    doesContain = true;
  }
  for (var i = 0; i < this.children.length; i++) {
    if (!doesContain) {
    doesContain = this.children[i].contains(target);
    }
  }
  return doesContain;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

//addChild: O(1)
//contains: O(n)
















