const convertNum = require("./convert");
const convert = require("./convert");
const toRoman = require("./convert");

test("I = 1", () => {
  expect(convertNum("II")).toBe(2);
  expect(convertNum("III")).toBe(3);
  expect(convertNum("IV")).toBe(4);
  expect(convertNum("X")).toBe(10);
  expect(convertNum("CXV")).toBe(115);
  expect(convertNum("CCCXXVII")).toBe(327);
  expect(convertNum("MXI")).toBe(1011);
  expect(convertNum("MMXXI")).toBe(2021);
});

test('1 = "I', () => {
  expect(toRoman(1)).toBe("I");
});
