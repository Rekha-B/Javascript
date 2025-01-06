// ==  (equals) tests for abstract equality, does not test data type
// === (strict equals) tests for strict equality, does for data type

// During == comparison
// when comparing number with a String, a string is converted to number and comparison is made
// when comparing boolean with non-boolean, non-boolean is converted to boolean and comparison is made
// comparing object and primitive data-type , object is converted to primitive data type and comparison is made

console.log(7 == '7');  // true
 
console.log(7 === '7');  // false