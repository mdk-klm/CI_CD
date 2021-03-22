//test ci

const values = new Map([
  ["I", 1],
  ["II", 2],
  ["II", 3],
  ["IV", 4],
  ["V", 5],
  ["X", 10],
  ["C", 100],
  ["M", 1000],
]);

function convertNum(string) {
  let result = 0,
    current,
    previous = 0;
  for (const char of string.split("").reverse()) {
    current = values.get(char);
    if (current >= previous) {
      result += current;
    } else {
      result -= current;
    }
    previous = current;
  }
  return result;
}

var arabic = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
  roman = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ],
  arabicLength = arabic.length;

// nombre arabe to nombre romain

function toRoman(nombre) {
  var x = parseInt(nombre, 10) || 1,
    string = "";

  if (x < 1) {
    x = 1;
  }

  for (var i = 0; i < arabicLength; ++i) {
    while (x >= arabic[i]) {
      x -= arabic[i];
      string += roman[i];
    }

    if (x == 0) {
      break;
    }
  }

  return string;
}

module.exports = convertNum;
module.exports = toRoman;
