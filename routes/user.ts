import express, { Request, Response } from "express";
const router = express.Router();
import User from "../models/User.js";
import verifyUser from "../middlewares/verifyUser.js";

const userInfo = async (req: any, res: Response) => {
  try {
    const firebaseId = req.firebaseId;
    console.log(firebaseId);

    const user = await User.findOne({ firebaseId });

    if (user) {
      return res.status(200).json({ success: true, data: user });
    }

    return res
      .status(400)
      .json({ success: false, data: "User does not exists" });
  } catch (error: any) {
    return res.status(401).json(error.message);
  }
};

router.route("/").get(verifyUser, userInfo);

export default router;
