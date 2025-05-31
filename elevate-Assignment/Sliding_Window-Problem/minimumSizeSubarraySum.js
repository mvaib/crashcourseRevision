var minSubArrayLen = function(target, nums) {
    let left = 0;  
    let sum = 0;   
    let minLength = Infinity;

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right]; 

        while (sum >= target) {
            minLength = Math.min(minLength, right - left + 1); 
            sum -= nums[left]; 
            left++; 
        }
    }

    return minLength === Infinity ? 0 : minLength;
};

const nums = [2,3,1,2,4,3]
const target = 7
console.log(minSubArrayLen(target,nums))