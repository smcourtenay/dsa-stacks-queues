const Queue = require("../queue");
const Stack = require("../stack");

function stringReversal(str) {
}

function balancedBrackets(str) {

    let stack = new Stack();

    for(let char of str) {
        if(char === "{" || char === "[" || char === "(") {
            stack.push(char);
        } else if(char === "}") {
            if(stack.isEmpty()) return false;
            if(stack.peek() === "{") stack.pop();
            else {
                return false;
            }
        } else if(char === "]") {
            if(stack.isEmpty()) return false;
            if(stack.peek() === "[") stack.pop();
            else {
                return false;
            }
        } else if(char === ")") {
            if(stack.isEmpty()) return false;
            if(stack.peek() === "(") stack.pop();
            else {
                return false;
            }
        }     
    }
    return (stack.isEmpty()) ? true : false;
}

function josephusSurvivor(peopleNum, skip) {
}

function calculator(input) {
}

module.exports = {
  calculator,
  josephusSurvivor,
  balancedBrackets,
  stringReversal,
};
