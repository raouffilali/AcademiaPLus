/* eslint-disable @typescript-eslint/no-unused-vars */
import uploadFiles from "../../middleware/uploadFilesMiddleware";
import uploadPicture from "../../middleware/uploadPictureMiddleware";
import Student from "../../models/Users/Student";
import { Course } from "../../models/Course/course";
import {
  fileRemover,
  filesRemover,
  generateCode,
  // generateOTP,
} from "../../utils/index";
// import sendPasswordResetEmailTemplate from "../../utils/resetviaEmail";
import formData from "form-data";
import Mailgun from "mailgun.js";
// import * as crypto from "crypto";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

// import fs from "fs";
import { messageVerificationEmail } from "../../utils/messageVerificationEmail";

//! import twilio from "twilio";

// Custom error class for endpoint not found
class NotFoundError extends Error {
  statusCode: number; // Add a statusCode property

  constructor(message = "Endpoint not found", statusCode = 404) {
    super(message);
    this.statusCode = statusCode;
  }
}

// ?WORKING

const registerUser = async (req, res, next) => {
  // ! TWILIO IS NOT WORKING
  // const ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
  // const AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;
  // const twilioClient = twilio(ACCOUNT_SID!, AUTH_TOKEN!);

  const API_KEY = process.env.MAILGUN_API_KEY;
  const DOMAIN = process.env.MAILGUN_DOMAIN;
  const mailgun = new Mailgun(formData);
  const client = mailgun.client({ username: "api", key: API_KEY! });
  try {
    const { firstName, lastName, email, phone, password } = req.body;

    // Validate input data
    if (!firstName || !lastName || !email || !password) {
      return res
        .status(400)
        .json({ message: "Full name, email and password are required" });
    }
    //Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/.test(password);
    // Validate password strength (regex) and it must be at least 8 characters long
    if (!passwordRegex || password.length < 8) {
      return res.status(400).json({
        message:
          "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character and must be at least 8 characters long",
      });
    }
    // validate phone number
    const phoneRegex = /^[0-9]{10}$/.test(phone);
    if (!phoneRegex) {
      return res.status(400).json({
        message: "Phone number must be a 10-digit number (ex:07-xx-xx-xx-xx).",
      });
    }

    // Check if the user already exists with the email or phone number
    const existingUser = await Student.findOne({
      $or: [{ email }, { phone }],
    });

    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    // Create a new user
    const newUser = await Student.create({
      firstName,
      lastName,
      email,
      phone,
      password,
    });

    // ! PHONE VERIFICATION IS NOT WORKING
    // if (phone) {
    //   const verificationOTP = generateOTP();
    //   newUser.verificatioOTP = verificationOTP;
    //   await newUser.save();
    //   const sendingPhone: string = "+15085910975";
    //   const recivingPhone: string = `+213${phone.slice(1)}`;

    //   await twilioClient.messages
    //     .create({
    //       body: `Your Academia+ verification code is ${verificationOTP}`,
    //       from: sendingPhone,
    //       // messagingServiceSid: "VA253423e0139f345075645ac99dfc51b4",
    //       to: recivingPhone,
    //     })
    //     .then((message) => {
    //       console.log(message);
    //       return res.status(201).json({
    //         message: "Please check your phone for verification instructions.",
    //       });
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
    // ! ! PHONE VERIFICATION IS NOT WORKING

    const verificationCode = generateCode(); // Implement a function to generate a random code.
    newUser.verificationCode = verificationCode;
    firstName;
    lastName;
    await newUser.save();

    // in production will be https://academia-plus.me/verify?code=${verificationCode}
    const verificationLink = `http://localhost:5000/api/student/verify?code=${verificationCode}`;
    // const htmlContent = fs.readFileSync( "../../utils/messageVerificationEmail.html", "utf8");
    const messageData = {
      from: "Academia+  <support@academia-plus.me>",
      to: email,
      subject: "Email Verification",
      html: messageVerificationEmail(verificationLink, firstName, lastName),
      // html : htmlContent
    };

    // Generate a JWT token
    const token = newUser.generateJWT();
    // request role from token

    await client.messages
      .create(DOMAIN!, messageData)
      .then((response) => {
        console.log(response);
        // Handle success

        // Respond with a sanitized user object (omit sensitive fields)
        const sanitizedUser = {
          _id: newUser._id,
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          email: newUser.email,
          phone: newUser.phone,
          verified: newUser.verified,
        };

        // Return the sanitized user data along with the token
        return res.status(201).json({
          user: sanitizedUser,
          token,
          message:
            "Registration successful. Please check your email for verification instructions.",
        });
      })
      .catch((error) => {
        console.error(error);
        // Handle the error
        return res
          .status(500)
          .json({ message: "Registration failed. Please try again later." });
      });
  } catch (error) {
    next(error);
  }
};
// --------------------------------------------------------------------------------------

