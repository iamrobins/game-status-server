import { Request, Response, NextFunction } from "express";
import admin from "../firebase-config";
import User from "../models/User";

export default async (req: any, res: Response, next: NextFunction) => {
  try {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return res.status(401).json({ error: "Not authorized to access" });
    }

    const decodedToken = await admin.auth().verifyIdToken(token);
    const firebaseId = decodedToken.uid;

    const user = await User.findOne({ firebaseId });

    if (!user?.admin)
      return res.status(401).json({ error: "Not authorized to access" });

    req.firebaseId = firebaseId;
    return next();
  } catch (e) {
    console.log(e);
    return res.status(401).json({ success: false });
  }
};
