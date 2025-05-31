var StockSpanner = function() {
    this.prices = []; 
    this.stack = [];  
};


StockSpanner.prototype.next = function(price) {
    const index = this.prices.length; 
    this.prices.push(price); 

    while (this.stack.length > 0 && this.prices[this.stack[this.stack.length - 1]] <= price) {
        this.stack.pop(); 
    }

    let span;
    if (this.stack.length === 0) {
        span = index + 1; 
    } else {
        span = index - this.stack[this.stack.length - 1]; 
    }

    this.stack.push(index);

    return span; 
};

const obj = new StockSpanner();
console.log(obj.next(100));
console.log(obj.next(80));
console.log(obj.next(60));
console.log(obj.next(70));
console.log(obj.next(60));
console.log(obj.next(75));
console.log(obj.next(85));