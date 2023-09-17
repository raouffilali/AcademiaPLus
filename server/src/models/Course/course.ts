import mongoose, { Document, Schema, Model } from "mongoose";
import { ObjectId } from "mongodb";

interface ILecture extends Document {
  title: string;
  videoURL: string;
  description: string;
  files: string[];
  section: Schema.Types.ObjectId;
}

interface ISection extends Document {
  title: string;
  course: Schema.Types.ObjectId;
  lectures: ILecture[];
}
// Define the review schema with _id field
interface IReview extends Document {
  _id?: ObjectId;
  rating: number;
  comment: string;
}

interface ICourse extends Document {
  title: string;
  category: string;
  level: string;
  description: string;
  coverImage: string;
  promoVideo: string;
  sections: ISection[];
  reviews: IReview[];
  price: number;
  requirements: string;
  instructore: Schema.Types.ObjectId;
  Requirements: string;
}

// ? Define the Course schema
const reviewSchema = new Schema<IReview>(
  {
    rating: Number,
    comment: String,
  },
  { timestamps: true }
);

// Lecture model
const lectureSchema = new Schema<ILecture>(
  {
    title: String,
    videoURL: String,
    description: String,
    files: [String],
    section: { type: Schema.Types.ObjectId, ref: "Section" },
  },
  { timestamps: true }
);

// Section model
const sectionSchema = new Schema<ISection>(
  {
    title: { type: String, default: "New Section" } ,
    course: { type: Schema.Types.ObjectId, ref: "Course" },
    lectures: [{ type: Schema.Types.ObjectId, ref: "Lecture" }],
  },
  { timestamps: true }
);

// Course model

const courseSchema = new Schema<ICourse>(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    level: { type: String, required: true },
    description: { type: String, required: true },
    coverImage: {
      type: String,
      required: true,
      default:
        "https://i.pinimg.com/564x/fc/3d/70/fc3d703e1f4f0f4cb4b44ca83073d9f2.jpg",
    },
    promoVideo: String,
    sections: [{ type: Schema.Types.ObjectId, ref: "Section" }],
    reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
    price: { type: Number, required: true }, // Add the price field as a number
    requirements: String, // Optionally, add any other fields you need
    instructore: { type: Schema.Types.ObjectId, ref: "Instractor" },
    Requirements: String,
  },
  { timestamps: true }
);

export const Course: Model<ICourse> = mongoose.model("Course", courseSchema);
export const Section: Model<ISection> = mongoose.model(
  "Section",
  sectionSchema
);
export const Lecture: Model<ILecture> = mongoose.model(
  "Lecture",
  lectureSchema
);
export const Review: Model<IReview> = mongoose.model("Review", reviewSchema); // Optional: Define a separate Review model

// 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
