var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    if (!list.tail) {
      list.tail = node;
      list.head = list.tail;
    } else {
      list.tail.next = node;
      list.tail = node;
    }
  };

  list.removeHead = function() {
    var removedHead = list.head.value;
    list.head = list.head.next;
    return removedHead;
  };

  list.contains = function(target) {
    var currentNode = list.head;
    while (currentNode) {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
//addToTail: O(1)
//removeHead: O(1)
//contains: O(n)
