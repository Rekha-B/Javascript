function debounce(fn, delay, options = {}) {
  const { leading = false, trailing = true } = options;

  let timerId = null;
  let lastArgs = null;
  let lastThis = null;
  let leadingExecuted = false;

  return function (...args) {
    lastArgs = args;
    lastThis = this;

    const shouldCallLeading = leading && !timerId;

    if (shouldCallLeading) {
      fn.apply(lastThis, lastArgs);  // call immediately
      leadingExecuted = true;
    }

    clearTimeout(timerId);

    timerId = setTimeout(() => {
      if (trailing && (!leading || leadingExecuted)) {
        fn.apply(lastThis, lastArgs);  // final call
      }

      timerId = null;
      leadingExecuted = false;
    }, delay);
  };
}
