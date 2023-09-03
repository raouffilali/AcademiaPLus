// create a schema for the admin only

import { Schema, model } from "mongoose";

interface Admin {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const AdminSchema = new Schema({
  firstName: {
    type: String,
    required: true, // First name is required
    trim: true, // Remove leading/trailing whitespace
  },
  lastName: {
    type: String,
    required: true, // Last name is required
    trim: true, // Remove leading/trailing whitespace
  },
  email: {
    type: String,
    required: true, // Email is required
    unique: true, // Email must be unique
    trim: true, // Remove leading/trailing whitespace
    lowercase: true, // Convert email to lowercase
    validate: {
      validator: function (email) {
        // Basic email format validation
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
      },
      message: (props) => `${props.value} is not a valid email address!`,
    },
  },
  password: {
    type: String,
    required: true, // Password is required
    minlength: 8, // Password must be at least 8 characters long
  },
});

// export a model for the admin
const Admin = model<Admin>("Admin", AdminSchema);
module.exports = Admin;
