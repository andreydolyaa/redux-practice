import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  age: Number,
  email: {
    type: String,
    unique: true,
  },
  phone: String,
  address: String,
  id: {
    type: String,
    default: function() {
      return this._id;
    },
  },
});

export const User = mongoose.model("User", userSchema);
