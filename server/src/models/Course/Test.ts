/* eslint-disable @typescript-eslint/no-explicit-any */
import { Schema, model } from "mongoose";

export interface ITest {
  title: string;
  questions: Array<object>;
  course: any;
}

const TestSchema = new Schema<ITest>({
  title: { type: String, required: true },
  questions: [
    {
      questionText: String,
      options: [String],
      correctAnswer: String,
    },
  ],
  course: { type: Schema.Types.ObjectId, ref: "Course", required: true },
});

export default model<ITest>("Test", TestSchema);
