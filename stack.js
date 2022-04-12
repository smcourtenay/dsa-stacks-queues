/** Node: node for a stack. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  top = null;
  size = 0;

  /** push(val): add new value to the top of the stack. Returns undefined. */

  push(val) {
    const newNode = new Node(val);

    if (this.top === null) {
      this.top = newNode;
      this.size++;
      return undefined;
    }

    newNode.next = this.top;

    this.top = newNode;
    this.size++;

    return undefined;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if(this.size === 0) throw new Error("Error: stack is empty");

    let returnVal = this.top.val;

    if(this.size === 1){
      this.top = null;
      this.size = 0;
      return returnVal;
    }

    this.top = this.top.next;
    this.size--;

    return returnVal;
  }

  /** peek(): return the value of the top node in the stack. */

  peek() {
    if(this.size === 0) throw new Error("Error: stack is empty");
    const removeVal = this.top.val;
    return removeVal;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    if (this.top === null) return true;
    return false;
  }
}

module.exports = Stack;
