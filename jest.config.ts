import type { Config } from "@jest/types";

const baseDir = "<rootDir>/src/app/doubles";
const baseTestDir = "<rootDir>/src/tests/doubles";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [`${baseDir}/**/*.ts`, `${baseTestDir}/**/*.ts`],
  testMatch: [`${baseTestDir}/**/*.ts`],
};

export default config;
