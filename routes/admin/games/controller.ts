import { Response } from "express";
import Game from "../../../models/Game";

export async function getGames(req: any, res: Response) {
  try {
    const games = await Game.find({});
    if (!games) throw Error("Games not found");
    res.status(200).json({ success: true, data: games });
  } catch (e) {
    return res.status(400).json({ success: false, data: e });
  }
}

export async function getGame(req: any, res: Response) {
  const slug = req.params.slug;

  try {
    const game = await Game.findOne({ slug });
    if (!game) throw Error("game not found");
    return res.json({ success: true, data: game });
  } catch (e) {
    return res.status(400).json({ success: false, data: e });
  }
}

export async function postGame(req: any, res: Response) {
  const gameBody = req.body;

  try {
    gameBody.firebaseId = req.firebaseId;
    await Game.create(gameBody);
    return res.json({ success: true });
  } catch (e) {
    return res.status(400).json({ success: false, data: e });
  }
}

export async function putGame(req: any, res: Response) {
  const gameBody = req.body;
  try {
    await Game.updateOne({ _id: gameBody.id }, gameBody);
    return res.json({ success: true });
  } catch (e) {
    return res.status(400).json({ success: false, data: e });
  }
}
