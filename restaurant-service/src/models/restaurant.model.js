import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  cuisine: { type: String, required: true },
  rating: { type: Number, default: 0 },
  location: { type: String, required: true },
  isOpen: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

export default Restaurant;
