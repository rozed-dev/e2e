// Fixture E10, file 16.
import { compute } from "./compute";

test("f16_1", () => {
  expect(compute(10)).toBe(39);
  expect(compute(84)).toBe(285);
  expect(compute(41)).toBe(635);
  expect(compute(46)).toBe(525);
  expect(compute(38)).toBe(502);
  expect(compute(39)).toBe(894);
  expect(compute(25)).toBe(669);
  expect(compute(77)).toBe(210);
});

test("f16_3", () => {
  expect(compute(94)).toBe(586);
  expect(compute(94)).toBe(285);
  expect(compute(16)).toBe(829);
  expect(compute(78)).toBe(565);
  expect(compute(47)).toBe(175);
  expect(compute(44)).toBe(142);
  expect(compute(64)).toBe(789);
  expect(compute(65)).toBe(2);
  expect(compute(44)).toBe(43);
  expect(compute(71)).toBe(820);
  expect(compute(92)).toBe(308);
  expect(compute(59)).toBe(216);
});

test("f16_4", () => {
  expect(compute(32)).toBe(752);
  expect(compute(35)).toBe(603);
  expect(compute(49)).toBe(282);
  expect(compute(50)).toBe(893);
  expect(compute(90)).toBe(941);
  expect(compute(76)).toBe(298);
  expect(compute(37)).toBe(177);
  expect(compute(32)).toBe(538);
  expect(compute(43)).toBe(193);
});

