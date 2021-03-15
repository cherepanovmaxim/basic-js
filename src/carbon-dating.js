
const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (
    typeof sampleActivity == "string" &&
    isNaN(sampleActivity) === false &&
    parseInt(sampleActivity) > 0 &&
    parseInt(sampleActivity) < 2021
  ) {
    return Math.ceil(
      (Math.log(MODERN_ACTIVITY / parseInt(sampleActivity)) *
        HALF_LIFE_PERIOD) /
        Math.LN2
    );
  } else {
    return false;
  }
};
