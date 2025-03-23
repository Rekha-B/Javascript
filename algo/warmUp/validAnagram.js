// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false


function validAnagram(s, t){
    	if (s.length != t.length) {
		return false;
	}
    const firstStr = s.split('').sort().join();
     const secondStr = t.split('').sort().join();
     return firstStr === secondStr;
}

function isAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;
  
    const count = {};
  
    for (let char of str1) {
      count[char] = (count[char] || 0) + 1;
    }
  
    for (let char of str2) {
      if (!count[char]) return false;
      count[char]--;
    }
  
    return true;
  }
  
  console.log(isAnagram("listen", "silent")); // true
  console.log(isAnagram("hello", "world"));   // false