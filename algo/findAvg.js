// Average Of All Subarrays - Example Question
// Given an array, find the average of all subarrays of ‘K’ contiguous elements in it.

// Let’s understand this problem with real input:

// Array: [1, 3, 2, 6, -1, 4, 1, 8, 2], K=5
// Here is the final output containing the averages of all subarrays of size '5':

// Output: [2.2, 2.8, 2.4, 3.6, 2.8]
function findAverage(nums, k){
    let result = [];
    for(let i=0;i<=nums.length-k;i++){
        let sum = 0;
        for(let j=i;j<i+k;j++){
            sum += nums[j];
        }
        result.push(sum/k);
    }
    return result;
}

function findAverage(nums, k){
    let windowSum = 0;
    let result = [];
   for(let i=0;i<k;i++){
       windowSum += nums[i];
   }
   let average = windowSum/k;
   result.push(average);
   for(let i=0;i<nums.length-k;i++){
       windowSum = windowSum - nums[i] + nums[i+k];
       average = windowSum/k;
       result.push(average);
   }
   return result;
}
