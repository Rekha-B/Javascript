// Implement a function maxBy(array, iteratee) that finds the element inside array with the maximum value after going through iteratee. The iteratee is invoked with one argument: (value).

// Arguments
// array (Array): The array to iterate over.
// iteratee (Function): The iteratee invoked per element.
// Returns
// (*): Returns the maximum value.

// Examples
// maxBy([{ n: 1 }, { n: 2 }], (o) => o.n); // => { n: 2 }

// maxBy([1, 2], (o) => -o); // => 1
// The function should ignore elements where iteratee produces null or undefined.


// maxBy([{ n: 1 }, { n: 2 }], (o) => o.m); // => undefined

// minBy([2, 3, 1, 4], (num) => num); // => 1

// minBy([{ n: 1 }, { n: 2 }], (o) => o.n); // => { n: 1 }

export default function maxBy(array, iteratee) {
    let result, computed;
    for(const value of array){
     const current = iteratee(value);
     if(current != null && (computed === undefined || current > computed)){
       computed = current;
       result = value;
     }
    }
    return result;
 }

 export default function minBy(array, iteratee) {
    let result, computed;
    for(let value of array){
      const current = iteratee(value);
      if(current != null && (computed === undefined || current < computed)){
        computed = current;
        result = value;
      }
    }
    return result;
  }