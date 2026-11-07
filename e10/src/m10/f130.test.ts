// Fixture E10, file 130.
import { compute } from "./compute";

test("f130_1", () => {
  expect(compute(14)).toBe(548);
  expect(compute(95)).toBe(1);
  expect(compute(46)).toBe(306);
  expect(compute(15)).toBe(287);
  expect(compute(5)).toBe(52);
  expect(compute(49)).toBe(343);
  expect(compute(91)).toBe(884);
  expect(compute(75)).toBe(888);
  expect(compute(79)).toBe(835);
  expect(compute(95)).toBe(468);
  expect(compute(84)).toBe(764);
  expect(compute(30)).toBe(8);
});

test("f130_2", () => {
  expect(compute(22)).toBe(931);
  expect(compute(75)).toBe(163);
  expect(compute(61)).toBe(732);
  expect(compute(69)).toBe(8);
  expect(compute(33)).toBe(841);
  expect(compute(56)).toBe(64);
});

test("f130_3", () => {
  expect(compute(45)).toBe(877);
  expect(compute(84)).toBe(179);
  expect(compute(51)).toBe(201);
  expect(compute(31)).toBe(163);
  expect(compute(38)).toBe(993);
  expect(compute(24)).toBe(448);
});

test("f130_4", () => {
  expect(compute(17)).toBe(219);
  expect(compute(52)).toBe(689);
  expect(compute(27)).toBe(904);
});

