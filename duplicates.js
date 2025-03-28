// Given an array of integers numbers, determine whether the array contains any duplicate values. A duplicate is defined as any number that appears more than once in the array.

// Input
// numbers: number[]: An array of integers
// Examples
// Input: numbers = [5,7,1,3]
// Output: false
// Explanation: All elements in the array are unique.
// Input: numbers = [10,7,0,0,9]
// Output: true
// Explanation: 0 appears more than once.
// Input: numbers = [3,2,6,5,0,3,10,3,10,5]
// Output: true
// Explanation: 3,5, and 10 appears more than once.


export default function findDuplicates(numbers) {
    let len = numbers.length;
    const seen = new Set();
    for(let i=0;i<len;i++){
      if(seen.has(numbers[i])) return true;
      seen.add(numbers[i]);
    }
    return false;
  }