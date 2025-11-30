function mapLimit(inputs, limit, iterateeFn, callback){
   let index = 0;
   let running = 0;
   let completed = 0;
   let results = [];
   let hasError = false;

   function runNext(){
     // Check if all tasks are completed
     if(completed === inputs.length) {
        callback(null, results);
        return;
     }

     // Start new tasks up to the limit
     while(running < limit && index < inputs.length && !hasError){
        running++;
        const currentIndex = index;
        const input = inputs[index];
        index++;
        
        console.log(`🚀 Starting task ${currentIndex + 1} (input: ${input}) | Running: ${running}/${limit}`);
        
        iterateeFn(input, (err, result) => {
            running--;
            completed++;
            
            if(err) {
                hasError = true;
                callback(err, null);
                return;
            }
            
            results[currentIndex] = result;
            console.log(`✅ Completed task ${currentIndex + 1} (result: ${result}) | Running: ${running}/${limit}`);
            runNext();
        });
     }  
   }

   runNext();
 
}


function asyncSquare(n, cb) {
    const delay = Math.random() * 2000; // Random delay between 0-2 seconds
    console.log(`   ⏱️  Task for ${n} will take ${Math.round(delay)}ms`);
    setTimeout(() => {
        cb(null, n * n); // Follow Node.js callback convention: (err, result)
    }, delay);
}

mapLimit([1,2,3,4,5,6], 2, asyncSquare, (err, results) => {
    if(err) {
        console.error("Error:", err);
        return;
    }
    console.log("Done:", results);
});
