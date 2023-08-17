import { Schema, model } from 'mongoose';

export interface ICategory {
    name: string;
    description: string;
}

const CategorySchema = new Schema<ICategory>({
    name: { type: String, required: true },
    description: { type: String, required: true }
});

export default model<ICategory>('Category', CategorySchema);
