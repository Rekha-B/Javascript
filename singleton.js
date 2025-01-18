// The Singleton pattern is used when you want to ensure that a class has only one instance and provide a global point of access to that instance. The Singleton pattern is useful for:

// Single point of control: When you need a single point of control for actions, such as managing a configuration object, logging, or controlling access to a shared resource.
// Global state: When you want to maintain a global state that should be accessible from different parts of your application. This is especially useful when sharing common data across various components.
// Preventing duplicate initialization: To ensure that only one instance of a class is created, preventing duplicate initialization and avoiding potential issues related to multiple instances.
// Caching: For implementing a caching mechanism where you want to maintain a single cache instance throughout the application.
// Implement the GlobalMap module in JavaScript using the Singleton pattern. The GlobalMap module exports an object that has a single getInstance() method which returns a Map object that can be used as a key/value store for global caching/memoization.

// Examples
// // fileA.js
// import GlobalMap from './GlobalMap';

// const gbMap = GlobalMap.getInstance();
// gbMap.set('count', 42);
// Somewhere else in another file, executed after the first:


// // fileB.js
// import GlobalMap from './GlobalMap';

// const gbMap = GlobalMap.getInstance();
// console.log(gbMap.get('count')); // 42



// Solution 1: ES6 Modules
// Since each file in the coding workspace is a module, and ES6 modules are single instances of a module, we can use this to easily implement the Singleton pattern. This module exports an object with a single method, getInstance. The getInstance method is responsible for providing access to the globalMap instance. When other parts of the application import this module and call getInstance, they receive a reference to the same globalMap instance.

const globalMap = new Map();

export default {
  getInstance() {
    return globalMap;
  },
};
// Solution 2: ES6 Modules with lazy instantiation
// In the first solution, the Map instance was instantiated from the start. However, in some cases where instantiation is expensive and there's a good chance you might never even need to use the instance at all, then a lazy instantiation approach is better.

// In this modified version, the getInstance method checks if globalMap has been instantiated before creating a new instance. If globalMap is already instantiated, it simply returns the existing instance. This way, the map is created only when the getInstance method is called for the first time, making the instantiation lazy. The usage remains the same.

let globalMap: Map<any, any>;

export default {
  getInstance() {
    if (globalMap === undefined) {
      globalMap = new Map();
    }

    return globalMap;
  },
};
// Solution 3: Immediately-invoked Function Expression (IIFE)
// Before ES6 modules were a thing, Immediately-invoked Function Expressions (IIFEs) could be used to encapsulate data to get a module. In this version, the entire Singleton pattern is wrapped in an IIFE, creating a closure that encapsulates the globalMap variable. The getInstance method is exposed through the returned object, allowing access to the shared map instance.



const GlobalMap = (function () {
  const _privateMap = new Map();

  return {
    getInstance: function () {
      return _privateMap;
    },
  };
})();

export default GlobalMap;