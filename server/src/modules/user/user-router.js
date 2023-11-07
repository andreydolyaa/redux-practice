import express from "express";
import { createUser, deleteUser, getUsers } from "./user-controller.js";

const router = express.Router();

router.get("/users", getUsers)
router.post("/create", createUser);
router.delete("/delete/:id", deleteUser);

export default router;
