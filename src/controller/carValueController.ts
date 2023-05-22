import * as carValueAPI from "../services/carValueAPIServices";
import { CarData } from "../types/CarData";
import { Request, Response } from "express";

export const calculateCarValue = (request: Request, response: Response) => {
  const { model, year, car_value }: CarData = request.body;

  const inputs: CarData = { model, year, car_value };

  const value = carValueAPI.calculateCarValue(inputs);
  response.send(value);
};
