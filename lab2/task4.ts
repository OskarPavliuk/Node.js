type CacheKey = string;
type CacheValue = number;
type Cache = Map<CacheKey, CacheValue>;

function wrapper(func: (...args: number[]) => number): (...args: number[]) => number {
  const cache: Cache = new Map();

  return (...args: number[]): number => {
    const cacheKey: CacheKey = JSON.stringify(args);

    if (cache.has(cacheKey)) {
      return cache.get(cacheKey)!;
    }

    const result: number = func(...args);
    cache.set(cacheKey, result);

    return result;
  };
}

// Приклад використання
const calc = (a: number, b: number, c: number): number => a + b + c;
const cachedCalc = wrapper(calc);

console.log(cachedCalc(2, 2, 3)); // 7 calculated
console.log(cachedCalc(5, 8, 1)); // 14 calculated
console.log(cachedCalc(2, 2, 3)); // 7 from cache