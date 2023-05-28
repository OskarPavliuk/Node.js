function deepClone<T>(obj: T): T {
    if (typeof obj !== 'object' || obj === null) {
      return obj;
    }
  
    if (Array.isArray(obj)) {
      const cloneArr = obj.map(item => deepClone(item));
      return cloneArr as any;
    }
  
    const cloneObj = {} as T;
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        cloneObj[key] = deepClone(obj[key]);
      }
    }
  
    return cloneObj;
  }
  
  // Приклад 
  const obj1 = {
    name: 'Oskar',
    age: 19,
    hobbies: ['programming', 'playing basketball'],
    address: {
      street: 'Abalmasova',
      city: 'Kiyv'
    }
  };
  
  const obj2 = deepClone(obj1);
  
  console.log(obj2);
  console.log(obj2 === obj1); // false