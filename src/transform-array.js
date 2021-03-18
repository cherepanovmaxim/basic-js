const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  } else if (arr.length === 0) {
    return [];
  }

  let newArr = [];
  let discard = false;
  let double = false;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "string" && arr[i].includes("--")) {
      discard = arr[i].includes("discard");
      double = arr[i].includes("double");

      if (arr[i].includes("next") && i + 1 < arr.length) {
        discard ? i++ : newArr.push(arr[i + 1]);
      } else if (arr[i].includes("prev") && i > 0) {
        discard ? newArr.pop() : newArr.push(newArr[newArr.length - 1]);
      }
    } else if (arr[i] !== undefined) newArr.push(arr[i]);
    // if (arr[i] == "--discard-next") {
    //   i++;
    // } else if (arr[i] == "--discard-prev") {
    //   newArr.pop();
    // } else if (arr[i] == "--double-next") {
    //   if (
    //     arr[i + 1] !== "--discard-next" &&
    //     arr[i + 1] !== "--discard-prev" &&
    //     arr[i + 1] !== "--double-next" &&
    //     arr[i + 1] !== "--double-prev"
    //   ) {
    //     newArr.push(arr[i + 1]);
    //   }
    // } else if (arr[i] == "--double-prev") {
    //   if (
    //     arr[i + 1] !== "--discard-next" &&
    //     arr[i + 1] !== "--discard-prev" &&
    //     arr[i + 1] !== "--double-next" &&
    //     arr[i + 1] !== "--double-prev"
    //   ) {
    //     newArr.push(arr[i - 1]);
    //   }
    // } else {
    //   newArr.push(arr[i]);
    // }
  }

  return newArr;
};
