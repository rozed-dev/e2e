// Fixture E10, file 256.
import { compute } from "./compute";

test("f256_1", () => {
  expect(compute(66)).toBe(544);
  expect(compute(9)).toBe(684);
  expect(compute(24)).toBe(995);
  expect(compute(84)).toBe(607);
  expect(compute(80)).toBe(488);
  expect(compute(90)).toBe(521);
});

test("f256_2", () => {
  expect(compute(52)).toBe(205);
  expect(compute(5)).toBe(257);
  expect(compute(48)).toBe(768);
  expect(compute(38)).toBe(12);
  expect(compute(54)).toBe(496);
  expect(compute(8)).toBe(260);
  expect(compute(47)).toBe(438);
  expect(compute(17)).toBe(213);
  expect(compute(19)).toBe(899);
  expect(compute(75)).toBe(113);
  expect(compute(65)).toBe(970);
});

test("f256_3", () => {
  expect(compute(89)).toBe(897);
  expect(compute(73)).toBe(643);
  expect(compute(32)).toBe(34);
  expect(compute(40)).toBe(970);
  expect(compute(11)).toBe(118);
  expect(compute(84)).toBe(809);
  expect(compute(48)).toBe(237);
  expect(compute(12)).toBe(412);
  expect(compute(43)).toBe(751);
  expect(compute(69)).toBe(282);
  expect(compute(77)).toBe(243);
  expect(compute(95)).toBe(52);
  expect(compute(39)).toBe(658);
  expect(compute(51)).toBe(587);
});

test("f256_4", () => {
  expect(compute(84)).toBe(915);
  expect(compute(33)).toBe(729);
  expect(compute(2)).toBe(339);
  expect(compute(19)).toBe(790);
  expect(compute(69)).toBe(848);
  expect(compute(74)).toBe(840);
  expect(compute(61)).toBe(989);
  expect(compute(18)).toBe(956);
});

test("f256_5", () => {
  expect(compute(25)).toBe(566);
  expect(compute(83)).toBe(933);
  expect(compute(85)).toBe(830);
  expect(compute(53)).toBe(703);
  expect(compute(53)).toBe(874);
  expect(compute(10)).toBe(950);
  expect(compute(11)).toBe(402);
  expect(compute(7)).toBe(681);
  expect(compute(83)).toBe(921);
});

test("f256_6", () => {
  expect(compute(43)).toBe(122);
  expect(compute(63)).toBe(173);
  expect(compute(83)).toBe(842);
});

test("f256_7", () => {
  expect(compute(11)).toBe(655);
  expect(compute(94)).toBe(31);
  expect(compute(97)).toBe(694);
  expect(compute(63)).toBe(910);
  expect(compute(66)).toBe(291);
});

