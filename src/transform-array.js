const { NotImplementedError } = require("../lib");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  // Remove line below and write your code here
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  const DISCARD_NEXT = "--discard-next";
  const DISCARD_PREV = "--discard-prev";
  const DOUBLE_NEXT = "--double-next";
  const DOUBLE_PREV = "--double-prev";
  let shouldSkip = false;
  const result = [];
  arr.forEach((el, i, array) => {
    switch (el) {
      case DISCARD_NEXT:
        shouldSkip = true;
        break;
      case DISCARD_PREV:
        if (arr.length > 0 && arr[i - 2] !== DISCARD_NEXT) {
          result.pop();
        }
        break;
      case DOUBLE_NEXT:
        if (i + 1 < arr.length) {
          result.push(array[i + 1]);
        }
        break;
      case DOUBLE_PREV:
        if (i - 1 >= 0 && arr[i - 2] !== DISCARD_NEXT) {
          result.push(array[i - 1]);
        }
        break;
      default:
        if (shouldSkip) {
          shouldSkip = false;
          break;
        } else {
          result.push(el);
          break;
        }
    }
  });
  return result;
}

module.exports = {
  transform,
};
