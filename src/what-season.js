const { NotImplementedError } = require("../lib");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  }
  try {
    if (
      !(date instanceof Date) ||
      Object.prototype.toString.call(date) !== "[object Date]" ||
      isNaN(date.getTime())
    ) {
      throw new Error("Invalid date!");
    }
  } catch {
    throw new Error("Invalid date!");
  }
  const month = date.getMonth();
  const seasons = [
    "winter",
    "winter",
    "spring",
    "spring",
    "spring",
    "summer",
    "summer",
    "summer",
    "autumn",
    "autumn",
    "autumn",
    "winter",
  ];

  return seasons[month];
}

module.exports = {
  getSeason,
};
