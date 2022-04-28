const fizzuzz = require("./fizzbuzz");

describe("fizzbuzz", () => {
  test("should give an error", () => {
    let expected = "num is not a number";
    let result = fizzuzz("1");
    expect(expected).toBe(result);
  });
  //input 1
  test("should print 1 if input is 1", () => {
    let expected = 1;
    let result = fizzuzz(1);
    expect(expected).toBe(result);
  });
  //input 3
  test("should print fizz if input 3", () => {
    let expected = "fizz";
    let result = fizzuzz(3);
    expect(expected).toBe(result);
  });

  //mutiple of 3
  test("should print fizz if input is multiple of 6", () => {
    let expected = "fizz";
    let result = fizzuzz(6);
    expect(expected).toBe(result);
  });

  //mutiple of 5
  test("should print buzz if input is 5", () => {
    let expected = "buzz";
    let result = fizzuzz(5);
    expect(expected).toBe(result);
  });

  //mutiple of 5
  test("should print buzz if input is multiple of 5", () => {
    let expected = "buzz";
    let result = fizzuzz(10);
    expect(expected).toBe(result);
  });

  //multiple of 3 and 5
  //mutiple of 5
  test("should print fizzbuzz if input is multiple of 3 & 5", () => {
    let expected = "fizzbuzz";
    let result = fizzuzz(15);
    expect(expected).toBe(result);
  });
});
