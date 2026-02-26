// import User from "../models/user.model.js";

export const createUser = async (data) => {
    console.log(data, 'data');
    
//   return await User.create(data);
};

export const findByEmail = async (email) => {
  return await User.findOne({ email });
};