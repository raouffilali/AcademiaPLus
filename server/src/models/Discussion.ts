/* eslint-disable @typescript-eslint/no-explicit-any */
import { Schema, model } from "mongoose";

export interface IDiscussion {
  user: any;
  course: any;
  content: string;
  replies: Array<string>;
}

const DiscussionSchema = new Schema<IDiscussion>({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  course: { type: Schema.Types.ObjectId, ref: "Course", required: true },
  content: { type: String, required: true },
  replies: [{ type: Schema.Types.ObjectId, ref: "Discussion" }],
});

export default model<IDiscussion>("Discussion", DiscussionSchema);
