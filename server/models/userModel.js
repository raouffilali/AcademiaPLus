// models/userModel.js

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fname: { type: String, required:[true,"Please enter your Firstname!"],trim:true},
  lname: { type: String, required:[true,"Please enter your Lastname!"] ,trim:true },
  email: { type: String, required:[true,"Please enter your Email!"], unique: true,trim:true },
  password: { type: String, required: true },
},
{
  collection: "UserInfo",
},
{
  timestamps: true
});

mongoose.model("UserInfo", userSchema);

