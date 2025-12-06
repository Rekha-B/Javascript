function debounce(fn, delay, options = { leading: false, trailing: true }) {
    let timer = null;
    let lastArgs = null;
    let lastThis = null;
    let invokedLeading = false; // tracks leading execution
  
    // Case: both false => return no-op
  
      if (!options.leading && !options.trailing) {
      const noop = () => {};
  
      noop.cancel = () => {};
      noop.flush = () => {};
  
      return noop;
  }
  
  
    function debounced(...args) {
      lastArgs = args;
      lastThis = this;
  
      clearTimeout(timer);
  
      // ------- Leading Execution -------
      if (options.leading && !invokedLeading) {
        fn.apply(lastThis, lastArgs);
        invokedLeading = true;
        lastArgs = null; // Important: so trailing fires ONLY if new calls happen
      }
  
      // ------- Trailing Execution -------
      timer = setTimeout(() => {
        // Trailing executes only if:
        // 1. trailing option is true
        // 2. lastArgs exists (means new calls happened), else don't fire
        if (options.trailing && lastArgs !== null) {
          fn.apply(lastThis, lastArgs);
        }
  
        invokedLeading = false;
        lastArgs = null;
        lastThis = null;
  
      }, delay);
    }
  
    // ------- Cancel -------
    debounced.cancel = function () {
      clearTimeout(timer);
      lastArgs = null;
      lastThis = null;
      invokedLeading = false;
    };
  
    // ------- Flush -------
    debounced.flush = function () {
      clearTimeout(timer);
  
      if (lastArgs !== null) {
        fn.apply(lastThis, lastArgs);
      }
  
      lastArgs = null;
      lastThis = null;
      invokedLeading = false;
    };
  
    return debounced;
  }
  
  
  const saveInput = debounce(
    (message) => console.log(message),
    300,
    {leading: true, trailing: false}
  );
  
  
  // Case 1: { leading: false, trailing: true } (Default)
  console.log("------- Case 1 ---------")
  saveInput("Hello...")
  saveInput("Hello.. again")
  saveInput.cancel()
  saveInput("Final value")
  saveInput.flush()
  
  
