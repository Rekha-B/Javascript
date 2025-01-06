// IIFE is a function which gets executed once the function is created
//IIFE has its own private scope and will not overide the global variables in our entire application

(function doubleNumber(num) {
    return num * 2;
  })(10);
   
   
   
  (function() {
    
    function getTotal(a, b) {
      return a + b;
    }
    
    var $ = 'currency';
    
    if (true) console.log('hello world');
    
  })();