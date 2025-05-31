var evalRPN = function(tokens) {
    const stack = [];
    
    for (const token of tokens) {
        if (!isNaN(token)) {
            stack.push(parseInt(token, 10));
        } else {
            const b = stack.pop();
            const a = stack.pop();
            
            switch (token) {
                case '+':
                    stack.push(a + b);
                    break;
                case '-':
                    stack.push(a - b);
                    break;
                case '*':
                    stack.push(a * b);
                    break;
                case '/':
                    stack.push((a / b) | 0); 
                    break;
            }
        }
    }

    return stack.pop();
};

const tokens = ["2","1","+","3","*"]
const result = evalRPN(tokens);
console.log(result);