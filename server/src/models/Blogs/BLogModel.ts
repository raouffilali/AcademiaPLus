// create a schema for Blog {Title, Description, Image, Author, Date, category}

import { model, Schema } from "mongoose";

export interface IBlog {
  title: string;
  description: string;
  image: string;
  author: string;
  date: Date;
  category: string;
}

const BlogSchema = new Schema<IBlog>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: false },
    author: { type: String, required: true },
    date: { type: Date },
    category: { type: String, required: true },
  },
  { timestamps: true }
);

export default model<IBlog>("Blog", BlogSchema);
