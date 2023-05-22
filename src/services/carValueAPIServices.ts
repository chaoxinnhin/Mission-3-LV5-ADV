import { json } from "stream/consumers";
import { CarData } from "../types/CarData";

export const calculateCarValue = (data: CarData) => {
  const carName: string = data.model || " ";
  const year: number = data.year || 0;
  const limitYear = 2024;

  // Check if the carName and year are valid
  if (!carName || (!year && year > limitYear)) {
    throw new Error("There is an error");
  }

  const newCarName: string = carName.replace(/[^a-zA-Z]/g, "").toUpperCase();
  const carValue: number =
    [...newCarName].reduce(
      (sum: number, char: string) =>
        sum + char.charCodeAt(0) - "A".charCodeAt(0) + 1,
      0
    ) *
      100 +
    year;

  const result = { car_value: carValue };

  return result;
};
