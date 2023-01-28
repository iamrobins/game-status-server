"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const verifyAdmin_1 = __importDefault(require("../../../middlewares/verifyAdmin"));
const controller_1 = require("./controller");
const router = express_1.default.Router();
// GET ROUTES
router.route("/:slug").get(verifyAdmin_1.default, controller_1.getGame);
router.route("/").get(verifyAdmin_1.default, controller_1.getGames);
router.route("/").post(verifyAdmin_1.default, controller_1.postGame);
router.route("/").put(verifyAdmin_1.default, controller_1.putGame);
exports.default = router;
