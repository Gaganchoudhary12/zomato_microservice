import { registerUser, loginUser } from "../services/user.service.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const register = asyncHandler(async (req, res) => {
  const result = await registerUser(req.body);
  res.status(201).json(result);
});

export const login = asyncHandler(async (req, res) => {
  const result = await loginUser(req.body);
  res.status(200).json(result);
});

export const getProfile = asyncHandler(async (req, res) => {
  res.json({
    message: "Protected route",
    userId: req.user.id,
  });
});
