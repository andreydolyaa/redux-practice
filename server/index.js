import { startServer } from "./server.js";
import { connectDb } from "./src/core/db.js";

startServer().then(connectDb);
