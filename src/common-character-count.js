const { NotImplementedError } = require("../lib");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  // Remove line below and write your code here
  const count1 = {};
  const count2 = {};
  let result = 0;
  for (const char of s1) {
    count1[char] = (count1[char] || 0) + 1;
  }
  for (const char of s2) {
    count2[char] = (count2[char] || 0) + 1;
  }
  for (let key in count1) {
    if (count2[key]) {
      result += Math.min(count1[key], count2[key]);
    }
  }
  return result;
}

module.exports = {
  getCommonCharacterCount,
};
