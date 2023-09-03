import { Schema, model } from "mongoose";

export interface IStudent {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  enrolledCourses: string[];
  completedCourses: string[];
  achievements: string[];
  progress: string[];
  phone: string;
  birthday: Date;
  country: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  zipCode: string;
  profileImage: string;
  socialProfiles: {
    twitter?: string;
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    [key: string]: string | undefined;
  };
  //   subscription field has start on date and price and access and next billing date
  subscriptions: string[];

  billingAddress: {
    addressLine1: string;
    addressLine2?: string;
    city: string;
    zipCode: string;
    country: string;
  };
}

const UserSchema = new Schema<IStudent>({
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
  profileImage: { type: String },
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
});

export default model<IStudent>("Student", UserSchema);
