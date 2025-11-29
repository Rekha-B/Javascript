function makeCancelable(promise) {
  let hasCanceled = false;

  const wrappedPromise = new Promise((resolve, reject) => {
    promise
      .then((value) => {
        if (hasCanceled) return; // ignore after cancel
        resolve(value);
      })
      .catch((error) => {
        if (hasCanceled) return;
        reject(error);
      });
  });

  return {
    promise: wrappedPromise,
    cancel() {
      hasCanceled = true;
    }
  };
}


const { promise, cancel } = makeCancelable(
  fetch("https://api.example.com/users")
);

promise
  .then((r) => r.json())
  .then(console.log)
  .catch(console.error);

// Cancel anytime
cancel();


/**Cancelable Promise ignores resolution but does NOT stop fetch internally, because fetch runs outside JS promise control.

If you want real cancellation, you combine this with AbortController.**/


function cancelableFetch(url, options = {}) {
  const controller = new AbortController();
  const { signal } = controller;

  return makeCancelable(
    fetch(url, { ...options, signal })
  );
}

const { promise, cancel } = cancelableFetch(url);

promise.catch(err => {
  if (err?.name === "AbortError") console.log("Canceled");
});

cancel();  // internally calls abort












