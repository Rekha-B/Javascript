// Substrings of Size Three with Distinct Characters
// A string is good if there are no repeated characters.

// Given a string s​​​​​, return the number of good substrings of length three in s​​​​​​.

// Note that if there are multiple occurrences of the same substring, every occurrence should be counted.

// A substring is a contiguous sequence of characters in a string.

// Example 1:

// Input: s = "xyzzaz"
// Output: 1
// Explanation: There are 4 substrings of size 3: "xyz", "yzz", "zza", and "zaz". 
// The only good substring of length 3 is "xyz".
// Example 2:

// Input: s = "aababcabc"
// Output: 4
// Explanation: There are 7 substrings of size 3: "aab", "aba", "bab", "abc", "bca", "cab", and "abc".
// The good substrings are "abc", "bca", "cab", and "abc".
 
var countGoodSubstrings = function(s) {
    let k = 3;
    if (s.length < k) {
        return 0;
    }
   let freq = {};
   let count = 0;
   for(let i=0;i<k;i++){
      freq[s[i]] = (freq[s[i]] || 0) + 1
   }
   if(Object.keys(freq).length === k) count++;

   for(let i=0;i<s.length-k;i++){
    if(freq[s[i]] == 1){
        delete freq[s[i]];
    }
    else {
        freq[s[i]]--;
    }

    let d = freq[s[i+k]];
    freq[d] = (freq[d] || 0) + 1;

    if (Object.keys(freq).length == k) {
        count++;
    }
   }
   return count;
}