import express from "express";
import authControllers from "../controllers/authControllers.js";
import isEmptyBody from "../middlewares/isEmptyBody.js";
import validateBody from "../middlewares/validateBody.js";
import { userSignupShema, userSigninShema } from "../models/User.js";


const authRouter = express.Router();

authRouter.post("/signup",isEmptyBody, validateBody(userSignupShema), authControllers.signup);

authRouter.post("/signin",isEmptyBody, validateBody(userSigninShema), authControllers.signin);

export default authRouter;