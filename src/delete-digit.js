const { NotImplementedError } = require("../lib");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // Remove line below and write your code here
  let maxNum = 0;

  const numbers = n.toString();

  for (let i = 0; i < numbers.length; i += 1) {
    const num = parseInt(numbers.slice(0, i) + numbers.slice(i + 1));
    if (num > maxNum) {
      maxNum = num;
    }
  }
  return maxNum;
}

module.exports = {
  deleteDigit,
};
