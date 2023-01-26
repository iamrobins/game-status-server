import { Response } from "express";

export async function getGames(req: any, res: Response) {
  return res.json({ success: "GAME GAMES" });
}
