import express from "express";
import { getGames, getGame } from "./controller";
const router = express.Router();

// GET ROUTES
router.route("/").get(getGames);
router.route("/:slug").get(getGame);

export default router;
