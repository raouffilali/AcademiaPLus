import { Schema, model } from "mongoose";

export interface IImage {
  filename: string; // Optional: You can store the original filename if needed
  contentType: string; // Mime type of the image
  data: Buffer; // Binary data of the image
}

const ImageSchema = new Schema<IImage>({
  filename: { type: String, required: true },
  contentType: { type: String, required: true },
  data: { type: Buffer, required: true },
});

export default model<IImage>("Image", ImageSchema);
