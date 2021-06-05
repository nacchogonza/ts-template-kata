class FizzBuzz {
  constructor() {}

  returnValue(value: number): any {
    if (value % 3 !== 0 && value % 5 !== 0) {
      return value;
    } else {
      return null;
    }
  }
}

export { FizzBuzz };
