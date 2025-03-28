// write a function to keep track of how many times it's called

function myFunc() {
    let count = 0;
    
    return function() {
      count++;
      return count;
    };
  }
   
  console.log(myFunc());
   
  const instanceOne = myFunc();
  const instanceTwo = myFunc();
   
  console.log('instanceOne: ', instanceOne());
  console.log('instanceOne: ', instanceOne());
  console.log('instanceOne: ', instanceOne());
  console.log('instanceTwo: ', instanceTwo());
  console.log('instanceTwo: ', instanceTwo());
  