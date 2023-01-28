"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const gameSchema = new mongoose_1.default.Schema({
    firebaseId: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    company: { type: String, required: true },
    releaseDate: { type: Date, required: true },
    status: { type: Boolean, required: true, default: false },
    picture: { type: String, required: false, default: "" },
    views: { type: Number, required: true, default: 0 },
    slug: { type: String, required: true, unique: true },
}, {
    timestamps: true,
});
const Game = mongoose_1.default.model("Game", gameSchema);
exports.default = Game;
