const convert= require('./convert');

test('I = 1',() => {
  expect(convert("I")).toBe(1);
  expect(convert("II")).toBe(2);
  expect(convert("III")).toBe(3);
  expect(convert("IV")).toBe(4);
  expect(convert("X")).toBe(10);
  expect(convert("CXV")).toBe(115);
  expect(convert("CCCXXVII")).toBe(327);
  expect(convert("MXI")).toBe(1011);
  expect(convert("MMXXI")).toBe(2021);
});