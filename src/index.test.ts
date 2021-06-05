import { FizzBuzz } from "./index";

describe("a test suite", () => {
  const fizzBuzz = new FizzBuzz();

  it("should fail", () => {
    expect(fizzBuzz.returnValue(1)).toBe("1");
  });

  it("should fail", () => {
    expect(fizzBuzz.returnValue(3)).toBe("Fizz")
  })

  it("should fail", () => {
    expect(fizzBuzz.returnValue(5)).toBe("Buzz")
  })

  it("should fail", () => {
    expect(fizzBuzz.returnValue(15)).toBe("FizzBuzz")
  })
});
