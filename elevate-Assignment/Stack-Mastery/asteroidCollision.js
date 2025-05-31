var asteroidCollision = function(asteroids) {
    let stack = [];
    
    for (let asteroid of asteroids) {
        let collision = false; 
        
        while (asteroid < 0 && stack.length > 0 && stack[stack.length - 1] > 0) {
            if (Math.abs(asteroid) > stack[stack.length - 1]) {
                stack.pop();
                continue; 
            } else if (Math.abs(asteroid) === stack[stack.length - 1]) {
                stack.pop();
            }
            collision = true; 
            break; 
        }
        
        if (!collision) {
            stack.push(asteroid);
        }
    }
    
    return stack;
};

const asteroids = [5, 10, -5];
const result = asteroidCollision(asteroids);
console.log(result);