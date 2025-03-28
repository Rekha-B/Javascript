// Example 1:

// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
// Example 2:

// Input: n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
// Example 3:

// Input: n = 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.

function fibonacci(n){
    if (n <= 1) {
		return n;
	}
    let value1 = 0;
    let value2 = 1;
    for(let i=2;i<=n;i++){
        let nextValue = value1 + value2;
        value1 = value2;
        value2 = nextValue;
    }
    return value2;
}