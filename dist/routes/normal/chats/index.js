"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const verifyUser_1 = __importDefault(require("../../../middlewares/verifyUser"));
const controller_1 = require("./controller");
const router = express_1.default.Router();
// GET ROUTES
router.route("/").get(controller_1.getChats);
router.route("/").post(verifyUser_1.default, controller_1.postChat);
exports.default = router;
