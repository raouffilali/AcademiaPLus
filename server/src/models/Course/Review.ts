/* eslint-disable @typescript-eslint/no-explicit-any */
import { Schema, model } from "mongoose";

export interface IReview {
  user: any;
  course: any;
  rating: number;
  comment: string;
}

const ReviewSchema = new Schema<IReview>({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  course: { type: Schema.Types.ObjectId, ref: "Course", required: true },
  rating: { type: Number, required: true },
  comment: { type: String },
});

export default model<IReview>("Review", ReviewSchema);
