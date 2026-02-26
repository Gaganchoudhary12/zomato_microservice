import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import restaurantRoutes from "./routes/restaurant.routes.js";

dotenv.config();

const app = express();

app.use(express.json());

// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log("MongoDB Connected"))
//   .catch((err) => console.log(err));

app.use("/restaurants", restaurantRoutes);

export default app;
