const { NotImplementedError } = require("../lib");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  // Remove line below and write your code here
  if (!Array.isArray(members)) {
    return false;
  }
  const filtered = members.filter((el) => typeof el === "string");
  const firstLetters = filtered.map((el) => {
    const firstName = el.trim().toUpperCase();
    return firstName[0];
  });
  return firstLetters.sort().join("");
}

module.exports = {
  createDreamTeam,
};
