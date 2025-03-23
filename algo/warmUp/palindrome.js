// Palindrome Number
// Given an integer x, return true if x is a palindrome, and false otherwise. 

// Note: Converting the integer to a string is not recommended.

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

var isPalindrome = function(x) {
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }

    // let reverseNumber = 0;
    // while (x > reverseNumber) {
    //     reverseNumber = reverseNumber * 10 + x % 10;
    //     x = Math.floor(x / 10);
    // }

    // // Compare first and second halves
    // return x === reverseNumber || x === Math.floor(reverseNumber / 10);
    let reverseNumber = 0;
    let temp = x;
    while(temp !== 0 ){
        reverseNumber = (reverseNumber * 10) + (temp % 10);
        temp = Math.floor(temp/10);
    }
    return reverseNumber === x;
};
