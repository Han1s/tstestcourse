import { getStringInfo, toUpperCase } from "../app/Utils";

describe("Utils test suite", () => {
  it("should return uppercase of valid string", () => {
    // arrange:
    const sut = toUpperCase; // convention
    const expected = "ABC";

    // act
    const actual = toUpperCase("abc");

    // assert
    expect(actual).toBe(expected);
  });

  it.only("should return info for valid string", () => {
    const actual = getStringInfo("My-String");

    expect(actual.lowerCase).toBe("my-string");
    expect(actual.extraInfo).toEqual({});

    expect(actual.characters).toHaveLength(9);
    expect(actual.characters).toContain('M');

    expect(actual.extraInfo).not.toBe(undefined);
  });
});
