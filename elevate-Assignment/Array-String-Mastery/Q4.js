var isPalindrome = function(s) {
    let charArr = s.toLowerCase().split("").filter(char => char >= "a" && char <= "z" || char >= "0" && char <= "9")
    let left = 0
    let right = charArr.length - 1
    while(left < right){
        if(charArr[left] !== charArr[right]){
            return false
        }
        left++
        right--
    }
    return true
};

const result = isPalindrome("A man, a plan, a canal: Panama")
console.log(result)