/* eslint-disable @typescript-eslint/no-explicit-any */

import { Schema, model } from 'mongoose';

export interface ILab {
    title: string;
    description: string;
    course: any;
    experiments: Array<string>;
}

const LabSchema = new Schema<ILab>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    course: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
    experiments: [{ type: Schema.Types.ObjectId, ref: 'LabExperiment' }]
});

export default model<ILab>('Lab', LabSchema);
