import express from "express";
import verifyUser from "../../../middlewares/verifyUser";
import { getChats, postChat } from "./controller";
const router = express.Router();

// GET ROUTES
router.route("/").get(getChats);
router.route("/").post(verifyUser, postChat);

export default router;
