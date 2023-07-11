import "dotenv/config.js";
import { dbConnection } from "./config/mongo.js";
import express from "express";
import morgan from "morgan";
import userRouter from "./routes/auth.routes.js";
import adminRouter from "./routes/admin.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();

// Enable incoming JSON data
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: true, credentials: true }));
// Enable incoming Form-Data
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "development") app.use(morgan("dev"));
else app.use(morgan("combined"));

//Connection to DB
dbConnection().catch((error) => {
  console.error("Error connecting to MongoDB:", error);
});

// Endpoints
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to feedback app" });
});

app.listen(process.env.PORT, () => {
  console.log(
    `Port has started in port ${process.env.PORT} http://localhost:${process.env.PORT}`
  );
});

//Routes
app.use("/api/users", userRouter);
app.use("/api/admin", adminRouter);
export default app;