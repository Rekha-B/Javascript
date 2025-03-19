// function lengthOfLongestSubstring(s){
//     let maxlength = 0;
//     for(let i=0;i<s.length;i++){
//         let seen = new Set();
//         for(let j=i;j<s.length;j++){
//            if(seen.has(s[j])) break;
//            seen.add(s[j]);
//            maxlength = Math.max(maxlength, j-i+1);
//         }
//     }
//     return maxlength;
// }

function lengthOfLongestSubstring(s){
    let seen = new Set();
    let left = 0;
    let maxlength = 0;
    for(let right = 0;right<s.length;right++){
        while(seen.has(s[right])){
            seen.delete(s[left]);
            left++;
        }
        seen.add(s[right]);
        maxlength = Math.max(maxlength,right-left+1);
    }
    return maxlength;
}

console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("bbbbb"));    // Output: 1
console.log(lengthOfLongestSubstring("pwwkew"));   // Output: 3

