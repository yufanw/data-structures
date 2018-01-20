var BinarySearchTree = function(value) {

  this.value = value;
  this.left = null;
  this.right = null;

};

BinarySearchTree.prototype.insert = function (value) { // n(log n)
  if (value > this.value) {
    if (!this.right) {
      this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  } else if (value < this.value) {
    if (!this.left) {
      this.left = new BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  }
}

BinarySearchTree.prototype.contains = function (value) { // n(log n)
  var doesContain = false;
  if (this.value === value) {
    doesContain = true;
  } else if (value > this.value && this.right) {
    doesContain = this.right.contains(value);
  } else if (value < this.value && this.left) {
    doesContain = this.left.contains(value);
  }
  return doesContain;
};

BinarySearchTree.prototype.depthFirstLog = function (func) { // n(log n)
  func(this.value);
  if (this.left) {
    this.left.depthFirstLog(func);
  }
  if (this.right) {
    this.right.depthFirstLog(func);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
