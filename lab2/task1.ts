function add(num: number): Function {
    let sum: number = num;

    function innerAdd(nextNum: number): number | Function {
        if (nextNum !== undefined) {
            sum += nextNum;
            return innerAdd;
        } else {
            return sum;
        }
    }

    return function next(): number | Function {
        if (arguments.length === 0) {
            return sum;
        } else {
            return innerAdd(arguments[0]);
        }
    };
}

console.log(add(2)(5)(7)(1)(6)(5)(11)()) // 37