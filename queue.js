"use strict";
const LinkedList = require('./linked-list');
/** Node: node for a queue. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  first = null;
  last = null;
  size = 0;
  _list = new LinkedList();
  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  // enqueue(val) {
  //   const newNode = new Node(val);
  //   if (this.first === null) this.first = newNode;
  //   if (this.last !== null) this.last.next = newNode;

  //   this.last = newNode;
  //   this.size++;
  //   return undefined;
  // }
  enqueue(val) {
    if(this._list.head === null){
      this._list.push(val);
      this.first = this._list.head;
      this.last = this._list.tail;
    }
    if(this._list.head !== null){
      this._list.push(val);
      this.last = this._list.tail;
    }
    
    this.size++;
    return undefined;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if (this.last === null) throw new Error("Error: queue is empty");

    const removeVal = this.first.val;

    if (this.size === 1) {
      this.first = null;
      this.last = null;
      this.size = 0;
      return removeVal;
    }

    this.first = this.first.next;
    this.size--;
    return removeVal;
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {

    if (this.last === null) throw new Error("Error: queue is empty");

    const removeVal = this.first.val;

    return removeVal;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    if (this.last === null) return true;
    return false;
  }
}

module.exports = Queue;
