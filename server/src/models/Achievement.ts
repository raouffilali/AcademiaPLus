import { Schema, model } from "mongoose";

export interface IAchievement {
  title: string;
  description: string;
  icon: string;
}

const AchievementSchema = new Schema<IAchievement>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String },
});

export default model<IAchievement>("Achievement", AchievementSchema);