// ?WORKING
// login User
const loginUser = async (req, res, next) => {
  try {
    const { identifier, password } = req.body;

    // Validate input data
    if (!identifier || !password) {
      return res
        .status(400)
        .json({ message: "(Email or Phone Number) and Password are required" });
    }

    // Check if the user exists by email or phone number
    const user = await Student.findOne({
      $or: [{ email: identifier }, { phone: identifier }],
    });

    if (!user) {
      throw new NotFoundError("Email/Phone Number does not exist", 404);
    }
    // Check if the user is verified
    if (!user.verified) {
      return res.status(401).json({
        message:
          "Email not verified. Please check your email for verification instructions.",
      });
    }

    if (await user.comparePassword(password)) {
      // Generate a JWT token
      const token = await user.generateJWT();

      // Respond with a sanitized user object (omit sensitive fields)
      const sanitizedUser = {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        avatar: user.avatar,
        email: user.email,
        phone: user.phone, // Include the phone number in the response if needed
        password: user.password,
        verified: user.verified,
      };
      // variable that stor what user used to login (email or phone number)
      let userIdentifier = "";
      // if user used email to login
      if (user.email === identifier) {
        userIdentifier = "Email";
      }
      // if user used phone number to login
      if (user.phone === identifier) {
        userIdentifier = "Phone number";
      }

      // Return the sanitized user data along with the token
      return res
        .status(201)
        .json({ user: sanitizedUser, token, userIdentifier });
    } else {
      throw new Error("Invalid email/phone number or Password");
    }
  } catch (error) {
    next(error);
  }
};
// --------------------------------------------------------------------------------------
// TODO:
// // Step 1: Send password reset email
// const sendPasswordResetEmail = async (req, res, next) => {
//   try {
//     const { email } = req.body;

//     // Generate a unique reset token
//     const resetToken = crypto.randomBytes(32).toString("hex");

//     // Find the user by their email
//     const user = await Student.findOne({ email });

//     if (!user) {
//       // User with the provided email does not exist
//       return res.status(404).json({ message: "User not found" });
//     }

//     // Set the reset token and expiration time in the user's document
//     user.resetPasswordToken = resetToken;
//     user.resetPasswordExpires = Date.now() + 3600000; // Token expires in 1 hour

//     // Save the updated user document
//     await user.save();

//     // Send the password reset email
//     await sendPasswordResetEmailTemplate(email, resetToken); // Implement this function to send the email

//     return res
//       .status(200)
//       .json({ message: "Password reset email sent", resetToken });
//   } catch (error) {
//     next(error);
//   }
// };
// // Step 2: Handle password reset form
// const resetPassword = async (req, res, next) => {
//   try {
//     const { token, newPassword } = req.body;

//     // Find the user by their reset token and check if it's still valid
//     const user = await Student.findOne({
//       resetPasswordToken: token,
//       resetPasswordExpires: { $gt: Date.now() },
//     });

//     if (!user) {
//       // Token is invalid or expired
//       return res.status(400).json({ message: "Invalid or expired token" });
//     }

//     // Update the user's password
//     user.password = newPassword;
//     user.resetPasswordToken = undefined;
//     user.resetPasswordExpires = undefined;

//     // Save the updated user document
//     await user.save();

