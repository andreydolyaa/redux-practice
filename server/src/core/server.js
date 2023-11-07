import express from "express";
import cors from "cors";

class Server {
  constructor(options = {}) {
    this.host = options.host;
    this.port = options.port;
    this.router = options.router;
    this.app = express();
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(this.router);
  }
  start() {
    return new Promise((resolve, reject) => {
      this.app.listen(this.port, (error) => {
        if (error) reject("FAILED TO START SERVER");
        else {
          console.log("server running");
          resolve();
        }
      });
    });
  }
}

export default Server;
