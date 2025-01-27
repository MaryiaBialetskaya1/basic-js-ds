const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.top = null;
  }
  root() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.top;
  }

  add(data) {
    //throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    let newNode = this.top;
    if (!newNode) {
      this.top = new Node(data);
      return;
    } else {
      let search = function (newNode) {
        if (data < newNode.data) {
          if (!newNode.left) {
            newNode.left = new Node(data);
            return;
          } else if (newNode.left) {
            return search(newNode.left);
          }
        } else if (data > newNode.data) {
          if (!newNode.right) {
            newNode.right = new Node(data);
            return;
          } else if (newNode.right) {
            return search(newNode.right);
          }
        } else {
          return null;
        }
      };
      return search(newNode);
    }
  }

  has(data) {
    //throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    let current = this.top;
    while (current) {
      if (data === current.data) {
        return true;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  find(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.top) return false;
    let current = this.top;
    let found = false;
    while (current && !found) {
      if (current.data === data) {
        return current;
      } else if (data < current.data) {
        current = current.left;
      } else if (data > current.data) {
        current = current.right;
      } else {
        found = current;
      }
    }
    if (found) return undefined;
    return null;
  }

  remove(data) {
    //throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  min() {
    //throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    if (!this.top) {
      return;
    }
    let node = this.top;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    //throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    if (!this.top) {
      return;
    }
    let node = this.top;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree,
};
