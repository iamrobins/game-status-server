import mongoose from "mongoose";

const gameSchema = new mongoose.Schema(
  {
    // firebaseId: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    company: { type: String, required: true },
    releaseDate: { type: Date, required: true },
    status: { type: Boolean, required: true, default: false },
    picture: { type: String, required: false, default: "" },
    views: { type: Number, required: true, default: 0 },
    slug: { type: String, required: true, unique: true },
  },

  {
    timestamps: true,
  }
);

const Game = mongoose.model("Game", gameSchema);
export default Game;
