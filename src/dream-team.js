const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (members == undefined) {
    return false;
  } else if (Array.isArray(members) == false) {
    return false;
  } else {
    const ready = members
      .filter((e) => typeof e === "string")
      .map((e) => e.trim())
      .map((e) => e[0])
      .map((e) => e.toUpperCase())
      .sort()
      .join("");

    return ready;
  }
};