//     return res.status(200).json({ message: "Password reset successful" });
//   } catch (error) {
//     next(error);
//   }
// };

const senEmailForPassword = async (req, res, next) => {
  const API_KEY = process.env.MAILGUN_API_KEY;
  const DOMAIN = process.env.MAILGUN_DOMAIN;
  const mailgun = new Mailgun(formData);
  const client = mailgun.client({ username: "api", key: API_KEY! });
  try {
    const { email } = req.body;
    const user = await Student.findOne({ email: email });

    if (!user) {
      // User with the provided email does not exist
      return res.status(404).json({ message: "User not found" });
    }

    // Generate a unique reset token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      {
        // expire in 2mn
        expiresIn: "5m",
      }
    );
    const verificationLink = `http://localhost:5173/reset-password/${user._id}/${token}`;
    // const htmlContent = fs.readFileSync( "../../utils/messageVerificationEmail.html", "utf8");
    const messageData = {
      from: "Academia+  <support@academia-plus.me>",
      to: email,
      subject: "Reset password",
      text: `Click the following link to reset your password: ${verificationLink}`,
    };

    await client.messages
      .create(DOMAIN!, messageData)
      .then((response) => {
        console.log(response);
        // Handle success

        // Respond with a sanitized user object (omit sensitive fields)
        const sanitizedUser = {
          _id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          phone: user.phone,
          verified: user.verified,
        };

        // Return the sanitized user data along with the token
        return res.status(201).json({
          user: sanitizedUser,
          token,
          message: "Email send succefully for reset your password",
        });
      })
      .catch((error) => {
        console.error(error);
        // Handle the error
        return res
          .status(500)
          .json({ message: "Reset failed. Please try again later." });
      });
  } catch (error) {
    next(error);
  }
};
const resetPassword = (req, res) => {
  const { id, token } = req.params;
  const { password } = req.body;

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.json({ Status: "Error with token" });
    } else {
      bcrypt
        .hash(password, 10)
        .then((hash) => {
          Student.findByIdAndUpdate({ _id: id }, { password: hash })
            .then((u) => res.send({ Status: "Success" }))
            .catch((err) => res.send({ Status: err }));
        })
        .catch((err) => res.send({ Status: err }));
    }
  });
};
// --------------------------------------------------------------------------------------
// ?Working
const logoutUser = async (req, res, next) => {
  try {
    const user = await Student.findById(req.user._id);
    if (user) {
      // Revoke the current JWT token by incrementing the tokenVersion
      user.tokenVersion += 1;
      await user.save();
      return res.status(201).json({ message: "Logout successfully" });
    }
  } catch (error) {
    next(error);
  }
};

// --------------------------------------------------------------------------------------

// ?WORKING
// get userProfile
const userProfile = async (req, res, next) => {
  try {
    const user = await Student.findById(req.user._id);
    if (user) {
      // Respond with a sanitized user object (omit sensitive fields)
      const sanitizedUser = {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        avatar: user.avatar,
        email: user.email,
        password: user.password,
        verified: user.verified,
        verificationCode: user.verificationCode,
        enrolledCourses: user.enrolledCourses,
        completedCourses: user.completedCourses,

        phone: user.phone,
        birthday: user.birthday,
        country: user.country,
        addressLine1: user.addressLine1,
        addressLine2: user.addressLine2,
        city: user.city,
        zipCode: user.zipCode,
        socialProfiles: user.socialProfiles,
        subscriptions: user.subscriptions,
        billingAddress: user.billingAddress,
      };
      // Return the sanitized user data along with the token
      return res.status(201).json({ user: sanitizedUser });
    } else {
      throw new NotFoundError("User not found", 404);
    }
  } catch (error) {
    next(error);
  }
};
// --------------------------------------------------------------------------------------

