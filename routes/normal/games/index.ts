import express from "express";
import verifyUser from "../../../middlewares/verifyUser";
import { getGames } from "./controller";
const router = express.Router();

// GET ROUTES
router.route("/").get(getGames);

export default router;
