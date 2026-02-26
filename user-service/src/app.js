import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.routes.js";
import { globalErrorHandler } from "./middlewares/error.middleware.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(globalErrorHandler);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use("/users", userRoutes);

export default app;
