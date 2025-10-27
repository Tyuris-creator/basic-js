const { NotImplementedError } = require("../lib");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // Remove line below and write your code here
  const reversed = domains.map((el) => el.split(".").reverse());
  console.log(reversed);
  const keys = reversed.map((_, curInd, arr) => {
    const keysArr = [];
    let key = ".";
    const current = arr[curInd];
    console.log(current);
    for (let i = 0; i < current.length; i += 1) {
      key += current[i];
      key += ".";
      keysArr.push(
        key
          .split("")
          .splice(0, key.length - 1)
          .join("")
      );
    }
    return keysArr;
  });
  return keys.reduce((acc, el) => {
    for (const stat of el) {
      acc[stat] = (acc[stat] || 0) + 1;
    }
    return acc;
  }, {});
}

module.exports = {
  getDNSStats,
};
