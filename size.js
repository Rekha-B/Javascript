// Implement a function size(collection) that takes a collection (an array, object, string, Map, Set) and returns its size, which represents the number of elements in the collection.


// // Arrays.
// size([1, 2, 3, 4, 5]); // => 5
// // Object.
// size({ a: 1, b: 2 }); // => 2
// // Strings.
// size('peanut'); // => 6
// // Sets.
// size(new Set([1, 2, 3])); // => 3
// // Maps.
// size(
//   new Map([
//     [1, 2],
//     [3, 4],
//   ]),
// ); // => 2

if (collection == null) {
    return 0;
  }

  if (Array.isArray(collection) || typeof collection === 'string') {
    return collection.length;
  }

  if (collection instanceof Map || collection instanceof Set) {
    return collection.size;
  }

  if (typeof collection === 'object') {
    return Object.keys(collection).length;
  }

  return 0;