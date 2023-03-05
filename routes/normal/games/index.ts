import express from "express";
import { getGames, getGame, searchGames } from "./controller";
const router = express.Router();

// GET ROUTES
router.route("/").get(getGames);
router.route("/search").get(searchGames);
router.route("/:slug").get(getGame);

export default router;
