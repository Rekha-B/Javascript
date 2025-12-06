
function throttle(fn, delay, options = { leading: true, trailing: true }) {
  let lastCallTime = 0;
  let timer = null;
  let lastArgs = null;
  let lastThis = null;

  // Case: both false => no-op
  if (!options.leading && !options.trailing) {
    const noop = () => {};
    noop.cancel = () => {};
    noop.flush = () => {};
    return noop;
  }

  function invoke(time) {
    lastCallTime = time;
    fn.apply(lastThis, lastArgs);

    lastArgs = null;
    lastThis = null;
  }

  function throttled(...args) {
    const now = Date.now();

    if (!lastCallTime && options.leading === false) {
      // First call should not fire immediately if leading=false
      lastCallTime = now;
    }

    const remaining = delay - (now - lastCallTime);

    lastArgs = args;
    lastThis = this;

    if (remaining <= 0 || remaining > delay) {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      invoke(now);

    } else if (!timer && options.trailing !== false) {
      timer = setTimeout(() => {
        timer = null;
        if (options.trailing && lastArgs) {
          invoke(Date.now());
        }
      }, remaining);
    }
  }

  throttled.cancel = function () {
    clearTimeout(timer);
    timer = null;
    lastCallTime = 0;
    lastArgs = null;
    lastThis = null;
  };

  throttled.flush = function () {
    if (timer && lastArgs) {
      clearTimeout(timer);
      timer = null;
      invoke(Date.now());
    }
  };

  return throttled;
}
