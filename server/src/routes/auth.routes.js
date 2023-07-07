import { Router } from "express";
import {
  login,
  logout,
  profile,
  register,
  editProfile
  verifyToken,

} from "../controllers/auth.controller.js";
import { authRequired } from "../middlewares/validateToken.js";
const userRouter = Router();

userRouter.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to feedback app, get users" });
});
userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.use(authRequired);
userRouter.post("/logout", logout);
userRouter.get("/profile", profile);
userRouter.put("/edit-profile/:id", editProfile);
userRouter.get("/verify", verifyToken);
export default userRouter;
