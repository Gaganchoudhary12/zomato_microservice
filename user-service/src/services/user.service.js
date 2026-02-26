import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as userRepo from "../repositories/user.repository.js";
import AppError from "../utils/AppError.js";

export const registerUser = async (data) => {
  const existing = await userRepo.findByEmail(data.email);
  if (existing) throw new AppError("User already exists", 400);

  const hashedPassword = await bcrypt.hash(data.password, 10);

  const user = await userRepo.createUser({
    ...data,
    password: hashedPassword,
  });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  return { user, token };
};

export const loginUser = async (data) => {
  const user = await userRepo.findByEmail(data.email);
  if (!user) throw new AppError("Invalid credentials", 401);

  const isMatch = await bcrypt.compare(data.password, user.password);
  if (!isMatch) throw new AppError("Invalid credentials", 401);

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  return { user, token };
};
