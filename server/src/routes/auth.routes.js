import { Router } from "express";
import {
  login,
  logout,
  profile,
  register,
  editProfile,
  verifyToken,
} from "../controllers/auth.controller.js";
import { authRequired } from "../middlewares/validateToken.js";
import validateSchema from "../middlewares/validateSchema.js";
import { loginSchema, registerSchema } from "../Schemas/auth.schema.js";
const userRouter = Router();

userRouter.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to feedback app, get users" });
});

userRouter.post("/register", validateSchema(registerSchema), register);
userRouter.post("/login", validateSchema(loginSchema), login);
userRouter.use(authRequired);
userRouter.post("/logout", logout);
userRouter.get("/profile", profile);
userRouter.put("/edit-profile/:id", editProfile);
userRouter.get("/verify", verifyToken);

export default userRouter;
