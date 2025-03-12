// Given a staircase with a length of steps, where you can take 1 or 2 steps at a time, find the number of distinct combinations to reach the top of the staircase from the bottom of the stairs.

// Input
// steps: number: An integer
// Examples
// Input: steps = 1
// Output: 1
// Explanation: There is only one way i.e take 1-step
// Input: steps = 2
// Output: 2
// Explanation: There are two ways, either take two 1-step or take one 2-step
// Input: steps = 3
// Output: 3
// Explanation: There are three ways: 1-step three times, 1-step then 2-step, 2-step then 1-step

export default function staircaseClimbingCombinations(steps) {
    return climbFromStep(0, steps);
}

function climbFromStep(currentStep, totalSteps){
  if(currentStep > totalSteps) return 0;
  if(currentStep === totalSteps) return 1;
  return {
    climbFromStep(currentStep + 1, totalSteps) + climbFromStep(currentStep + 2, totalSteps);
  }
}

// This solution calculates the number of distinct ways to climb a staircase with a given number of steps using recursion. At each step, the climber can choose to take either 1 step or 2 steps. The problem is solved by recursively calculating the total number of ways to reach the top from the current step.

// The algorithm uses a helper function to explore all possible combinations of steps:

// If the current step exceeds the total number of steps, the path is invalid, so it returns 0.
// If the current step equals the total number of steps, it represents a valid path, so it returns 1.
// For all other cases, it recursively calculates the number of ways to reach the top by taking either 1 step or 2 steps from the current step.
// This brute force approach explores all possible paths to find the total number of combinations. However, it does redundant calculations as the same subproblems are solved multiple times, which increases its computational cost.
Time complexity: O(2n). Each step branches into two recursive calls, leading to an exponential number of function calls.
Space complexity: O(n). The recursion stack can grow up to the depth of n, where n is the total number of steps.


0
export default function staircaseClimbingCombinations(steps ){
    // Create an array 'dp' of size n+1 initialized with -1
    // This array will store the number of distinct ways to reach each step
    const dp =  new Array(steps + 1).fill(-1);
  
    // Base cases
    // There is 1 way to reach step 0 (do nothing)
    dp[0] = 1;
    // There is 1 way to reach step 1 (a single step)
    dp[1] = 1;
  
    // Fill the dp array using the recurrence relation
    // dp[i] = dp[i-1] + dp[i-2]
    // This relation comes from the fact that you can reach step i either from step i-1 or step i-2
    for (let i = 2; i <= steps; i++) {
      dp[i] = dp[i - 1] + dp[i - 2];
    }
  
    // The value at dp[n] will be the number of distinct ways to reach the top of the staircase
    return dp[steps];
  }