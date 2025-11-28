class CanceledPromiseError extends Error {
  constructor() {
    super("Promise has been canceled");
    this.name = "CanceledPromiseError";
  }
}

const asyncTask1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Task 1 completed");
   }, 500);
});
const asyncTask2 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 2 completed");
  }, 3000);
});


Promise.cancelable = (promise) => {
  let isCanceled = false;
  const wrappedPromise = new Promise((resolve, reject) => {
    promise.then(
      (value) => {
          if (isCanceled) {
            reject(new CanceledPromiseError());
        } else {
        resolve(value);
        }
      },
    (error) => {
      reject(error); // Propagate any errors from the original promise
    }
    );
});
  wrappedPromise.cancel = () => {
    isCanceled = true;
  };
  return wrappedPromise;
};

const cancelableTask1 = Promise.cancelable(asyncTask1);
const cancelableTask2 = Promise.cancelable(asyncTask2);
cancelableTask1
.then((result) => console.log(result))
.catch((error) => console.error(error));
cancelableTask2
.then((result) => console.log(result))
.catch((error) => console.error(error));
// Cancel the task after 1 second
setTimeout(() => {
cancelableTask1.cancel();
cancelableTask2.cancel();
},1000);
