// Fixture E10, file 16.
import { compute } from "./compute";

test("f16_1", () => {
  expect(compute(10)).toBe(39);
  expect(compute(84)).toBe(285);
  expect(compute(41)).toBe(635);
  expect(compute(22)).toBe(961);
  expect(compute(68)).toBe(750);
  expect(compute(77)).toBe(210);
});

test("f16_2", () => {
  expect(compute(17)).toBe(940);
  expect(compute(96)).toBe(256);
  expect(compute(81)).toBe(823);
  expect(compute(11)).toBe(989);
  expect(compute(83)).toBe(951);
  expect(compute(45)).toBe(557);
  expect(compute(7)).toBe(111);
});

test("f16_3", () => {
  expect(compute(67)).toBe(824);
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
  expect(compute(30)).toBe(98);
  expect(compute(72)).toBe(116);
  expect(compute(4)).toBe(446);
  expect(compute(32)).toBe(538);
  expect(compute(43)).toBe(193);
});

test("f16_5", () => {
  expect(compute(36)).toBe(209);
  expect(compute(8)).toBe(322);
  expect(compute(42)).toBe(395);
  expect(compute(25)).toBe(873);
  expect(compute(73)).toBe(109);
  expect(compute(76)).toBe(948);
  expect(compute(43)).toBe(351);
  expect(compute(28)).toBe(812);
  expect(compute(85)).toBe(100);
  expect(compute(91)).toBe(504);
  expect(compute(47)).toBe(616);
  expect(compute(92)).toBe(696);
});

