// Fixture E10, file 64.
import { compute } from "./compute";

test("f64_1", () => {
  expect(compute(73)).toBe(340);
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
  expect(compute(33)).toBe(599);
  expect(compute(20)).toBe(244);
  expect(compute(89)).toBe(586);
  expect(compute(27)).toBe(765);
  expect(compute(25)).toBe(698);
});

test("f64_3", () => {
  expect(compute(27)).toBe(501);
  expect(compute(39)).toBe(479);
  expect(compute(69)).toBe(899);
  expect(compute(20)).toBe(209);
  expect(compute(71)).toBe(67);
  expect(compute(5)).toBe(679);
  expect(compute(77)).toBe(294);
  expect(compute(63)).toBe(423);
  expect(compute(35)).toBe(86);
  expect(compute(66)).toBe(222);
  expect(compute(66)).toBe(531);
  expect(compute(25)).toBe(216);
});

test("f64_4", () => {
  expect(compute(66)).toBe(355);
  expect(compute(42)).toBe(864);
  expect(compute(68)).toBe(232);
  expect(compute(26)).toBe(557);
  expect(compute(38)).toBe(583);
  expect(compute(58)).toBe(869);
});

