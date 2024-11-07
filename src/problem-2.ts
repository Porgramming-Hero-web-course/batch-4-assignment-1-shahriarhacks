/**
 * Problem 2:
Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.
 
 * // Sample Input:
removeDuplicates([1, 2, 2, 3, 4, 4, 5])[
  // Sample Output:
  (1, 2, 3, 4, 5)
];
 */

const removeDuplicates = (arr: number[]): number[] => {
  return Array.from(new Set(arr));
};
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

// Solution 2
const removeDuplicates2 = (arr: number[]): number[] => {
  return arr.filter((item, index) => arr.indexOf(item) === index);
};

console.log(removeDuplicates2([1, 2, 2, 3, 4, 4, 5, 9, 9, 7, 8, 8]));
