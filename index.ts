import express, { Express, Request, Response } from "express";
import config from "./config";
import connectDB from "./config/db";

connectDB();
const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Servers");
});

app.listen(config.PORT, () => {
  console.log(
    `⚡️[server]: Server is running at http://localhost:${config.PORT}`
  );
});
