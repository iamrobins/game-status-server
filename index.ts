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

connectDB();
const app: Express = express(); // include before  other routes
app.use(cors());
app.use(express.json());
app.use(morgan("combined"));

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
