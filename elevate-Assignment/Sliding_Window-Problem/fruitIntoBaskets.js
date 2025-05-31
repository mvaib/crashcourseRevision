var totalFruit = function(fruits) {
    let maxFruits = 0;
    let left = 0;
    const fruitCount = {};

    for (let right = 0; right < fruits.length; right++) {
        if (fruitCount[fruits[right]]) {
            fruitCount[fruits[right]]++;
        } else {
            fruitCount[fruits[right]] = 1;
        }

        while (Object.keys(fruitCount).length > 2) {
            fruitCount[fruits[left]]--;
            if (fruitCount[fruits[left]] === 0) {
                delete fruitCount[fruits[left]];
            }
            left++;
        }

        maxFruits = Math.max(maxFruits, right - left + 1);
    }

    return maxFruits;
};

const fruits = [1,2,3,2,2]
console.log(totalFruit(fruits))