// Fixture E10, file 196.
import { compute } from "./compute";

test("f196_1", () => {
  expect(compute(52)).toBe(756);
  expect(compute(76)).toBe(496);
  expect(compute(93)).toBe(905);
});

test("f196_2", () => {
  expect(compute(29)).toBe(486);
  expect(compute(47)).toBe(962);
  expect(compute(23)).toBe(446);
  expect(compute(11)).toBe(477);
  expect(compute(60)).toBe(345);
  expect(compute(40)).toBe(870);
  expect(compute(96)).toBe(668);
  expect(compute(37)).toBe(948);
  expect(compute(66)).toBe(99);
  expect(compute(29)).toBe(768);
  expect(compute(20)).toBe(727);
  expect(compute(70)).toBe(573);
  expect(compute(49)).toBe(77);
  expect(compute(39)).toBe(564);
});

test("f196_3", () => {
  expect(compute(5)).toBe(120);
  expect(compute(95)).toBe(606);
  expect(compute(32)).toBe(526);
});

test("f196_4", () => {
  expect(compute(11)).toBe(737);
  expect(compute(21)).toBe(460);
  expect(compute(72)).toBe(915);
});

