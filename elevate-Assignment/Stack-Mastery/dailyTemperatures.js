var dailyTemperatures = function(temperatures) {
    const answer = new Array(temperatures.length).fill(0);
    const stack = []; 

    for (let i = 0; i < temperatures.length; i++) {

        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const index = stack.pop(); 
            answer[index] = i - index;
        }
        stack.push(i); 
    }
    
    return answer;
};

const temperatures = [73, 74, 75, 71, 69, 72, 76, 73]
console.log(dailyTemperatures(temperatures))