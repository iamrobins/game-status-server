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
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const User_js_1 = __importDefault(require("../models/User.js"));
const verifyUser_js_1 = __importDefault(require("../middlewares/verifyUser.js"));
const userInfo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const firebaseId = req.firebaseId;
        console.log(firebaseId);
        const user = yield User_js_1.default.findOne({ firebaseId });
        if (user) {
            return res.status(200).json({ success: true, data: user });
        }
        return res
            .status(400)
            .json({ success: false, data: "User does not exists" });
    }
    catch (error) {
        return res.status(401).json(error.message);
    }
});
router.route("/").get(verifyUser_js_1.default, userInfo);
exports.default = router;
