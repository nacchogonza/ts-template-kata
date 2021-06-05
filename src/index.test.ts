import { FizzBuzz } from "./index";

describe("a test suite", () => {
  const fizzBuzz = new FizzBuzz();
  it("should fail", () => {
    expect(fizzBuzz.returnValue(1)).toBe(1);
  });
});
