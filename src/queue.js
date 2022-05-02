const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.elements = {}; //object to store elements
    this.top = null; //track head
    this.tail = null; //track tail
  }
  getUnderlyingList() {
    //throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    return this.top;
  }

  enqueue(value) {
    //throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    const item = new ListNode(value);
    if (!this.top) {
      this.top = item;
      this.tail = item;
    } else {
      this.tail.next = item;
      this.tail = item;
    }
  }

  dequeue() {
    //throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    if (!this.top) {
      return null;
    }
    const item = this.top.value;
    this.top = this.top.next;
    return item;
  }
}

module.exports = {
  Queue,
};
