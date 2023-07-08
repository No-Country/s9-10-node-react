import express from "express";
import userRouter from "./auth.routes.js";
import adminRouter from "./admin.routes.js";

const app = express();

const apiRoutes = (app) => {
  app.use("/api/users", userRouter);
  app.use("/api/admin", adminRouter);
};

export default apiRoutes;
