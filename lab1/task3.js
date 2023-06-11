function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }
  
    let clone;
  
    if (obj instanceof Array) {
      clone = [];
      for (let i = 0; i < obj.length; i++) {
        clone[i] = deepClone(obj[i]);
      }
    } else {
      clone = {};
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          clone[key] = deepClone(obj[key]);
        }
      }
    }
  
    return clone;
  }
  
  // Приклад
  const originalObj = {
    name: 'Oskar',
    age: 19,
    hobbies: ['programming', 'playing basketball'],
    address: {
      street: 'Abalmasova',
      city: 'Kiyv'
    }
  };
  
  const clonedObj = deepClone(originalObj);
  
  console.log(clonedObj);
  console.log(originalObj === clonedObj); // false