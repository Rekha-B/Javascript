// Example 1:

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
// Example 2:

// Input: nums = [1,1,1,1]
// Output: 6
// Explanation: Each pair in the array are good.
// Example 3:

// Input: nums = [1,2,3]
// Output: 0
 
function goodPairs(nums){
    let repeat = new Map();
    let num = 0;

    for(const i of nums){
      if(repeat.has(i)){
        num += repeat.get(i) + 1;
        repeat.set(i, repeat.get(i) + 1);
      }
      else {
         repeat.set(i,1);
      }
    }
}