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

 
 
function makeFetchPromise(url, timeout = 5000){
    const controller = new AbortController();
    const signal = controller.signal;
    const result = fetch(url, { signal});
    const cancelable = makeCancellable(result); 

    const timeoutId = setTimeout(() => {
        controller.abort();     // abort fetch
        cancelable.cancel();    // stop resolution
    }, timeout);

    return {
        promise: cancelable.promise.finally(() => clearTimeout(timeoutId)),
        cancel: () => {
            clearTimeout(timeoutId);
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

