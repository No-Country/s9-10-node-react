import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import upload from "../middlewares/multer.js";
import {
  register,
  login,
  logout,
  profile,
  listUsers,
  createUser,
  deleteUser,
  editUser,
  uploadPictureAdmin
} from "../controllers/admin.controller.js";
import {calculateTechnicalSkillsScore, getScoresAndComments} from "../services/score.service.js";

import { createForm } from "../controllers/form.controller.js";

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

//Crear Formulario
adminRouter.post("/form", createForm);

//respuestas
// adminRouter.get("/tech-skills/:id", calculateTechnicalSkillsScore);
adminRouter.get("/users/tech-skills/:userId", calculateTechnicalSkillsScore);
adminRouter.get("/users/all-scores/:userId", getScoresAndComments )
/* Queda pendiente donde se va a guardar la imagen cuando la suba el admin */
adminRouter.post("/uploadPicture", upload.array("images"), uploadPictureAdmin);

export default adminRouter;
