/* eslint-disable @typescript-eslint/no-explicit-any */
import { Schema, model } from 'mongoose';

export interface I3DModel {
    title: string;
    url: string;
    course: any;
    description: string;
}

const Model3DSchema = new Schema<I3DModel>({
    title: { type: String, required: true },
    url: { type: String, required: true },
    course: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
    description: { type: String }
});

export default model<I3DModel>('3DModel', Model3DSchema);
