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

 
 
function makeFetchPromise(url){
    const controller = new AbortController();
    const signal = controller.signal;
    const result = fetch(url, { signal});
    const cancelable = makeCancellable(result); 

    return {
        promise: cancelable.promise,
        cancel: () => {
            controller.abort();
            cancelable.cancel();
        }
    }
}   

async function fetchData(url){
    const { promise, cancel} = makeFetchPromise(url);
    setTimeout(() => {
        console.log('Cancelling request');
        cancel();
    }, 100);
    try {
        const result = await promise;
        console.log(await result.json());
    } catch (error) {
        if(error.name === 'AbortError'){
            cancel();
            console.log('Request cancelled');
        }else{
            console.error(error);
        }
    }
}

fetchData('https://sonplaceholder.typicode.com/posts/1');

