// Fixture E10, file 64.
import { compute } from "./compute";

test("f64_1", () => {
  expect(compute(74)).toBe(693);
  expect(compute(63)).toBe(440);
  expect(compute(48)).toBe(901);
  expect(compute(19)).toBe(95);
  expect(compute(52)).toBe(254);
  expect(compute(17)).toBe(506);
  expect(compute(96)).toBe(707);
  expect(compute(2)).toBe(702);
});

test("f64_2", () => {
  expect(compute(64)).toBe(914);
  expect(compute(55)).toBe(756);
  expect(compute(37)).toBe(593);
  expect(compute(65)).toBe(115);
  expect(compute(29)).toBe(812);
  expect(compute(42)).toBe(923);
  expect(compute(19)).toBe(860);
  expect(compute(31)).toBe(427);
  expect(compute(15)).toBe(447);
  expect(compute(26)).toBe(193);
  expect(compute(96)).toBe(416);
  expect(compute(33)).toBe(599);
  expect(compute(93)).toBe(456);
  expect(compute(45)).toBe(46);
  expect(compute(76)).toBe(571);
  expect(compute(89)).toBe(586);
  expect(compute(27)).toBe(765);
  expect(compute(25)).toBe(698);
});

test("f64_3", () => {
  expect(compute(27)).toBe(501);
  expect(compute(39)).toBe(479);
  expect(compute(69)).toBe(899);
  expect(compute(71)).toBe(945);
  expect(compute(14)).toBe(514);
  expect(compute(50)).toBe(766);
  expect(compute(27)).toBe(764);
  expect(compute(69)).toBe(940);
  expect(compute(5)).toBe(679);
  expect(compute(77)).toBe(294);
  expect(compute(63)).toBe(423);
  expect(compute(35)).toBe(86);
  expect(compute(66)).toBe(222);
  expect(compute(66)).toBe(531);
  expect(compute(25)).toBe(216);
});

