import express from "express";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import handleUserLogin from "../controllers/authHandlers/handleUserLogin.js";
import handleUserRegister from "../controllers/authHandlers/handleUserRegister.js";

const routes = express.Router();

routes.post("/register", handleUserRegister);
routes.post("/login", handleUserLogin);
export default routes;
