// task 1
function decl(a, b) {
    return a > b ? a : b;
}

const expr = function (a, b) {
    return a > b ? a : b;
}

const arrow = (a, b) => a > b ? a : b;

console.log(decl(2, 4));
console.log(expr(3, 1));
console.log(arrow(11, 19));

//task 2
const recursive = (value) => {
    console.log(value);
    if (value <= 20) {
        recursive(value + 1);
    } else {
        console.log('Recursive function interrupted here as the values is greater or equal 20');
    }
}

recursive(2);

//task 3
const nestedArray = [["apple", "banana", "dog"], ["cherry", "cat", "elephant"], ["red", "green", "cat"]];
const checkTheArray = (nestedArray) => {
    for (element of nestedArray) {
        if (element.includes('cat')) {
            console.log('found');
            return;
        }
    }
    console.log('not found');
}

checkTheArray(nestedArray);

//task 4
const divideArray = (numbers) => {
    const result = [];
    try {
        if (!(numbers && numbers.length)){
            throw new Error ('The argument must be an Array');
        }
        if (numbers.length < 2) {
            throw new Error('The array must contain at least 2 elements.');
        }

        for (let i = 1; i < numbers.length; i++) {
            if (typeof numbers[i - 1] !== 'number' || typeof numbers[i] !== 'number' || numbers[i - 1] === 0 || numbers[i] === 0) {
                throw new Error('Invalid division: The elements must be numbers and the preceding element cannot be 0');
            }
            const divisionResult = numbers[i] / numbers[i - 1];
            result.push(divisionResult);
        }
    } catch (error) {
        console.log('Error: ' + error.message);
    } finally {
        console.log('The work is done: ', result);
    }
    return result;
}

divideArray([10, 2, 5]);
divideArray([5, 0, 2]);
divideArray([10, 'abc', 2]);
divideArray([3]);
divideArray([3, 13, 132323, 12, 12]);
divideArray(undefined);
divideArray(null);

//task 5
const array = [1, 8, 10, 11, -8, 17, 20, 22, 40, 37, 45, 0, 3, 45, 56];
for (const element of array) {
    if (element % 2 !== 0 ) {
        console.log(element);
    }
}

const arrayColors = ['yellow', 'green', 'apple', 'red', 'pink'];
console.log(arrayColors.sort((a, b)=> a.localeCompare(b)));

//task 6
const firstArray = [2, 4, 6, 8];
const secondArray = [1, 3, 5 ,7];
const thirdArray = firstArray.concat(secondArray);
console.log(thirdArray);

//task 7
const myValues = [10, 20, 30, 40, 50];
const myResult = myValues.reduce((acc, curr) => acc + curr);
console.log(myResult);