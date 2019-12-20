import mongoose from "mongoose";
import chalk from "./chalk";

const connectionAth = async (dbURL, db, user, pwd) => {
  await mongoose
    .connect(`mongodb:${dbURL}${db}`, {
      //poolSize: 10,
      authSource: "admin",
      user: user,
      pass: pwd,
      //useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .catch(err => console.log(`No conecto ${err}`));
  statusConnection(dbURL);
};

const connectionFree = async (dbURL, db) => {
  await mongoose
    .connect(`mongodb:${dbURL}${db}`, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    })
    .catch(err => console.log(`No conecto ${err}`));
  statusConnection(dbURL);
};

const statusConnection = async dbURL => {
  await mongoose.connection.on("connected", () =>
    console.log(
      chalk.connected("Conectando a la base de datos de MongoDB", dbURL)
    )
  );

  await mongoose.connection.on("error", err =>
    console.log(
      chalk.error("Error de conexion con la base de datos " + err + " error")
    )
  );

  await mongoose.connection.on("disconnected", () =>
    console.log(chalk.disconnected("desconexion a la base de datos"))
  );
  await process.on("SIGINT", () => {
    mongoose.connection.close(() => {
      console.log(
        chalk.termination("Desconectada la aplicacion de la base de datos")
      );
      process.exit(0);
    });
  });
};

module.exports = () => ({
  connection: async (dbURL, db, user = "", pwd = "") => {
    if (user != "") {
      await connectionAth(dbURL, db, user, pwd);
    } else {
      await connectionFree(dbURL, db);
    }
  },
  schemaMongo: (nameModel, schema) => {
    const schemaModel = new mongoose.Schema(schema);
    const model = new mongoose.model(nameModel, schemaModel);
    return model;
  }
});
