/* eslint-disable @typescript-eslint/no-explicit-any */
import { Schema, model } from 'mongoose';

export interface IProgress {
    user: any;
    course: any;
    currentLesson: any;
    completed: boolean;
}

const ProgressSchema = new Schema<IProgress>({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    course: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
    currentLesson: { type: Schema.Types.ObjectId, ref: 'Lesson', required: true },
    completed: { type: Boolean, default: false }
});

export default model<IProgress>('Progress', ProgressSchema);
