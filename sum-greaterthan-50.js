/* Given an array. Write a function to get the sum of all elements which are greater than 50. */

const arr = [1, 2, 3, 58, 5, 6, 62, 8, 70];
const reducerCallback = (acc, cur) => cur > 50 ? acc + cur : acc

const output = arr.reduce(reducerCallback, 0)
console.log(output);