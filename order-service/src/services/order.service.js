import axios from "axios";
import * as repo from "../repositories/order.repository.js";

export const placeOrder = async (data) => {
  // Validate restaurant exists
  try {
    await axios.get(
      `${process.env.RESTAURANT_SERVICE_URL}/restaurants`
    );
  } catch (error) {
    throw new Error("Restaurant not found or service unavailable");
  }

  // Calculate total
  const total = data.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return repo.createOrder({
    ...data,
    totalAmount: total
  });
};

export const fetchOrders = async () => {
  return repo.getOrders();
};
