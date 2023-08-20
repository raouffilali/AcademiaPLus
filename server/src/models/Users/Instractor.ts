// Create a schema for the Instractor model

import { Schema, model } from "mongoose";
import { IStudent } from "./Student";

export interface IInstractor extends IStudent {
  // Courses created by the instructor
  createdCourses: string[];

  // Revenue and earnings related fields
  totalRevenue: number; // Total revenue generated from instructor's courses
  totalEarnings: number; // Total earnings for the instructor

  // Students enrolled in the instructor's courses
  enrolledStudents: string[];

  // Number of students taught
  studentsTaught: number;

  // Payouts information
  payouts: [
    {
      date: Date;
      amount: number;
    }
  ];
  education: string;
  experience: string;
  qualifications: string;
  coverLetter: string;
  cv : string;
}

const UserSchema = new Schema<IInstractor>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  enrolledCourses: [{ type: Schema.Types.ObjectId, ref: "Course" }],
  completedCourses: [{ type: Schema.Types.ObjectId, ref: "Course" }],
  achievements: [{ type: Schema.Types.ObjectId, ref: "Achievement" }],
  progress: [{ type: Schema.Types.ObjectId, ref: "Progress" }],

  phone: {
    type: String,
    required: true,
    validate: {
      validator: (value: string) => /^[0-9]{10}$/.test(value),
      message: "Phone number must be a 10-digit number.",
    },
  },
  birthday: { type: Date },
  country: { type: String },
  addressLine1: { type: String },
  addressLine2: { type: String },
  city: { type: String },
  zipCode: {
    type: String,

    validate: {
      validator: (value: string) => /^[0-9]{5}$/.test(value),
      message: "Zip code must be a 5-digit number.",
    },
  },
  profileImage: { type: Buffer },
  socialProfiles: {
    twitter: { type: String },
    facebook: { type: String },
    instagram: { type: String },
    linkedin: { type: String },
  },
  subscriptions: [{ type: String }],
  billingAddress: {
    addressLine1: { type: String },
    addressLine2: { type: String },
    city: { type: String },
    zipCode: {
      type: String,
      required: true,
      validate: {
        validator: (value: string) => /^[0-9]{5}$/.test(value),
        message: "Zip code must be a 5-digit number.",
      },
    },
    country: { type: String },
  },

  // New fields
  createdCourses: [{ type: Schema.Types.ObjectId, ref: "Course" }],
  totalRevenue: { type: Number, default: 0 },
  totalEarnings: { type: Number, default: 0 },
  enrolledStudents: [{ type: Schema.Types.ObjectId, ref: "Student" }],
  studentsTaught: { type: Number, default: 0 },
  payouts: [
    {
      date: { type: Date },
      amount: { type: Number },
    },
  ],
});

export default model<IInstractor>("Instractor", UserSchema);
