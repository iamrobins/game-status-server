import { Request, Response, NextFunction } from "express";
import admin from "../firebase-config";

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

    // const userInfo = await admin.auth().getUser(firebaseId);

    req.firebaseId = firebaseId;
    return next();
  } catch (e) {
    console.log(e);
    return res.status(401).json({ success: false });
  }
};
