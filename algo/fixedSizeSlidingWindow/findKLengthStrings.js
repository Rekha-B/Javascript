// Find K-Length Substrings With No Repeated Characters
// Given a string s and an integer k, return the number of substrings in s of length k with no repeated characters.

// Example 1:

// Input: s = "havefunonleetcode", k = 5
// Output: 6
// Explanation: There are 6 substrings they are: 'havef','avefu','vefun','efuno','etcod','tcode'.
// Example 2:

// Input: s = "home", k = 5
// Output: 0
// Explanation: Notice k can be larger than the length of s. In this case, it is not possible to find any substring.
 

// Constraints:

// 1 <= s.length <= 10^4
// s consists of lowercase English letters.
// 1 <= k <= 10^4



var numKLenSubstrNoRepeats = function(s, k) {
    let count = 0;
   if (s.length < k) {
       return count;
   }

   let freq = {};
   for (let i = 0; i < k; i++) {
       let c = s[i];
       freq[c] = (freq[c] || 0) + 1;
   }

   if (Object.keys(freq).length == k) {
       count++;
   }

   for (let i = 0; i < s.length - k; i++) {
       let c = s[i];
       if (freq[c] == 1) {
           delete freq[c];
       } else {
           freq[c]--;
       }

       let d = s[i + k];
       freq[d] = (freq[d] || 0) + 1;

       if (Object.keys(freq).length == k) {
           count++;
       }
   }

   return count;

};