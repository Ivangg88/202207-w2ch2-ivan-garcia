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

  describe("When it´s called and it receive NaN and NaN", () => {
    test("Then it´s should return false", () => {
      const value1 = NaN;
      const value2 = NaN;
      const expectedResult = false;

      const receivedResult = strictEquals(value1, value2);

      expect(receivedResult).toBe(receivedResult);
    });
  });

  describe("When it´s called and it receive 0 and -0", () => {
    test("Then it´s should return true", () => {
      const value1 = 0;
      const value2 = -0;
      const expectedResult = true;

      const receivedResult = strictEquals(value1, value2);

      expect(receivedResult).toBe(receivedResult);
    });
  });

  describe("When it´s called and it receive -0 and 0", () => {
    test("Then it´s should return true", () => {
      const value1 = -0;
      const value2 = 0;
      const expectedResult = true;

      const receivedResult = strictEquals(value1, value2);

      expect(receivedResult).toBe(receivedResult);
    });
  });

  describe('When it´s called and it receive 1 and "1"', () => {
    test("Then it´s should return false", () => {
      const value1 = 1;
      const value2 = "1";
      const expectedResult = false;

      const receivedResult = strictEquals(value1, value2);

      expect(receivedResult).toBe(receivedResult);
    });
  });

  describe("When it´s called and it receive true and false", () => {
    test("Then it´s should return false", () => {
      const value1 = true;
      const value2 = false;
      const expectedResult = false;

      const receivedResult = strictEquals(value1, value2);

      expect(receivedResult).toBe(receivedResult);
    });
  });

  describe("When it´s called and it receive false and false", () => {
    test("Then it´s should return true", () => {
      const value1 = false;
      const value2 = false;
      const expectedResult = false;

      const receivedResult = strictEquals(value1, value2);

      expect(receivedResult).toBe(receivedResult);
    });
  });

  describe("When it´s called and it receive \nWater\n and \nOil\n", () => {
    test("Then it´s should return false", () => {
      const value1 = "Water";
      const value2 = "Oil";
      const expectedResult = false;

      const receivedResult = strictEquals(value1, value2);

      expect(receivedResult).toBe(receivedResult);
    });
  });
});