// ?WORKING
// update userProfile based on Student model
const updateProfile = async (req, res, next) => {
  try {
    const user = await Student.findById(req.user._id);
    if (user) {
      const {
        firstName,
        lastName,
        phone,
        birthday,
        country,
        addressLine1,
        addressLine2,
        city,
        zipCode,
      } = req.body;
      if (firstName) {
        user.firstName = firstName;
      }
      if (lastName) {
        user.lastName = lastName;
      }
      if (phone) {
        user.phone = phone;
      }
      if (birthday) {
        user.birthday = birthday;
      }
      if (country) {
        user.country = country;
      }
      if (addressLine1) {
        user.addressLine1 = addressLine1;
      }
      if (addressLine2) {
        user.addressLine2 = addressLine2;
      }
      if (city) {
        user.city = city;
      }
      if (zipCode) {
        user.zipCode = zipCode;
      }
      await user.save();
      // Respond with a sanitized user object (omit sensitive fields)
      const sanitizedUser = {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        avatar: user.avatar,
        email: user.email,
        password: user.password,
        verified: user.verified,
        verificationCode: user.verificationCode,
        enrolledCourses: user.enrolledCourses,
        completedCourses: user.completedCourses,
        phone: user.phone,
        birthday: user.birthday,
        country: user.country,
        addressLine1: user.addressLine1,
        addressLine2: user.addressLine2,
        city: user.city,
        zipCode: user.zipCode,
        socialProfiles: user.socialProfiles,
        subscriptions: user.subscriptions,
        billingAddress: user.billingAddress,
      };
      // Return the sanitized user data along with the token
      return res.status(201).json({ user: sanitizedUser });
    }
  } catch (error) {
    next(error);
  }
};
// --------------------------------------------------------------------------------------

// ?WORKING

const updatePassword = async (req, res, next) => {
  try {
    const user = await Student.findById(req.user._id);
    if (user) {
      const { password } = req.body;
      if (password) {
        user.password = password;
      }
      //   password must contain at least one lowercase letter, one uppercase letter, one number, and one special character
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/.test(password);
      // Validate password strength (regex) and it must be at least 8 characters long
      if (!passwordRegex || password.length < 8) {
        return res.status(400).json({
          message:
            "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character and must be at least 8 characters long",
        });
      }
      await user.save();

      //   if password is updated, then console.log success message
      console.log("Password updated successfully");
      // Respond with a sanitized user object (omit sensitive fields)
      const sanitizedUser = {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        avatar: user.avatar,
        email: user.email,
        password: user.password,
        verified: user.verified,
        verificationCode: user.verificationCode,
        enrolledCourses: user.enrolledCourses,
        completedCourses: user.completedCourses,

        phone: user.phone,
        birthday: user.birthday,
        country: user.country,
        addressLine1: user.addressLine1,
        addressLine2: user.addressLine2,
        city: user.city,
        zipCode: user.zipCode,
        socialProfiles: user.socialProfiles,
        subscriptions: user.subscriptions,
        billingAddress: user.billingAddress,
      };
      // Return the sanitized user data along with the token
      return res.status(201).json({ user: sanitizedUser });
    }
  } catch (error) {
    next(error);
  }
};

