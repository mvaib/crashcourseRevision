var findAnagrams = function(s, p) {
    const result = [];
    const pCount = new Array(26).fill(0);
    const sCount = new Array(26).fill(0);
    
    for (let char of p) {
        pCount[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    
    const pLength = p.length;
    const sLength = s.length;
    
    for (let i = 0; i < sLength; i++) {
        sCount[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
        
        if (i >= pLength) {
            sCount[s[i - pLength].charCodeAt(0) - 'a'.charCodeAt(0)]--;
        }
        
        if (i >= pLength - 1) {
            if (sCount.toString() === pCount.toString()) {
                result.push(i - pLength + 1); 
            }
        }
    }
    
    return result;
};

const result = findAnagrams("cbaebabacd", "abc")
console.log(result)