import { addRestaurant, fetchRestaurants } from "../services/restaurant.service.js";

export const createRestaurant = async (req, res) => {
  const result = await addRestaurant(req.body);
  res.status(201).json(result);
};

export const getRestaurants = async (req, res) => {
  const result = await fetchRestaurants();
  res.json(result);
};