// --------------------------------------------------------------------------------------
// ?WORKING
// update Email and send verification code
const updateEmail = async (req, res, next) => {
  const API_KEY = process.env.MAILGUN_API_KEY;
  const DOMAIN = process.env.MAILGUN_DOMAIN;

  const mailgun = new Mailgun(formData);
  const client = mailgun.client({ username: "api", key: API_KEY! });
  try {
    const user = await Student.findById(req.user._id);
    if (user) {
      const { email } = req.body;
      //   Validate input data
      if (!email) {
        return res.status(400).json({ message: "Email is required" });
      }

      if (email) {
        // Revoke the current JWT token by incrementing the tokenVersion
        user.tokenVersion += 1;
        user.email = email;
        user.verified = false; // Mark the email as unverified after updating
      }
      // validate updated email
      const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email);
      if (!emailRegex) {
        return res.status(400).json({
          message: "Email must be a valid email address.",
        });
      }
      // Generate a new verification code
      const verificationCode = generateCode(); // Implement your code to generate a new verification code
      user.verificationCode = verificationCode;

      await user.save();
      // in production will be https://academia-plus.me/verify?code=${verificationCode}
      const verificationLink = `http://localhost:5000/api/student/verify?code=${verificationCode}`;
      // const htmlContent = fs.readFileSync( "../../utils/messageVerificationEmail.html", "utf8");

      const messageData = {
        from: "Academia+ Platform <support@academia-plus.me>",
        to: email,
        subject: "Email Verification",
        text: `Click the following link to verify your email: ${verificationLink}`,
        // html: htmlContent
      };
      await client.messages.create(DOMAIN!, messageData);

      // Respond with a sanitized user object (omit sensitive fields)
      const sanitizedUser = {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        avatar: user.avatar,
        email: user.email,
        password: user.password,
        verified: user.verified,
        verificationCode: user.verificationCode,
        enrolledCourses: user.enrolledCourses,
        completedCourses: user.completedCourses,

        phone: user.phone,
        birthday: user.birthday,
        country: user.country,
        addressLine1: user.addressLine1,
        addressLine2: user.addressLine2,
        city: user.city,
        zipCode: user.zipCode,
        socialProfiles: user.socialProfiles,
        subscriptions: user.subscriptions,
        billingAddress: user.billingAddress,
      };
      // Return the sanitized user data along with the token
      return res.status(201).json({
        user: sanitizedUser,
        message:
          "Email updated successfully. Please check your email for verification instructions.",
      });
    }
  } catch (error) {
    next(error);
  }
};

// --------------------------------------------------------------------------------------
// ?WORKING
// get all users function only if user is authorized
const getUsers = async (req, res, next) => {
  try {
    const users = await Student.find({});
    if (users) {
      return res.status(201).json(users);
    } else {
      throw new NotFoundError("Users not found", 404);
    }
  } catch (error) {
    next(error);
  }
};

// --------------------------------------------------------------------------------------
// ?WORKING
const getUserById = async (req, res, next) => {
  try {
    const user = await Student.findById(req.params.id);
    if (user) {
      return res.status(201).json(user);
    } else {
      throw new NotFoundError("User not found", 404);
    }
  } catch (error) {
    next(error);
  }
};

const uploadDirectoies = {
  files: "files",
  multiple_files: "multiple_files",
  multiple_vides: "multiple_videos",
  pictures: "pictures",
  videos: "videos",
  audios: "audios",
};

