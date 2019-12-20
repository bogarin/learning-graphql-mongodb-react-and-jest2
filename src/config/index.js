import dotenv from "dotenv";
dotenv.config();
export default {
  type: process.env.NODE_TYPE || "dev",
  portNode: process.env.PORT || 3088,
  urlMongo: process.env.MONGO_URL || "//localhost:1717",
  dbMongo: process.env.MONGO_DB || "/clientes",
  userMongo: process.env.MONGO_USER,
  pwdMongo: process.env.MONGO_PWD
};
