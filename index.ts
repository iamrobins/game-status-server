import express, { Express, Request, Response } from "express";
import config from "./config";
import cors from "cors";
import connectDB from "./config/db";

// Routes
import auth from "./routes/auth";
import user from "./routes/user";

import games from "./routes/normal/games";
import comments from "./routes/normal/comments";
import chats from "./routes/normal/chats";

import gamesAdmin from "./routes/admin/games";
import morgan from "morgan";
// import os from "os";

connectDB();
const app: Express = express(); // include before  other routes
app.use(cors());
app.use(express.json());
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);
// app.use((req, res, next) => {
//   console.log("Total Memory: ", Math.floor(os.totalmem() / 1e6), "MB");
//   console.log("Free Memory: ", Math.floor(os.freemem() / 1e6), "MB");
//   next();
// });

app.use("/api/auth", auth);
app.use("/api/user-info", user);

// Normal
app.use("/api/games", games);
app.use("/api/comments", comments);
app.use("/api/chats", chats);

// Admin
app.use("/api/admin/games", gamesAdmin);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Servers");
});

app.listen(config.PORT, () => {
  console.log(
    `⚡️[server]: Server is running at http://localhost:${config.PORT}`
  );
});
