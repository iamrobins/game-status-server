import express from "express";
import verifyAdmin from "../../../middlewares/verifyAdmin";
import { getGame, getGames, postGame, putGame } from "./controller";
const router = express.Router();

// GET ROUTES
router.route("/:slug").get(verifyAdmin, getGame);
router.route("/").get(verifyAdmin, getGames);
router.route("/").post(verifyAdmin, postGame);
router.route("/").put(verifyAdmin, putGame);

export default router;
