import express from "express";
import verifyUser from "../../../middlewares/verifyUser";
import { postComment } from "./controller";
const router = express.Router();

// GET ROUTES
router.route("/").post(postComment);

export default router;
