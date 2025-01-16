// Implement a function findIndex(array, predicate, [fromIndex=0]) that takes an array of values, a function predicate, and an optional fromIndex number argument, 
//and returns the index of the first element in the array that satisfies the provided testing function predicate.

// const arr = [1, 2, 3, 4, 5];

// // Search for the first value in the array that is greater than 3.
// findIndex(arr, (num) => num > 3); // => 3

// // Start searching from index 4 (inclusive).
// findIndex(arr, (num) => num > 3, 4); // => 4

// // No such element exists.
// findIndex(arr, (num) => num > 10, 3); // => -1

const arr = [1, 2, 3, 4, 5];
function findIndex(array, predicate, fromIndex = 0) {
    for(let i=fromIndex;i<array.length;i++){
        if(predicate(array[i])) return i;
    }
    return -1;
}
console.log(findIndex(arr, (num) => num > 3)); 
console.log(findIndex(arr, (num) => num > 3, 4));
console.log(findIndex(arr, (num) => num > 10, 3));


// Implement a function findLastIndex(array, predicate, [fromIndex=array.length-1]) that takes an array of values, a function predicate, and an optional fromIndex number argument, and returns the index of the last element in the array that satisfies the provided testing function predicate. The elements of the array are iterated from right to left.

// const arr = [5, 4, 3, 2, 1];

// // Search for the last value in the array that is greater than 3 and return the index.
// findLastIndex(arr, (num) => num > 3); // => 1

// // Start searching from index 3 (inclusive).
// findLastIndex(arr, (num) => num > 1, 3); // => 3

// // Start searching from index 3 (inclusive).
// findLastIndex(arr, (num) => num < 1, 3); // => -1

export default function findLastIndex(
    array,
    predicate,
    fromIndex = array.length - 1,
  ) {
    throw 'Not implemented!';
  }