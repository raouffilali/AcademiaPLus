// Create a schema for the Instractor model

import { Model, Schema, model } from "mongoose";
import { hash, compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { IStudent } from "./Student";

export interface IInstractor extends IStudent {
  fullName: string;
  // Courses created by the instructor
  createdCourses: string[];
  // Revenue and earnings related fields
  totalRevenue: number; // Total revenue generated from instructor's courses
  totalEarnings: number; // Total earnings for the instructor
  // Students enrolled in the instructor's courses
  enrolledStudents: string[];
  // Number of students taught
  studentsTaught: number;
  singleFileUpload: string;
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
  cv: string;
  status: string;
  generateInstractorJWT(): string;
  compareInstractorPassword(enteredPassword: string): Promise<boolean>;
}

const UserSchema = new Schema<IInstractor>({
  role: { type: String, default: "Instractor" },
  fullName: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  phone: {
    type: String,
    required: true,
    validate: {
      validator: (value: string) => /^[0-9]{10}$/.test(value),
      message: "Phone number must be a 10-digit number.",
    },
  },
  education: { type: String },
  experience: { type: String },
  qualifications: { type: String },
  coverLetter: { type: String },
  cv: { type: String },
  enrolledCourses: [{ type: Schema.Types.ObjectId, ref: "Course" }],
  courseProgress: [
    {
      courseId: { type: Schema.Types.ObjectId, ref: "Course" },
      progress: Number,
    },
  ],
  purchasedCourses: [{ type: Schema.Types.ObjectId, ref: "Course" }],
  completedCourses: [
    {
      courseId: { type: Schema.Types.ObjectId, ref: "Course" },
      completedOn: Date,
    },
  ],
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
  avatar: {
    type: String,
    default:
      "https://i.pinimg.com/564x/fc/3d/70/fc3d703e1f4f0f4cb4b44ca83073d9f2.jpg",
  },
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
      required: false,
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
  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending",
  },

  firstName: { type: String },
  lastName: { type: String },

  coverPicture: { type: String },
  verified: { type: Boolean, default: false },
  phoneVerified: { type: Boolean, default: false },
  verificationCode: { type: Number },
  verificatioOTP: { type: Number },

  tokenVersion: { type: Number, default: 0 },

  multipleFileUpload: [{ type: String }],
  singleFileUpload: { type: String },
});
// hash the password
UserSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await hash(this.password, 10);
    return next();
  }
  return next();
});

// Define the methods on the schema
UserSchema.methods.generateInstractorJWT = async function (): Promise<string> {
  return await sign({ id: this._id, role: this.role }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

// compare Password

UserSchema.methods.compareInstractorPassword = async function (
  enteredPassword: string
): Promise<boolean> {
  return await compare(enteredPassword, this.password);
};

const Instructor: Model<IInstractor> = model("Instructor", UserSchema);

export default Instructor;
