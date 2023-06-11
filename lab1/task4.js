function cacheWrapper(fn) {
    const cache = {};
  
    return function (...args) {
      const key = JSON.stringify(args);
  
      if (cache[key]) {
        console.log(`Retrieved from cache: ${cache[key]}`);
        return cache[key];
      }
  
      const result = fn(...args);
      cache[key] = result;
      console.log(`Calculated: ${result}`);
      return result;
    };
  }
  
  // Приклад
  const add = (a, b, c) => a + b + c;
  const cachedCalc = cacheWrapper(add);
  
  cachedCalc(2, 2, 3); // Calculated: 7
  cachedCalc(5, 8, 1); // Calculated: 14
  cachedCalc(2, 2, 3); // Retrieved from cache: 7