/**
 * Problem 1:
 Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

 * // Sample Input:
sumArray([1, 2, 3, 4, 5]);

// Sample Output:
15;
 */

//Solution 1

const sumArray = (arr: Array<number>): number => {
  let sum: number = 0;

  for (let i: number = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};
console.log(sumArray([1, 2, 3, 4, 5]));

//Solution 2
const sumArray2 = (arr: number[]): number => {
  return arr.reduce((prev, curr) => prev + curr, 0);
};

console.log(sumArray2([1, 2, 3, 4, 5, 7]));
