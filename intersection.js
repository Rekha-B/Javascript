// Implement a JavaScript function intersection(arrays) that takes multiple arrays as input and returns a new array containing the unique values that are present in all given arrays SameValueZero for equality comparisons. The order and references of result values are determined by the first array.

// intersection(...arrays);
// Arguments
// [arrays] (...Array): The arrays to perform the intersection on.
// Returns
// (Array): Returns a new array containing the unique values present in all given arrays.

// Examples

// const arr1 = [1, 2, 3];
// const arr2 = [2, 3, 4];
// const arr3 = [3, 4, 5];

// intersection(arr1, arr2, arr3); // => [3]

export default function intersection(...arrays) {
    if (arrays.length === 0) return [];
    const set = new Set(arrays[0]);
    for(let i=1;i<arrays.length;i++){
      set.forEach(value => {
        if(!arrays[i].includes(value)){
          set.delete(value);
        }
      })
    }
    return Array.from(set);
  }
  