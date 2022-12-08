import express from "express";
import {} from "../controllers/auth.js";
import { login, logout, register } from "../controllers/auth.js";

const authRouter = express.Router();

authRouter.post("/login", login);
authRouter.post("/register", register);
authRouter.post("/logout", logout);

export default authRouter;
