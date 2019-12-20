import express from "express";
import chalk from "./chalk"
const aplicacion = express();
module.exports= () => ({
  use: async (url, endpoint) => {
    aplicacion.use(url, endpoint);
  },
  listen: portNode => {
    aplicacion.listen(portNode, () =>
      console.log(chalk.connected(`conexion a la aplicacion: http://localhost:${portNode}`))
    );
  }
});