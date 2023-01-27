import e, { Response } from "express";
import Game from "../../../models/Game";

export async function getGames(req: any, res: Response) {
  return res.json({ success: true, data: "access allowed" });
}

export async function postGame(req: any, res: Response) {
  const gameBody = req.body;

  try {
    gameBody.firebaseId = req.firebaseId;
    const game = await Game.create(gameBody);
    return res.json({ success: true, data: game });
  } catch (e) {
    return res.status(400).json({ success: false, data: e });
  }
}
