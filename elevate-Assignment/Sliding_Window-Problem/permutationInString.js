var checkInclusion = function(s1, s2) {
    const s1Len = s1.length;
    const s2Len = s2.length;

    if (s1Len > s2Len) {
        return false; 
    }

    const s1Count = new Array(26).fill(0);
    const windowCount = new Array(26).fill(0);

    for (let i = 0; i < s1Len; i++) {
        s1Count[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        windowCount[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }

    const isEqual = (count1, count2) => {
        for (let i = 0; i < 26; i++) {
            if (count1[i] !== count2[i]) return false;
        }
        return true;
    };

    if (isEqual(s1Count, windowCount)) {
        return true;
    }

    for (let i = s1Len; i < s2Len; i++) {
        windowCount[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;

        windowCount[s2.charCodeAt(i - s1Len) - 'a'.charCodeAt(0)]--;

        if (isEqual(s1Count, windowCount)) {
            return true;
        }
    }

    return false; 
};

const s1 = "ab";
const s2 = "eidbaooo";
console.log(checkInclusion(s1, s2));