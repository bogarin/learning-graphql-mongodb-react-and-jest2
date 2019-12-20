import mongo from "./../../src/services/mongodb";
import mongoose from "mongoose";
import config from "./../config";
describe("Name of the group", () => {
  it("should ", () => {
    const testConecction = mongo();
    testConecction.connection(
      config.urlMongo,
      config.dbMongo,
      config.userMongo,
      config.pwdMongo
    );
    mongoose.connection.close();
  });
});
