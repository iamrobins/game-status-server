import { Request, Response } from "express";

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

  return res.json({ success: true, games: type });
}
