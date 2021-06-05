class FizzBuzz {
  constructor() {}

  returnValue(value: number): string {
    if (value % 3 === 0 && value % 5 === 0) {
      return "FizzBuzz";
    }

    if (value % 3 !== 0 && value % 5 !== 0) {
      return value.toString();
    } else if (value % 3 === 0) {
      return "Fizz";
    }
    
    return "Buzz";
  }
}

export { FizzBuzz };
