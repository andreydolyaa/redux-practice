import Server from "./src/core/server.js";
import router from "./router.js";

const server = new Server({
  host: "localhost",
  port: 3005,
  router
});

export const startServer = async () => {
  try {
    server.start();
  } catch (error) {
    process.exit();
  }
};
