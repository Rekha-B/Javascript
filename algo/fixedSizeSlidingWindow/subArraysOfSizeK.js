// Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold
// Given an array of integers arr and two integers k and threshold, return the number of sub-arrays of size k and average greater than or equal to threshold.

// Example 1:

// Input: arr = [2,2,2,2,5,5,5,8], k = 3, threshold = 4
// Output: 3
// Explanation: Sub-arrays [2,5,5],[5,5,5] and [5,5,8] have averages 4, 5 and 6 respectively. All other sub-arrays of size 3 have averages less than 4 (the threshold).
// Example 2:

// Input: arr = [11,13,17,23,29,31,7,5,2,3], k = 3, threshold = 5
// Output: 6
// Explanation: The first 6 sub-arrays of size 3 have averages greater than 5. Note that averages are not integers.

var numOfSubarrays = function (nums, k, t) {
  let windowSum = 0;
  let count = 0;
  for(let i=0;i<k;i++){
      windowSum += nums[i];
    
  }
    	if ((windowSum / k) >= t) {
		count++;
	}
  	let average = 0;
  
	for (let i = 0; i < nums.length - k; i++) {
		windowSum = windowSum - nums[i] + nums[i + k];
		average = windowSum / k;

		if (average >= t) {
			count++;
		}
	}
  return count;
};