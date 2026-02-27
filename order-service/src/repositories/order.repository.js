import Order from "../models/order.model.js";

export const createOrder = (data) => Order.create(data);
export const getOrders = () => Order.find();
