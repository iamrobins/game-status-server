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
exports.putGame = exports.postGame = exports.getGame = exports.getGames = void 0;
const Game_1 = __importDefault(require("../../../models/Game"));
function getGames(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const games = yield Game_1.default.find({});
            if (!games)
                throw Error("Games not found");
            res.status(200).json({ success: true, data: games });
        }
        catch (e) {
            return res.status(400).json({ success: false, data: e });
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
            return res.json({ success: true, data: game });
        }
        catch (e) {
            return res.status(400).json({ success: false, data: e });
        }
    });
}
exports.getGame = getGame;
function postGame(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const gameBody = req.body;
        try {
            gameBody.firebaseId = req.firebaseId;
            yield Game_1.default.create(gameBody);
            return res.json({ success: true });
        }
        catch (e) {
            return res.status(400).json({ success: false, data: e });
        }
    });
}
exports.postGame = postGame;
function putGame(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const gameBody = req.body;
        try {
            yield Game_1.default.updateOne({ _id: gameBody.id }, gameBody);
            return res.json({ success: true });
        }
        catch (e) {
            return res.status(400).json({ success: false, data: e });
        }
    });
}
exports.putGame = putGame;
