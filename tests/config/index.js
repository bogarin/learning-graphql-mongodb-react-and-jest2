import { config } from "dotenv";
import path from "path";
config({ path:path.join(__dirname, "../../.env.test") });
export default {
  type: process.env.NODE_TYPE_TEST || "dev",
  portNode: process.env.PORT_TEST || 3088,
  urlMongo: process.env.MONGO_URL_TEST || "//localhost:1717",
  dbMongo: process.env.MONGO_DB_TEST || "/clientes",
  userMongo: process.env.MONGO_USER_TEST,
  pwdMongo: process.env.MONGO_PWD_TEST
};