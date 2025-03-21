// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

const isValid = function(s){
    let stack = [];
    let map = {
        '{' : '}',
        '[' : ']',
        '(' : ')'
    }
    for(let i=0;i<s.length;i++){
       if(s[i] === '(' || s[i] === '[' || s[i] === '{'){
        stack.push(s[i]);
       }
       else {
        const popped = stack.pop();
        if(map[popped] !== s[i]){
            return false;
        }
       }
    }
    return true;
}
console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([])"));