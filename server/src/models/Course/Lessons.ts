/* eslint-disable @typescript-eslint/no-explicit-any */
import { Schema, model } from "mongoose";

export interface ILesson {
  title: string;
  content: string;
  course: any;
  resources: Array<string>;
}

const LessonSchema = new Schema<ILesson>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  course: { type: Schema.Types.ObjectId, ref: "Course", required: true },
  resources: [{ type: Schema.Types.ObjectId, ref: "Resource" }],
});

export default model<ILesson>("Lesson", LessonSchema);
