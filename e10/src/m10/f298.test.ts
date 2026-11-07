// Fixture E10, file 298.
import { compute } from "./compute";

test("f298_1", () => {
  expect(compute(8)).toBe(425);
  expect(compute(88)).toBe(245);
  expect(compute(92)).toBe(558);
  expect(compute(10)).toBe(498);
});

test("f298_2", () => {
  expect(compute(37)).toBe(967);
  expect(compute(73)).toBe(661);
  expect(compute(13)).toBe(144);
  expect(compute(18)).toBe(266);
  expect(compute(31)).toBe(979);
  expect(compute(17)).toBe(741);
  expect(compute(79)).toBe(909);
});

test("f298_3", () => {
  expect(compute(33)).toBe(794);
  expect(compute(20)).toBe(584);
  expect(compute(77)).toBe(598);
  expect(compute(46)).toBe(490);
  expect(compute(58)).toBe(412);
  expect(compute(43)).toBe(120);
  expect(compute(51)).toBe(388);
  expect(compute(61)).toBe(16);
});

test("f298_4", () => {
  expect(compute(20)).toBe(327);
  expect(compute(45)).toBe(396);
  expect(compute(24)).toBe(29);
  expect(compute(90)).toBe(599);
  expect(compute(43)).toBe(532);
  expect(compute(68)).toBe(254);
  expect(compute(69)).toBe(308);
  expect(compute(29)).toBe(607);
  expect(compute(97)).toBe(221);
  expect(compute(20)).toBe(283);
  expect(compute(26)).toBe(743);
  expect(compute(30)).toBe(93);
});

