import { Request, Response } from "express";
import Chat from "../../../models/Chat";

export async function getChats(req: Request, res: Response) {
  try {
    const chats = (await Chat.find({})).reverse();
    res.json({ success: true, data: chats });
  } catch (e) {
    return res.json({ success: false, data: e });
  }
}

export async function postChat(req: any, res: Response) {
  const chatBody = req.body;
  chatBody.firebaseId = req.firebaseId;
  try {
    await Chat.create(chatBody);
    return res.json({ success: true });
  } catch (e) {
    return res.json({ success: false, data: e });
  }
}
