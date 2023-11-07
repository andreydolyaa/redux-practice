import { User } from "./user-schema.js";
import { sleep } from './../../core/utils.js';

export const getUsers = async (req, res) => {
  try {
    const users = await User.find(req.body ? req.body : {});
    await sleep(500)
    res.send(users).status(200);
  } catch (error) {
    res.send("Can't get users!").status(400);
  }
};

export const createUser = async (req, res) => {
  try {
    await User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      age: req.body.age,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
    });
    res.send("User Created!").status(200);
  } catch (error) {
    res.send("Failed to create user!").status(400);
  }
};

export const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.send("User Deleted!").status(200);
  } catch (error) {
    res.send("Failed to delete user!").status(400);
  }
};
