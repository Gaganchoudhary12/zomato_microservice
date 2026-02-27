import { placeOrder, fetchOrders } from "../services/order.service.js";

export const createOrder = async (req, res) => {
  const result = await placeOrder(req.body);
  res.status(201).json(result);
};

export const getOrders = async (req, res) => {
  const result = await fetchOrders();
  res.json(result);
};
