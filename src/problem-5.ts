/**
 * Problem 5:
Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.

* Hints: Use keyof

* // Sample Input:
const person = { name: "Alice", age: 30 };
console.log(getProperty(person, "name"));

// Sample Output:
Alice;
 */

const getProperty = <AAL, SAST extends keyof AAL>(
  obj: AAL,
  key: SAST
): AAL[SAST] => {
  return obj[key];
};

console.log(getProperty({ name: "Alice", age: 30 }, "age"));
