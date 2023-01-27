import express, { Express, Request, Response } from "express";
import config from "./config";
import cors from "cors";
import connectDB from "./config/db";

// Routes
import auth from "./routes/auth";
import user from "./routes/user";

import games from "./routes/normal/games";
import comments from "./routes/normal/comments";

import gamesAdmin from "./routes/admin/games";

connectDB();
const app: Express = express(); // include before  other routes
app.use(cors());
app.use(express.json());

app.use("/api/auth", auth);
app.use("/api/user-info", user);

// Normal
app.use("/api/games", games);
app.use("/api/comments", comments);

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
