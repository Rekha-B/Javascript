function get(objectParam, pathParam, defaultValue) {
    const flattenObj = (obj, parent = '', res = {}) => {
      for (let key in obj) {
        const newKey = parent ? parent + "." + key : key;
        if (typeof obj[key] === "object") {
          flattenObj(obj[key], newKey, res);
        } else {
          res[newKey] = obj[key];
        }
      }
      return res;
    };
  
    const result = flattenObj(objectParam);
    return result[pathParam];
  }
  
  const john = {
    profile: {
      name: { firstName: 'John', lastName: 'Doe' },
      age: 20,
      gender: 'Male',
    },
  };
  
  const jane = {
    profile: {
      age: 19,
      gender: 'Female',
    },
  };

console.log(get(john, 'profile.name.firstName')); // 'John'
console.log(get(john, 'profile.gender')); // 'Male'
console.log(get(jane, 'profile.name.firstName')); // undefined

console.log(get({ a: [{ b: { c: 3 } }] }, 'a.0.b.c')); // 3