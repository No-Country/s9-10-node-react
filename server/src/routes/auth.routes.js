import { Router } from "express";
import  validateToken from "../middlewares/validateToken.js";
import {
  login,
  logout,
  profile,
  register,
  session
} from "../controllers/auth.controller.js";
const userRouter = Router();

userRouter.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to feedback app, get users" });
});
userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.post("/logout", logout);
userRouter.get("/profile", profile);
userRouter.get("/session",validateToken, session);

export default userRouter;
