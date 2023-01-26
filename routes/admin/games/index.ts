import express from "express";
import verifyUser from "../../../middlewares/verifyUser";
import { postGame } from "./controller";
const router = express.Router();

// GET ROUTES
router.route("/").post(postGame);

export default router;
