/**
 * Problem 3:
Write a TypeScript function countWordOccurrences that takes a sentence (string) and a word (string). It should return the number of times the word appears in the sentence, case-insensitively.
* // Sample Input:
countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript");

// Sample Output:
2;
 */
const countWordOccurrences = (sentence: string, word: string): number => {
  const lwSentence = sentence.toLocaleLowerCase();
  const lwWord = word.toLocaleLowerCase();
  const words = lwSentence.split(/\W+/);
  const matchingWords = words.filter((w) => w === lwWord);
  const count = matchingWords.length;
  return count;
};
console.log(countWordOccurrences("I love typescript", "typescript"));
