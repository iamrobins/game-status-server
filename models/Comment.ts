import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    firebaseId: { type: String, required: true },
    gameId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Game",
    },
    content: { type: String, required: true },
  },

  {
    timestamps: true,
  }
);

const Comment = mongoose.model("Comment", commentSchema);
export default Comment;
