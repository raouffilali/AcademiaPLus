// create a schema for the support form {Full Name, Email, Subject, Description}

import { model, Schema } from "mongoose";

export interface ISupportForm {
  fullName: string;
  email: string;
  subject: string;
  description: string;
}

const SupportFormSchema = new Schema<ISupportForm>({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  description: { type: String, required: true },
});

export default model<ISupportForm>("SupportForm", SupportFormSchema);
