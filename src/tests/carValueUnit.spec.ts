import { calculateCarValue } from "../services/carValueAPIServices";
import { CarData } from "../types/CarData";

// Unit test 1
describe("Ferrari car info", () => {
  test("Ferrari car value should be a sunny day at the beach ", () => {
    // Arrange
    const request = null;
    const response = null;

    const input = {
      model: "Ferrari",
      year: 2014,
      car_value: 0,
    };
    const expected = {
      car_value: 9514,
    };

    // Act
    const actual = calculateCarValue(input);

    // Assert
    expect(actual).toEqual(expected);
  });
});

describe("Accepted letters only", () => {
  test(" Like a draft, only accepts letters in the string ", () => {
    // Arrange
    const input = {
      model: "Bt-50D",
      year: 2010,
      car_value: 0,
    };
    const expected = {
      car_value: 4610,
    };

    // Act
    const actual = calculateCarValue(input);

    // Assert
    expect(actual).toEqual(expected);
  });
});

describe("Numbers are OK", () => {
  test(" Numbers only are ok ", () => {
    // Arrange
    const input = {
      model: "308",
      year: 2015,
      car_value: 0,
    };
    const expected = {
      car_value: 2015,
    };

    // Act
    const actual = calculateCarValue(input);

    // Assert
    expect(actual).toEqual(expected);
  });
});

describe("Throw an error", () => {
  test(" Many many years ago... ", () => {
    // Arrange
    const input = {
      model: "Dragon",
      year: 2001234,
      car_value: 0,
    };

    // Assert
    expect(() => calculateCarValue(input)), "to throw";
  });
});

describe("Old Camry", () => {
  test(" Crazy expensive, but old is gold ", () => {
    // Arrange
    const input = {
      model: "Camry",
      year: 1983,
      car_value: 0,
    };
    const expected = {
      car_value: 7983,
    };

    // Act
    const actual = calculateCarValue(input);

    // Assert
    expect(actual).toEqual(expected);
  });
});
