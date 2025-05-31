var MinStack = function() {
    this.stack = [];       
    this.minStack = [];    
};


MinStack.prototype.push = function(val) {
    this.stack.push(val);
    
    
    if (this.minStack.length === 0 || val <= this.getMin()) {
        this.minStack.push(val);
    }
};


MinStack.prototype.pop = function() {
    const poppedValue = this.stack.pop(); 

    
    if (poppedValue === this.getMin()) {
        this.minStack.pop();
    }
};


MinStack.prototype.top = function() {
    
    return this.stack[this.stack.length - 1];
};


MinStack.prototype.getMin = function() {
    
    return this.minStack[this.minStack.length - 1];
};


const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // Output: -3
minStack.pop();
console.log(minStack.top()); // Output: 0
console.log(minStack.getMin()); // Output: -2
