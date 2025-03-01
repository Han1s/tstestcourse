// preserves all other functions but mocks calculateComplexity;
jest.mock("../../app/doubles/OtherUtils.ts", () => ({
  ...jest.requireActual("../../app/doubles/OtherUtils.ts"),
  calculateComplexity: () => 10,
}));

// mock uui module
jest.mock("uuid", () => ({
  v4: () => "123",
}));

import * as OtherUtils from "../../app/doubles/OtherUtils";

describe("module tests", () => {
  test("calculate complexity", () => {
    const result = OtherUtils.calculateComplexity({} as any);
    expect(result).toBe(10);
  });

  test("keep other functions", () => {
    const result = OtherUtils.toUpperCase("abc");
    expect(result).toBe("ABC");
  });

  test("string with id", () => {
    const result = OtherUtils.toLowerCaseWithId("ABC");
    expect(result).toBe("abc123");
  });
});
