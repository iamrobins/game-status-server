import { Request, Response } from "express";
import Game from "../../../models/Game";

// 1. Hot Games (recently uploaded on site)
// 2. Popular Games (by views)
// 3. Upcoming Games (by release date)

export async function getGames(req: Request, res: Response) {
  const type = req.query.type;
  if (
    !type ||
    (type !== "hotGames" && type !== "popularGames" && type !== "upcomingGames")
  )
    return res.status(400).json({ success: false, type: "Invalid Type" });

  try {
    let games: any = [];
    if (type === "hotGames") {
      games = await Game.find().sort({ createdAt: -1 }).limit(7);
    } else if (type === "popularGames") {
      games = await Game.find().sort({ views: -1 }).limit(5);
    } else if (type === "upcomingGames") {
      games = await Game.find().sort({ releaseDate: -1 }).limit(5);
    }
    return res.json({ success: true, data: games });
  } catch (e) {
    console.log(e);
    return res.status(400).json({ success: true, data: e });
  }
}

export async function getGame(req: Request, res: Response) {
  const slug = req.params.slug;

  try {
    const game = await Game.findOne({ slug });
    if (!game) throw Error("game not found");
    game.views += 1;
    await game.save();
    return res.json({ success: true, data: game });
  } catch (e) {
    return res.status(400).json({ success: false, data: e });
  }
}
