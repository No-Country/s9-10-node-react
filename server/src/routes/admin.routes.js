import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  register,
  login,
  logout,
  profile,
  listUsers,
  createUser,
  deleteUser,
  editUser,
} from "../controllers/admin.controller.js";

const adminRouter = Router();
adminRouter.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to feedback app, get users" });
});
adminRouter.post("/register", register);
adminRouter.post("/login", login);
adminRouter.use(authRequired);
adminRouter.post("/logout", logout);
adminRouter.get("/profile", profile);

adminRouter.use(authRequired);

adminRouter.get("/users", listUsers);
adminRouter.post("/users", createUser);
adminRouter.delete("/users/:id", deleteUser);
adminRouter.put("/users/:id", editUser);

export default adminRouter;
