/* Given an array. Write a function to find the product of all elements which are even.
*/

const arr = [1, 2, 3, 7, 5, 6, 8, 9];
const reducerCallback = (acc, cur) => cur % 2 === 0 ? acc * cur : acc

const output = arr.reduce(reducerCallback, 1)
console.log(output);