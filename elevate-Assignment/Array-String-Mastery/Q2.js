var removeDuplicates = function(nums) {
    let i = 0;
    for(let j = 1; j < nums.length;j++){
        if(nums[i] !== nums[j]){
            i++
            nums[i] = nums[j]
        }
    }
    return nums.slice(0, i+1)
};

const nums = [1,1,2,3,3,4,4,4,5,5,6]
const nums2 = [1,1,2]

console.log(removeDuplicates(nums))
console.log(removeDuplicates(nums2))