// --------------------------------------------------------------------------------------
// ?WORKING
// updateProfilePicture
const updateProfilePicture = async (req, res, next) => {
  try {
    const upload = uploadPicture.single("profilePicture");
    upload(req, res, async (err) => {
      if (err) {
        const error = new Error(
          "An unknown error occurred when uploading!" + err.message
        );
        return next(error);
      } else {
        // everything went fine
        if (req.file) {
          const updatedUser = await Student.findById(req.user._id);
          const filename = updatedUser!.avatar;
          if (filename) {
            fileRemover(filename, uploadDirectoies.pictures);
          }
          updatedUser!.avatar = req.file.filename;
          await updatedUser!.save();
          // Generate a JWT token
          const token = await updatedUser!.generateJWT();

          // Respond with a sanitized user object (omit sensitive fields)
          const sanitizedUser = {
            _id: updatedUser!._id,
            avatar: updatedUser!.avatar,
            firstName: updatedUser!.firstName,
            lastName: updatedUser!.lastName,
            email: updatedUser!.email,
            password: updatedUser!.password,
            verified: updatedUser!.verified,
          };
          // Return the sanitized user data along with the token
          return res.status(201).json({ user: sanitizedUser, token });
        } else {
          const updatedUser = await Student.findById(req.user._id);
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const filename = updatedUser!.avatar;
          updatedUser!.avatar = "";
          await updatedUser!.save();
          fileRemover(filename, uploadDirectoies.pictures);

          // Generate a JWT token
          const token = await updatedUser!.generateJWT();

          // Respond with a sanitized user object (omit sensitive fields)
          const sanitizedUser = {
            _id: updatedUser!._id,
            avatar: updatedUser!.avatar,
            firstName: updatedUser!.firstName,
            lastName: updatedUser!.lastName,
            email: updatedUser!.email,
            password: updatedUser!.password,
            verified: updatedUser!.verified,
          };
          // Return the sanitized user data along with the token
          return res.status(201).json({ user: sanitizedUser, token });
        }
      }
    });
  } catch (error) {
    next(error);
  }
};
// --------------------------------------------------------------------------------------
// ?WORKING
const updateCoverPicture = async (req, res, next) => {
  try {
    const upload = uploadPicture.single("coverPicture");
    upload(req, res, async (err) => {
      if (err) {
        const error = new Error(
          "An unknown error occurred when uploading!" + err.message
        );
        return next(error);
      } else {
        // everything went fine
        if (req.file) {
          const updatedUser = await Student.findById(req.user._id);
          const filename = updatedUser!.coverPicture;
          if (filename) {
            fileRemover(filename, uploadDirectoies.pictures);
          }
          updatedUser!.coverPicture = req.file.filename;
          await updatedUser!.save();
          // Generate a JWT token
          const token = await updatedUser!.generateJWT();

          // Respond with a sanitized user object (omit sensitive fields)
          const sanitizedUser = {
            _id: updatedUser!._id,
            coverPicture: updatedUser!.coverPicture,
            firstName: updatedUser!.firstName,
            lastName: updatedUser!.lastName,
            email: updatedUser!.email,
            password: updatedUser!.password,
            verified: updatedUser!.verified,
          };
          // Return the sanitized user data along with the token
          return res.status(201).json({ user: sanitizedUser, token });
        } else {
          const updatedUser = await Student.findById(req.user._id);
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const filename = updatedUser!.coverPicture;
          updatedUser!.coverPicture = "";
          await updatedUser!.save();
          fileRemover(filename, uploadDirectoies.pictures);

          // Generate a JWT token
          const token = await updatedUser!.generateJWT();

          // Respond with a sanitized user object (omit sensitive fields)
          const sanitizedUser = {
            _id: updatedUser!._id,
            coverPicture: updatedUser!.coverPicture,
            firstName: updatedUser!.firstName,
            lastName: updatedUser!.lastName,
            email: updatedUser!.email,
            password: updatedUser!.password,
            verified: updatedUser!.verified,
          };
          // Return the sanitized user data along with the token
          return res.status(201).json({ user: sanitizedUser, token });
        }
      }
    });
  } catch (error) {
    next(error);
  }
};

// --------------------------------------------------------------------------------------
// ?WORKING
// upload multiple files
const uploadMultipleFiles = async (req, res, next) => {
  try {
    const upload = uploadFiles.array("multipleFiles", 10);
    upload(req, res, async (err) => {
      if (err) {
        const error = new Error(
          "An unknown error occurred when uploading!" + err.message
        );
        return next(error);
      } else {
        // everything went fine
        if (req.files) {
          const updatedUser = await Student.findById(req.user._id);
          const filename = updatedUser!.multipleFileUpload;
          if (filename) {
            filesRemover(filename, uploadDirectoies.multiple_files);
          }
          updatedUser!.multipleFileUpload = req.files.map(
            (file) => file.filename
          );
          await updatedUser!.save();
          // Generate a JWT token
          const token = await updatedUser!.generateJWT();

          // Respond with a sanitized user object (omit sensitive fields)
          const sanitizedUser = {
            _id: updatedUser!._id,
            multipleFileUpload: updatedUser!.multipleFileUpload,
            firstName: updatedUser!.firstName,
            lastName: updatedUser!.lastName,
            email: updatedUser!.email,
            password: updatedUser!.password,
            verified: updatedUser!.verified,
          };
          // Return the sanitized user data along with the token
          return res.status(201).json({ user: sanitizedUser, token });
        } else {
          const updatedUser = await Student.findById(req.user._id);
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const filename = updatedUser!.multipleFileUpload;
          updatedUser!.multipleFileUpload = [];
          await updatedUser!.save();
          filesRemover(filename, uploadDirectoies.multiple_files);

          // Generate a JWT token
          const token = await updatedUser!.generateJWT();

          // Respond with a sanitized user object (omit sensitive fields)
          const sanitizedUser = {
            _id: updatedUser!._id,
            multipleFileUpload: updatedUser!.multipleFileUpload,
            firstName: updatedUser!.firstName,
            lastName: updatedUser!.lastName,
            email: updatedUser!.email,
            password: updatedUser!.password,
            verified: updatedUser!.verified,
          };
          // Return the sanitized user data along with the token
          return res.status(201).json({ user: sanitizedUser, token });
        }
      }
    });
  } catch (error) {
    next(error);
  }
};
// controllers/studentController.js

