// 'use strict' enforces strict parsing and error handling in code
// 1) Prevents use of global variables
// 2) Name clash in function parameters
// 3) Prevents property deletion from object


// example 1
 
'use strict';
 
city = 'London';
 
console.log(city);
 
 
 
 
// example 2
 
'use strict';
 
function myFunc(a, a, b) {
    console.log(a, a, b);
}
 
myFunc(1, 2, 3);
 
 
 
 
// example 3
 
'use strict';
 
delete Object.prototype;
