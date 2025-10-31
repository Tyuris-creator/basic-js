const { NotImplementedError } = require("../lib");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let sum = 1;
    if (arr.length === 0) {
      return sum;
    }
    for (const el of arr) {
      if (Array.isArray(el)) {
        const depth = 1 + this.calculateDepth(el);
        if (depth > sum) {
          sum = depth;
        }
      }
    }
    return sum;
  }
}

module.exports = {
  depthCalculator: new DepthCalculator(),
};
