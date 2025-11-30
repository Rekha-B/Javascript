function makeCancellable(promise) {
   let hasCancelled = false;

   const wrappedPromise = new Promise((resolve, reject) => {
       promise.then((result) => {
        if(hasCancelled)return;
            resolve(result);
       })
       .catch((error) => {
        if(hasCancelled)return;
            reject(error);
       });
   });
   return { 
    promise: wrappedPromise,
    cancel: () => {
        hasCancelled = true;
    }
   }
}

const asynTask1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Task 1 completed');
    }, 3000);
});

const asynTask2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Task 2 completed');
    }, 2000);
});

const { promise, cancel} = makeCancellable(asynTask1);
promise.then((result) => {
    console.log(result);
}).catch((error) => {
    console.error(error);
});

setTimeout(() => {
    console.log('Cancelling request');
    cancel();
}, 100);


