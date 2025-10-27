const { NotImplementedError } = require("../lib");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  // Remove line below and write your code here
  let sum = 0;
  const cat = "^^";
  for (const arr of matrix) {
    arr.forEach((el) => (el === cat ? (sum += 1) : (sum += 0)));
  }
  return sum;
}

module.exports = {
  countCats,
};
