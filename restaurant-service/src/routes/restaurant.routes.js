import express from "express";
import { createRestaurant, getRestaurants } from "../controllers/restaurant.controller.js";

const router = express.Router();

router.post("/", createRestaurant);
router.get("/", getRestaurants);

export default router;
