var express = require("express");

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
module.exports = convertNum;
