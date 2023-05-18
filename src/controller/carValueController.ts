import * as carValueAPI from "../carValueAPI";
import { CarData } from "../types/CarData";
import { Request, Response } from "express";

let carInfo = {
  model: " ",
  year: 0,
  car_value: 0,
};

export const calculateCarValue = (request: Request, response: Response) => {
  const value = carValueAPI.calculateCarValue(carInfo);
  response.send(value);
};
