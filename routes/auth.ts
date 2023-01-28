import express, { Request, Response } from "express";
const router = express.Router();
import User from "../models/User.js";
import verifyUser from "../middlewares/verifyUser.js";

interface CustomReq extends Request {
  firebaseId: string;
}

const authUser = async (req: any, res: Response) => {
  try {
    const firebaseId = req.firebaseId;
    console.log(firebaseId);

    if (await User.findOne({ firebaseId })) {
      return res.status(200).json({ success: "User already registered" });
    }
    await User.create({
      firebaseId: firebaseId,
      email: req.params.email,
    });

    return res
      .status(201)
      .json({ success: "New user registered successfully" });
  } catch (error: any) {
    return res.status(401).json(error.message);
  }
};

router.route("/:email").get(verifyUser, authUser);

export default router;
