"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./config"));
const cors_1 = __importDefault(require("cors"));
const db_1 = __importDefault(require("./config/db"));
// Routes
const auth_1 = __importDefault(require("./routes/auth"));
const user_1 = __importDefault(require("./routes/user"));
const games_1 = __importDefault(require("./routes/normal/games"));
const comments_1 = __importDefault(require("./routes/normal/comments"));
const chats_1 = __importDefault(require("./routes/normal/chats"));
const games_2 = __importDefault(require("./routes/admin/games"));
(0, db_1.default)();
const app = (0, express_1.default)(); // include before  other routes
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api/auth", auth_1.default);
app.use("/api/user-info", user_1.default);
// Normal
app.use("/api/games", games_1.default);
app.use("/api/comments", comments_1.default);
app.use("/api/chats", chats_1.default);
// Admin
app.use("/api/admin/games", games_2.default);
app.get("/", (req, res) => {
    res.send("Express + TypeScript Servers");
});
app.listen(config_1.default.PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${config_1.default.PORT}`);
});
