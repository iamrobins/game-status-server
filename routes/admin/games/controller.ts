import { Response } from "express";
import Game from "../../../models/Game";

export async function postGame(req: any, res: Response) {
  const game = await Game.create({
    firebaseId: "IYcH0wrmvCajbfFYThAk2sJqyAr1",
    name: "Resident Evil 4",
    description: "A zombie game",
    company: "Capcom",
    releaseDate: new Date().toJSON(),
    status: true,
    media: ["link1", "link2"],
    picture: "game-pic",
    comments: [
      { firebaseId: "IYcH0wrmvCajbfFYThAk2sJqyAr1", content: "Nice Game" },
      { firebaseId: "ZYcH0wrmvCajbfFYThAk2sJqyAr2", content: "Good Game" },
    ],
    slug: "re4",
  });
  console.log(game);

  return res.json({ success: true, game: game });
}
