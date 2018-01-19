

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
  this.edges = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = node;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes[node] ? true : false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.nodes[node];
  delete this.edges[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (var key in this.edges) {
    if (this.edges[key][0] === fromNode & this.edges[key][1] === toNode) {
      return true;
    } else if (this.edges[key][1] === fromNode & this.edges[key][0] === toNode) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges[fromNode] = [fromNode, toNode];
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.edges[fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (let node in this.nodes) {
    cb(this.nodes[node]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


