import { toUpperCase } from "../app/Utils";

describe("Utils test suite", () => {
  test("it should return uppercase of valid string", () => {
    // arrange:
    const sut = toUpperCase; // convention
    const expected = "ABC";

    // act
    const actual = toUpperCase("abc");

    // assert
    expect(actual).toBe(expected);
  });
});
