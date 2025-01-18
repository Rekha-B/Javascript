// Implement a function objectMap(obj, fn) to return a new object containing the results of calling a provided function on every value in the object. The function fn is called with a single argument, the value that is being mapped/transformed.

// onst double = (x) => x * 2;
// objectMap({ foo: 1, bar: 2 }, double); // => { foo: 2, bar: 4}

const double = (x) => x * 2;
// function objectMap(obj, fn){
//     const result = {};
//     for(let key in obj){
//         result[key] = fn.call(obj, obj[key]);
//     }
//     return result;
// }

function objectMap(obj, fn){
    return Object.fromEntries(Object.entries(obj).map(([key,value]) => [key,fn.call(obj,value)]));
}

function objectMap(obj, fn) {
    for(let key in obj){
       obj[key] = fn(obj[key]);
    }
    return obj;
 }

console.log(objectMap({ foo: 1, bar: 2 }, double));