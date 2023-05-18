import express from "express";
import env from "dotenv";
import * as carValueAPI from "./carValueAPI";
import { Request, Response } from "express";

let carInfo = {
  model: " ",
  year:0 ,
  car_value: 0,
};

env.config();

const server = express();
server.use(express.json());

server.use("/api/car_value", (req: Request, res: Response) => {
  const value = carValueAPI.calculateCarValue(carInfo);
  res.send(value);
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`The server is started on port ${PORT}`);
});
