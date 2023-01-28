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
exports.postChat = exports.getChats = void 0;
const Chat_1 = __importDefault(require("../../../models/Chat"));
function getChats(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const chats = (yield Chat_1.default.find({})).reverse();
            res.json({ success: true, data: chats });
        }
        catch (e) {
            return res.json({ success: false, data: e });
        }
    });
}
exports.getChats = getChats;
function postChat(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const chatBody = req.body;
        chatBody.firebaseId = req.firebaseId;
        try {
            yield Chat_1.default.create(chatBody);
            return res.json({ success: true });
        }
        catch (e) {
            return res.json({ success: false, data: e });
        }
    });
}
exports.postChat = postChat;
