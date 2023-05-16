import { json } from "stream/consumers";

interface CarData {
  model: string;
  year: number;
  car_value: number;
}

export const calculateCarValue = (data: CarData) => {
  const carName: string = data.model || " ";
  const year: number = data.year || 0;

  // Check if the carName and year are valid
  if (!carName || !year) {
    throw new Error("There is an error");
  }

  const formattedCarName: string = carName
    .replace(/[^a-zA-Z]/g, "")
    .toUpperCase();
  const carValue: number =
    [...formattedCarName].reduce(
      (sum: number, char: string) =>
        sum + char.charCodeAt(0) - "A".charCodeAt(0) + 1,
      0
    ) *
      100 +
    year;

  return Math.round(carValue);
};
