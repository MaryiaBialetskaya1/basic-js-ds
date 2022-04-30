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
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  find(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.top) return false;
    let current = this.top;
    let found = false;
    while (current && !found) {
      if (data < current.data) {
        current = current.left;
      } else if (data > current.data) {
        current = current.right;
      } else {
        found = current;
      }
    }
    if (!found) return undefined;
    return found;
  }

  remove(data, key) {
    //throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    if (data === null) {
      return null;
    } else if (key < data.top) {
      top.left = this.removeNode(data.left, key);
      return data;
    } else if (key > this.data.top) {
      data.right = this.removeNode(data.right, key);
      return data;
    } else {
      if (data.left === null && data.right === null) {
        data = null;
        return data;
      }
      if (data.left === null) {
        data = data.right;
        return data;
      } else if (data.right === null) {
        data = data.left;
        return data;
      }
    }
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
