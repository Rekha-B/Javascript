// mplement a function compose that takes multiple functions as arguments and returns a new function that applies those functions in reverse order. The output of one function becomes the input of the next function, creating a chain of function compositions.

// If there are no functions passed to the compose function, the default behavior is to return a new function that simply returns the input it receives. In other words, the default behavior of compose without any functions results in a simple identity function.

// You may assume that all the functions accept a single parameter.

// Examples

// const add1 = (num) => num + 1;
// const double = (num) => num * 2;
// const subtract10 = (num) => num - 10;

// const composedFn = compose(subtract10, double, add1);
// composedFn(3); // (3 + 1) * 2 - 10 => -2



export default function compose(...fns) {
    return function(num){
     let result = num;
       for(let i=fns.length-1;i>=0;i--){
           result = fns[i](result);
       }
       return result;
    }
 }