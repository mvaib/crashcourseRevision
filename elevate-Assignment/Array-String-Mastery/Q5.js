var trap = function(height) {
    let left = 0;
    let right = height.length - 1;
    let left_max = 0;
    let right_max = 0;
    let water_trapped = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= left_max) {
                left_max = height[left];
            } else {
                water_trapped += left_max - height[left];
            }
            left++;
        } else {
            if (height[right] >= right_max) {
                right_max = height[right];
            } else {
                water_trapped += right_max - height[right];
            }
            right--;
        }
    }
    
    return water_trapped;
};

const height = [0,1,0,2,1,0,1,3,2,1,2,1]
console.log(trap(height))