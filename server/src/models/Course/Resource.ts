/* eslint-disable @typescript-eslint/no-explicit-any */
import { Schema, model } from "mongoose";

export interface IResource {
  title: string;
  link: string;
  lesson: any;
}

const ResourceSchema = new Schema<IResource>({
  title: { type: String, required: true },
  link: { type: String, required: true },
  lesson: { type: Schema.Types.ObjectId, ref: "Lesson", required: true },
});

export default model<IResource>("Resource", ResourceSchema);
