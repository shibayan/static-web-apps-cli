import { swaCLIEnv } from "./env.js";

describe("swaCLIEnv()", () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    vi.resetModules();
    process.env = {};
  });

  afterAll(() => {
    process.env = OLD_ENV;
  });

  it(`should return an object`, () => {
    process.env = {};
    expect(swaCLIEnv()).toBeInstanceOf(Object);
  });

  it(`should return an object with the correct keys`, () => {
    const env = {
      SWA_CLI_DEBUG: "log",
    };
    process.env = env;
    expect(Object.keys(swaCLIEnv(env))).toEqual(["SWA_CLI_DEBUG"]);
  });
});
