/* eslint-disable @typescript-eslint/no-explicit-any */

import { Schema, model } from "mongoose";
import { role } from "../../utils/enums";

export interface ICourse {
  title: string;
  category: any;
  level?: string;
  description: string;
  coverImage: any;
  videoTrailer?: any;
  lessons: Array<string>;
  tests: Array<string>;
  reviews: Array<string>;
  instructors: Array<string>;
  requirmenets?: Array<string>;
  whatYouWillLearn?: Array<string>;
  price?: number;
  discount?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

const CourseSchema = new Schema<ICourse>({
  title: {
    type: String,
    required: true,
    minlength: [5, "Title must have 5 or more characters"],
  },
  category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
  description: {
    type: String,
    required: true,
    minlength: [20, "Description must have 20 or more characters"],
    maxlength: [500, "Description must have 500 or fewer characters"],
  },

  level: {
    type: String,
    enum: [role.student, role.instructor, role.admin],
    default: "beginner",
  },
  coverImage: {
    type: Schema.Types.ObjectId,
    ref: "uploads.files",
    required: true,
  },
  videoTrailer: { type: Schema.Types.ObjectId, ref: "uploads.files" },
  lessons: [{ type: Schema.Types.ObjectId, ref: "Lesson" }],
  tests: [{ type: Schema.Types.ObjectId, ref: "Test" }],
  reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
  instructors: [{ type: Schema.Types.ObjectId, ref: "User" }],
  requirmenets: [{ type: String }],
  whatYouWillLearn: [{ type: String }],
  price: { type: Number, default: 0 },
  discount: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default model<ICourse>("Course", CourseSchema);
