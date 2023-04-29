// models/userModel.js

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required:[true,"Please enter your Firstname!"],trim:true},
  lastName: { type: String, required:[true,"Please enter your Lastname!"] ,trim:true },
  email: { type: String, required:[true,"Please enter your Email!"], unique: true,trim:true },
  password: { type: String, required: true },
  role: {
    type: Number,
    default: 0 // 0 = user, 1 = admin
}
},{
  timestamps: true
});

const User = mongoose.model("User", userSchema);

module.exports = User;
