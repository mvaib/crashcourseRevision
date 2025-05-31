var threeSum = function(nums) {
    nums.sort((a,b) => a -b)
    const result = []
    for(let i = 0; i < nums.length-2; i++){
        if(i > 0 && nums[i] === nums[i-1]) continue;
        let left = i + 1;
        let right = nums.length -1;

        while(left < right){
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                while (nums[left] === nums[left + 1]) left++;
                while (nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return result
};

const nums = [-1,0,1,2,-1,-4]
const nums2 = [0,1,1]
const nums3 = [0,0,0]
console.log(threeSum(nums))
console.log(threeSum(nums2))
console.log(threeSum(nums3))