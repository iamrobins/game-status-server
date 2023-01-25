import * as dotenv from "dotenv";
import path from "path";

let p;
switch (process.env.NODE_ENV) {
  case "production":
    p = path.basename("../.env.production");
    break;
  default:
    p = path.basename("../.env.development");
}
dotenv.config({ path: p });

export default {
  MONGODB_URI: process.env.MONGODB_URI,
  PORT: process.env.PORT,
};
