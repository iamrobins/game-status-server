import express from "express";
import verifyAdmin from "../../../middlewares/verifyAdmin";
import { getGames, postGame } from "./controller";
const router = express.Router();

// GET ROUTES
router.route("/").get(verifyAdmin, getGames);
router.route("/").post(verifyAdmin, postGame);

export default router;
