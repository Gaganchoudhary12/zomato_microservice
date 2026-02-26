import Restaurant from "../models/restaurant.model.js";

export const createRestaurant = (data) =>
  Restaurant.create(data);

export const getAllRestaurants = () =>
  Restaurant.find();
