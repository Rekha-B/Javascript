function makeCancellable(promise, timeoutMs = null) {
    let hasCancelled = false;
    let timeoutId = null;

    const wrappedPromise = new Promise((resolve, reject) => {

        // If a timeout is provided → auto-cancel after timeoutMs
        if (timeoutMs !== null) {
            timeoutId = setTimeout(() => {
                hasCancelled = true;
                reject(new Error("Operation timed out"));
            }, timeoutMs);
        }

        promise.then((result) => {
            if (hasCancelled) return;
            clearTimeout(timeoutId);
            resolve(result);
        }).catch((error) => {
            if (hasCancelled) return;
            clearTimeout(timeoutId);
            reject(error);
        });

    });

    return {
        promise: wrappedPromise,
        cancel: () => {
            hasCancelled = true;
            clearTimeout(timeoutId);
        }
    };
}
