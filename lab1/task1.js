function add(num) {
// Початкове значення sum встановлюється на перший переданий параметр num.
    let sum = num;
// Функція innerAdd приймає наступний параметр nextNum.
    function innerAdd(nextNum) {
// Якщо nextNum не визначено (тобто не передано жодного параметра), функція повертає поточну суму sum.
      if (nextNum === undefined) {
        return sum;
      }
// Якщо nextNum передано, то його додають до sum і повертають знову функцію innerAdd.
      sum += nextNum;
      return innerAdd;
    }
// Функція add повертає функцію innerAdd, що дозволяє продовжувати ланцюжок викликів з параметрами.
    return innerAdd;
  }
  
  console.log(add(2)(5)(7)(1)(6)(5)(11)()); // 37