// Enroll a student in a course
const enrollInCourse = async (req, res) => {
  try {
    const { studentId, courseId } = req.params;

    // Find the student by ID
    const student = await Student.findById(studentId);

    // Find the course by ID
    const course = await Course.findById(courseId);

    // Check if both student and course exist
    if (!student || !course) {
      return res.status(404).json({ message: "Student or course not found." });
    }

    // Check if the student is already enrolled in the course
    if (student.enrolledCourses.includes(courseId)) {
      return res
        .status(400)
        .json({ message: "Student is already enrolled in this course." });
    }

    // Enroll the student in the course
    student.enrolledCourses.push(courseId);
    await student.save();

    return res
      .status(200)
      .json({ message: "Student enrolled in the course successfully." });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error." });
  }
};
// course progress function

const courseProgress = async (req, res, next) => {
  try {
    const { studentId, courseId } = req.params;
    const { progress } = req.body;

    // Find the student by ID
    const student = await Student.findById(studentId);

    // Find the course by ID
    const course = await Course.findById(courseId);

    // Check if both student and course exist
    if (!student || !course) {
      return res.status(404).json({ message: "Student or course not found." });
    }

    // Check if the student is already enrolled in the course
    if (!student.enrolledCourses.includes(courseId)) {
      return res
        .status(400)
        .json({ message: "Student is not enrolled in this course." });
    }

    // Update the student's course progress
    student.courseProgress.push({ courseId, progress });
    await student.save();

    return res
      .status(200)
      .json({ message: "Student progress updated successfully." });
  } catch (error) {
    next(error);
  }
};

// course purchase function
const purchaseCourse = async (req, res) => {
  try {
    const { studentId, courseId } = req.params;

    // Find the student by ID
    const student = await Student.findById(studentId);

    // Find the course by ID
    const course = await Course.findById(courseId);

    // Check if both student and course exist
    if (!student || !course) {
      return res.status(404).json({ message: "Student or course not found." });
    }

    // Check if the student has already purchased the course
    if (student.purchasedCourses.includes(courseId)) {
      return res
        .status(400)
        .json({ message: "Student has already purchased this course." });
    }

    // Purchase the course
    student.purchasedCourses.push(courseId);
    await student.save();

    return res
      .status(200)
      .json({ message: "Student purchased the course successfully." });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error." });
  }
};

// function to allow students to mark courses as completed,updating the completedCourses array. and to view their completed courses
const completeCourse = async (req, res, next) => {
  try {
    const { studentId, courseId } = req.params;

    // Find the student by ID
    const student = await Student.findById(studentId);

    // Find the course by ID
    const course = await Course.findById(courseId);

    // Check if both student and course exist
    if (!student || !course) {
      return res.status(404).json({ message: "Student or course not found." });
    }

    // Check if the student has already completed the course
    if (student.completedCourses.includes(courseId)) {
      return res
        .status(400)
        .json({ message: "Student has already completed this course." });
    }

    // Mark the course as completed
    student.completedCourses.push(courseId);
    await student.save();

    return res
      .status(200)
      .json({ message: "Student completed the course successfully." });
  } catch (error) {
    next(error);
  }
};

export {
  getUserById,
  registerUser,
  loginUser,
  userProfile,
  updateProfile,
  getUsers,
  updateProfilePicture,
  updatePassword,
  updateEmail,
  updateCoverPicture,
  uploadMultipleFiles,
  enrollInCourse,
  courseProgress,
  purchaseCourse,
  completeCourse,
  logoutUser,
  // sendPasswordResetEmail,
  // resetPassword,
  senEmailForPassword,
  resetPassword,
};
