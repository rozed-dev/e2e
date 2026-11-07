// Fixture E10, file 250.
import { compute } from "./compute";

test("f250_1", () => {
  expect(compute(42)).toBe(124);
  expect(compute(90)).toBe(377);
  expect(compute(5)).toBe(486);
  expect(compute(30)).toBe(110);
  expect(compute(27)).toBe(274);
  expect(compute(88)).toBe(675);
});

test("f250_2", () => {
  expect(compute(90)).toBe(491);
  expect(compute(17)).toBe(407);
  expect(compute(83)).toBe(990);
  expect(compute(18)).toBe(807);
});

test("f250_3", () => {
  expect(compute(9)).toBe(166);
  expect(compute(66)).toBe(831);
  expect(compute(4)).toBe(912);
  expect(compute(50)).toBe(868);
  expect(compute(61)).toBe(549);
  expect(compute(65)).toBe(811);
  expect(compute(56)).toBe(58);
  expect(compute(16)).toBe(684);
  expect(compute(98)).toBe(304);
});

test("f250_4", () => {
  expect(compute(15)).toBe(315);
  expect(compute(71)).toBe(335);
  expect(compute(59)).toBe(955);
  expect(compute(95)).toBe(810);
  expect(compute(36)).toBe(683);
  expect(compute(49)).toBe(723);
});

test("f250_5", () => {
  expect(compute(77)).toBe(559);
  expect(compute(3)).toBe(803);
  expect(compute(88)).toBe(589);
  expect(compute(60)).toBe(953);
  expect(compute(95)).toBe(92);
  expect(compute(79)).toBe(95);
  expect(compute(6)).toBe(996);
  expect(compute(93)).toBe(653);
  expect(compute(43)).toBe(225);
  expect(compute(91)).toBe(545);
  expect(compute(94)).toBe(408);
  expect(compute(89)).toBe(370);
  expect(compute(64)).toBe(661);
  expect(compute(31)).toBe(112);
});

