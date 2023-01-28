"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGame = exports.getGames = void 0;
const Game_1 = __importDefault(require("../../../models/Game"));
// 1. Hot Games (recently uploaded on site)
// 2. Popular Games (by views)
// 3. Upcoming Games (by release date)
function getGames(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const type = req.query.type;
        if (!type ||
            (type !== "hotGames" && type !== "popularGames" && type !== "upcomingGames"))
            return res.status(400).json({ success: false, type: "Invalid Type" });
        try {
            let games = [];
            if (type === "hotGames") {
                games = yield Game_1.default.find().sort({ createdAt: -1 }).limit(7);
            }
            else if (type === "popularGames") {
                games = yield Game_1.default.find().sort({ views: -1 }).limit(5);
            }
            else if (type === "upcomingGames") {
                games = yield Game_1.default.find().sort({ releaseDate: -1 }).limit(5);
            }
            return res.json({ success: true, data: games });
        }
        catch (e) {
            console.log(e);
            return res.status(400).json({ success: true, data: e });
        }
    });
}
exports.getGames = getGames;
function getGame(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const slug = req.params.slug;
        try {
            const game = yield Game_1.default.findOne({ slug });
            if (!game)
                throw Error("game not found");
            game.views += 1;
            yield game.save();
            return res.json({ success: true, data: game });
        }
        catch (e) {
            return res.status(400).json({ success: false, data: e });
        }
    });
}
exports.getGame = getGame;
