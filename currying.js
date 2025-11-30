function getProduct(num1, num2) {
    return num1 * num2;
  }


  // tab 1
 
// function getProduct(num1, num2) {
//   return num1 * num2;
// }
 
function getProduct(num1) {
    return function(num2) {
      return num1 * num2;
    };
  }
   
  getProduct(10)(20);
   
   
   
   
  // tab 2
   
  // function getTravelTime(distance, speed) {
  //   return distance / speed;
  // }
   
  function getTravelTime(distance) {
    return function(speed) {
      return distance / speed;
    };
  }
   
  const travelTimeBosNyc = getTravelTime(400);
  const travelTimeMiamiAtlanta = getTravelTime(600);
  console.log(travelTimeBosNyc(100));



function currying(fn){
    return function curried(...args){
        if(args.length >= fn.length){
            return fn.apply(this,args);
        }
        else {
            return function(...args2){
                return curried.apply(this, args.concat(args2));
            }
        }
    };
}

function multiply(a, b, c, d) {
    return a * b * c * d;
}

const curriedMultiply = currying(multiply);
console.log(curriedMultiply(1)(2)(3)(4)); // 24
console.log(curriedMultiply(1, 2)(3, 4)); // 24
console.log(curriedMultiply(1)(2, 3)(4)); // 24
