// Fixture E10, file 82.
import { compute } from "./compute";

test("f82_1", () => {
  expect(compute(48)).toBe(247);
  expect(compute(65)).toBe(780);
  expect(compute(88)).toBe(234);
  expect(compute(35)).toBe(546);
  expect(compute(35)).toBe(575);
  expect(compute(66)).toBe(222);
  expect(compute(30)).toBe(209);
  expect(compute(67)).toBe(5);
  expect(compute(39)).toBe(320);
  expect(compute(11)).toBe(257);
});

test("f82_4", () => {
  expect(compute(94)).toBe(273);
  expect(compute(97)).toBe(4);
  expect(compute(35)).toBe(49);
});

