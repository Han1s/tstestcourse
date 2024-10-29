import { getStringInfo, StringUtils, toUpperCase } from "../app/Utils";

xdescribe("Utils test suite", () => {
  describe("StringUtils tests", () => {
    let sut: StringUtils;

    beforeEach(() => {
      sut = new StringUtils();
      console.log("Setup");
    });

    afterEach(() => {
      // clearing mocks
      console.log("Teardown");
    });

    it("Should return correct upperCase", () => {
      const actual = sut.toUpperCase("abc");

      expect(actual).toBe("ABC");
    });

    it("Should throw error on invalid argument - function", () => {
      expect(() => {
        sut.toUpperCase("");
      }).toThrow("Invalid argument!");
    });

    // does not work
    // it.only("Should throw error on invalid argument - try catch block", (done) => {
    //   try {
    //     sut.toUpperCase("");
    //     done("GetStringInfo should throw error for invalid arg!");
    //   } catch (error) {
    //     expect(error).toBeInstanceOf(Error);
    //     expect(error).toHaveProperty("message", "Invalid argument!");
    //     done();
    //   }
    // });
  });

  it("should return uppercase of valid string", () => {
    // arrange:
    const sut = toUpperCase; // convention
    const expected = "ABC";

    // act
    const actual = toUpperCase("abc");

    // assert
    expect(actual).toBe(expected);
  });

  describe("ToUpperCase examples", () => {
    it.each([
      { input: "abc", expected: "ABC" },
      { input: "My-String", expected: "MY-STRING" },
      { input: "def", expected: "DEF" },
    ])("$input toUpperCase should be $expected", ({ input, expected }) => {
      const actual = toUpperCase(input);
      expect(actual).toBe(expected);
    });
  });

  describe("getStringInfo for arg My-String should", () => {
    test("return right length", () => {
      const actual = getStringInfo("My-String");
      expect(actual.characters).toHaveLength(9);
    });
    test("return right lower case", () => {
      const actual = getStringInfo("My-String");
      expect(actual.lowerCase).toBe("my-string");
    });
    test("return right upper case", () => {
      const actual = getStringInfo("My-String");
      expect(actual.upperCase).toBe("MY-STRING");
    });
    test("return right characters", () => {
      const actual = getStringInfo("My-String");
      expect(actual.characters).toContain("M");
    });
    test("return defined extra info", () => {
      const actual = getStringInfo("My-String");
      expect(actual.extraInfo).not.toBe(undefined);
    });
  });
});
