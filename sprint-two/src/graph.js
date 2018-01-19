

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) { // O(1)
  this.nodes[node] = {};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) { // O(1)
  return this.nodes[node] ? true : false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) { // O(n)
  for (let key in this.nodes[node]) {
    delete this.nodes[key][node];
  }
  delete this.nodes[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) { // O(1)
  if (this.nodes[fromNode][toNode] && this.nodes[toNode][fromNode]) {
    return true;
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) { // O(1)
  this.nodes[fromNode][toNode] = toNode;
  this.nodes[toNode][fromNode] = fromNode;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) { // O(1)
  delete this.nodes[fromNode][toNode];
  delete this.nodes[toNode][fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) { // O(n)
  for (let node in this.nodes) {
    cb(node);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */


