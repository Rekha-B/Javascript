// Single Number
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// As an extra challenge, can you find a solution with a linear runtime complexity and use only constant extra space?

 

// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1
 

var singleNumber = function(nums) {
    return nums.reduce((acc, num) => acc ^ num, 0);
};

var singleNumber = function(nums) {
	let counter = new Map();
	
    for (let i = 0; i < nums.length; i++) {
		if (!counter.has(nums[i])) {
			counter.set(nums[i], 1);
		} 
        else {
			counter.delete(nums[i]);
		}
	}

	return [...counter.keys()][0];
};