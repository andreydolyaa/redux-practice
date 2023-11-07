import express from "express";
import userRouter from "./src/modules/user/user-router.js";

const router = express.Router();

router.use(userRouter);

export default router;
