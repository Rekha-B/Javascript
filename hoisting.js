var getAdd;

console.log(getAdd(10,20));  //getAdd is not a function

var getAdd = function(num1, num2){
    return num1 + num2;
}



console.log(getAdd(10,20));  //"ReferenceError: Cannot access 'getAdd' before initialization

const getAdd = function(num1, num2){
    return num1 + num2;
}


// function declarations and function expressions behave differently in hoisting

// tab 1
 
function getTotal() {
    console.log(multiplier);
    console.log(total);
    
    let total = 0;
    
    for(var i = 0; i < 10; i++) {
      
      let valueToAdd = i;
      var multiplier = 2;
      total += valueToAdd * multiplier;
    }
    
    return total;
  }
   
  getTotal();
   
   
   
  // tab 2
   
  function getTotal() {
    let total;
    var multiplier;
    
    total = 0;
    
    for(var i = 0; i < 10; i++) {
      let valueToAdd;
      
      valueToAdd = i;
      multiplier = 2;
      total += valueToAdd * multiplier;
    }
    
    return total;
  }
   
  getTotal();
  