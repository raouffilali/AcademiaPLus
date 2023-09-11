import { Model, Schema, model } from "mongoose";
import { hash, compare } from "bcrypt";
import { sign } from "jsonwebtoken";

export interface IStudent {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  avatar: string;
  coverPicture: string;
  verified: boolean;
  phoneVerified : boolean;
  verificationCode: number | undefined;
  verificatioOTP : number | undefined;
  enrolledCourses: string[];
  purchasedCourses: string[];
  courseProgress: [{ courseId: string; progress: number }];
  completedCourses: [{ courseId: string; completedOn: Date }];
  phone: string;
  birthday: Date;
  country: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  zipCode: string;
  socialProfiles: {
    twitter?: string;
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    [key: string]: string | undefined;
  };
  //   subscription field has start on date and price and access and next billing date
  subscriptions: string[];

  billingAddress: {
    addressLine1: string;
    addressLine2?: string;
    city: string;
    zipCode: string;
    country: string;
  };
  multipleFileUpload: [];
  generateJWT(): string;
  tokenVersion: number;
  comparePassword(enteredPassword: string): Promise<boolean>;
}

const userSchema = new Schema<IStudent>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: {
    type: String,
    unique: true,
    required: true,
    validate: {
      validator: (value: string) =>
        /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(value),
      message: "Email must be a valid email address.",
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    validate: {
      validator: (value: string) =>
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/.test(value),
      message:
        "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character.",
    },
  },
  avatar: { type: String },
  coverPicture: { type: String },
  verified: { type: Boolean, default: false },
  phoneVerified : { type: Boolean, default: false },
  verificationCode: { type: Number },
  verificatioOTP : { type: Number },
  enrolledCourses: [{ type: Schema.Types.ObjectId, ref: 'Course' }],
  courseProgress: [{ courseId: { type: Schema.Types.ObjectId, ref: 'Course' }, progress: Number }],
  purchasedCourses: [{ type: Schema.Types.ObjectId, ref: 'Course' }],
  completedCourses: [{ courseId: { type: Schema.Types.ObjectId, ref: 'Course' }, completedOn: Date }],
  phone: {
    type: String,
    required: false,
    unique: true,
    validate: {
      // password must contain 10 digits and start with 07 or 07 or 05
      validator: (value: string) => /^(07|07|05)[0-9]{8}$/.test(value),
      message:
        "Phone number must be a 10-digit number and start with 07,06,05.",
    },
  },
  birthday: { type: Date },
  country: { type: String },
  addressLine1: { type: String },
  addressLine2: { type: String },
  city: { type: String },
  zipCode: {
    type: String,

    validate: {
      validator: (value: string) => /^[0-9]{5}$/.test(value),
      message: "Zip code must be a 5-digit number.",
    },
  },
  socialProfiles: {
    twitter: { type: String },
    facebook: { type: String },
    instagram: { type: String },
    linkedin: { type: String },
  },
  subscriptions: [{ type: String }],
  billingAddress: {
    addressLine1: { type: String },
    addressLine2: { type: String },
    city: { type: String },
    zipCode: {
      type: String,
      validate: {
        validator: (value: string) => /^[0-9]{5}$/.test(value),
        message: "Zip code must be a 5-digit number.",
      },
    },
    country: { type: String },
    multipleFileUpload: [{ type: String }],
  },
  tokenVersion: { type: Number, default: 0 },
});

// hash the password
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await hash(this.password, 10);
    return next();
  }
  return next();
});

// Define the methods on the schema
userSchema.methods.generateJWT = async function (): Promise<string> {
  return await sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

// compare Password

userSchema.methods.comparePassword = async function (
  enteredPassword: string
): Promise<boolean> {
  return await compare(enteredPassword, this.password);
};

const Student: Model<IStudent> = model<IStudent>("Student", userSchema);

export default Student;
