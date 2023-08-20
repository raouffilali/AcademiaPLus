// create a schema for the invoice

import { Schema, model } from "mongoose";

export interface IInvoice {
  invoiceNumber: string;
  invoiceDate: Date;
  dueDate: Date;
  studentId: string;
  studentName: string;
  studentEmail: string;
  studentPhone: string;
  studentAddress: string;
  studentCity: string;
  studentState: string;
  studentCountry: string;
  studentZipCode: string;
  courseId: string;
  courseName: string;
  coursePrice: number;
  courseDescription: string;
  courseDuration: number;
  total: number;
  tax: number;
  subTotal: number;
  paid: boolean;
  paidOn: Date;
  paymentMethod: string;
  paymentMethodCity: string;
  paymentMethodState: string;
  paymentMethodCountry: string;
  createdAt: Date;
  updatedAt: Date;
}

const InvoiceSchema = new Schema<IInvoice>({
  invoiceNumber: { type: String, unique: true },
  invoiceDate: { type: Date },
  dueDate: { type: Date },
  studentId: { type: String },
  studentName: { type: String },
  studentEmail: { type: String },
  studentPhone: { type: String },
  studentAddress: { type: String },
  studentCity: { type: String },
  studentState: { type: String },
  studentCountry: { type: String },
  studentZipCode: { type: String },
  courseId: { type: String },
  courseName: { type: String },
  coursePrice: { type: Number },
  courseDescription: { type: String },
  courseDuration: { type: Number },
  total: { type: Number },
  tax: { type: Number },
  subTotal: { type: Number },
  paid: { type: Boolean },
  paidOn: { type: Date },
  paymentMethod: { type: String },
  paymentMethodCity: { type: String },
  paymentMethodState: { type: String },
  paymentMethodCountry: { type: String },
  createdAt: { type: Date },
  updatedAt: { type: Date },
});

export default model<IInvoice>("Invoice", InvoiceSchema);
