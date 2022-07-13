import strictEquals from "./strictEquals";

describe("Give a function comparative function", () => {
  describe("When it´s called and it receive 1 and 1", () => {
    test("Then it´s should return true", () => {
      const value1 = 1;
      const value2 = 1;
      const expectedResult = true;

      const receivedResult = strictEquals(value1, value2);

      expect(receivedResult).toBe(receivedResult);
    });
  });
});
