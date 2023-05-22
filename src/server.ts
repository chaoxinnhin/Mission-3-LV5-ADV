import express from "express";
import env from "dotenv";
import { calculateCarValue } from "./controller/carValueController";

env.config();

const server = express();
server.use(express.json());

server.use("/api/car_value", calculateCarValue);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`The server is started on port ${PORT}`);
});
