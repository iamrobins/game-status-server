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
exports.postComment = void 0;
const Comment_1 = __importDefault(require("../../../models/Comment"));
function postComment(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const comment = yield Comment_1.default.create({
            firebaseId: "IYcH0wrmvCajbfFYThAk2sJqyAr1",
            gameId: "63d2b3bd5fd523b9ef4a1c75",
            content: "HIIII NICE",
        });
        return res.json({ success: true, data: comment });
    });
}
exports.postComment = postComment;
