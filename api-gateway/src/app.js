import express from "express";
import dotenv from "dotenv";
import userProxy from "./routes/user.proxy.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/users", userProxy);

export default app;
