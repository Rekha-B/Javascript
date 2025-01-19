// Implement a function range([start=0], end, [step=1]) that creates an array of numbers (positive and/or negative) progressing from start up to, but not including, end. A step of -1 is used if a negative start is specified without an end or step. If end is not specified, it's set to start with start then set to 0.

// Arguments
// start (Number): The start of the range.
// end (Number): The end of the range.
// step (Number): The value to increment or decrement by.
// Returns
// (Array): Returns the range of numbers.

// Examples
// range(4); // => [0, 1, 2, 3]

// range(-4); // => [0, -1, -2, -3]

// range(1, 5); // => [1, 2, 3, 4]

// range(0, 20, 5); // => [0, 5, 10, 15]

// range(0, -4, -1); // => [0, -1, -2, -3]

// range(1, 4, 0); // => [1, 1, 1]
// The function should return an empty array if start is equal to end.

/**
 * @param {Number} start - The first number of the resultant array.
 * @param {Number} end - The value where the resultant array will stop at and not contain it.
 * @param {Number} step - The step / increment value of each number in the array.
 * @return {Array<Number>} Returns the array with the sequence of numbers in the specified range.
 */
export default function range(start = 0, end, step = 1) {
    let result = [];
      if(end === undefined){
         end = start;
         start = 0;
      }
      if (end < start && step === 1) {
        step = -1;
      }
  const length = (end - start)/(step || 1);
  
      for(let i=0;i<length;i++){
        result.push(start + step * i);
      }
      return result;
    
  }
  