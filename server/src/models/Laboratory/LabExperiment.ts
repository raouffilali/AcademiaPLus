/* eslint-disable @typescript-eslint/no-explicit-any */
import { Schema, model } from 'mongoose';

export interface ILabExperiment {
    title: string;
    description: string;
    lab: any;
    modelURL: string;
}

const LabExperimentSchema = new Schema<ILabExperiment>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    lab: { type: Schema.Types.ObjectId, ref: 'Lab', required : true},
    modelURL: { type: String, required: true } // Url of the 3D model used in the experiment
});

export default model<ILabExperiment>('LabExperiment', LabExperimentSchema);
