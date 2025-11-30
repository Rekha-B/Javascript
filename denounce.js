function debounce(fn, delay, options = { leading: false, trailing: true }){
    let timeoutId = null;
    let lastInvokeTime = 0;

    return function(...args){
        const context = this;
        const now = Date.now();
        const timeSinceLastInvoke = now - lastInvokeTime;
        const shouldCallLeading = options.leading && timeSinceLastInvoke >= delay;

        clearTimeout(timeoutId);

        if(shouldCallLeading){
            fn.apply(context, args);
            lastInvokeTime = now;
        }

        timeoutId = setTimeout(() => {
            if(options.trailing && !shouldCallLeading){
                fn.apply(context, args);
                lastInvokeTime = Date.now();
            }
            timeoutId = null;
        }, delay);
    }
}
const logMessage = debounce((message) => {
    console.log(message);
}, 3000, { leading: false, trailing: true });

logMessage('First call');
logMessage('Second call');
logMessage('Third call');
logMessage('Fourth call');
logMessage('Fifth call');
setTimeout(() => {
    logMessage('Sixth call');
}, 1000);
setTimeout(() => {
    logMessage('Seventh call');
}, 2000);
setTimeout(() => {
    logMessage('Eighth call');
}, 3000);
setTimeout(() => {
    logMessage('Ninth call');
}, 4000);
setTimeout(() => {
    logMessage('Tenth call');
}, 5000);
