import * as repo from "../repositories/restaurant.repository.js";

export const addRestaurant = async (data) => {
  return repo.createRestaurant(data);
};

export const fetchRestaurants = async () => {
  return repo.getAllRestaurants();
};
