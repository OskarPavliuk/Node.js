function arrayChangeDelete<T>(arr: Array<T>, cond: (item: T) => boolean): Array<T> {
    let result: typeof arr = [];
    arr.forEach((item, index) => {
        if (cond(item)) {
            let del = arr.splice(index, 1);
            result.push(...del);
        }
    });
    return result;
}

const array = [1, 2, 3, 6, 7, 9];
const deletedElements = arrayChangeDelete(array, (item) => item % 2 === 0);
console.log(array);
console.log(deletedElements);