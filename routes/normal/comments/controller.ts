import { Response } from "express";
import Comment from "../../../models/Comment";

export async function postComment(req: any, res: Response) {
  const comment = await Comment.create({
    firebaseId: "IYcH0wrmvCajbfFYThAk2sJqyAr1",
    gameId: "63d2b3bd5fd523b9ef4a1c75",
    content: "HIIII NICE",
  });

  return res.json({ success: true, data: comment });
}
