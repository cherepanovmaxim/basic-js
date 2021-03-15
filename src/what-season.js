const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date === null || date === undefined) {
    return "Unable to determine the time of year!";
  }

  let result;
  const month = date.getMonth();

  if (date.getYear() % 4 == 0 && date.getMonth() == 1 && date.getDate() >= 30) {
    throw Error();
  }
  switch (month) {
    case 0:
    case 1:
    case 11:
      result = "winter";
      break;
    case 8:
    case 9:
      result = "autumn";
      break;
    case 10:
      result = "autumn/fall";
      break;

    case 2:
    case 3:
    case 4:
      result = "spring";
      break;

    case 5:
    case 6:
    case 7:
      result = "summer";
      break;

    default:
      result = "Unable to determine the time of year!";
      break;
  }

  return result;
};
