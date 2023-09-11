// import { verify } from "jsonwebtoken";
// import User from "../models/Users/Student";

// class AuthenticationError extends Error {
//   statusCode: number; // Add a statusCode property

//   constructor(message = "Not authorized, Token failed", statusCode = 401) {
//     super(message);
//     this.name = "AuthenticationError"; // Set a custom name for this error
//     this.statusCode = statusCode;
//   }
// }

// export const authGuard = async (req, res, next) => {
//   if (
//     req.headers.authorization &&
//     req.headers.authorization.startsWith("Bearer")
//   ) {
//     try {
//       const token = req.headers.authorization.split(" ")[1];
//       const { id } = verify(token, process.env.JWT_SECRET);

//       req.user = await User.findById(id).select("-password");
//       next();
//     } catch (error) {
//       const authError = new AuthenticationError("Not authorized, Token failed");
//       next(authError);
//     }
//   } else {
//     const authError = new AuthenticationError("Not authorized, Token failed");
//     next(authError);
//   }
// };
// // Export the AuthenticationError class
// export { AuthenticationError as CustomError };

import { verify } from "jsonwebtoken";
import Student from "../models/Users/Student"; // Import the Student model
import Instructor from "../models/Users/Instractor"; // Import the Instructor model

class AuthenticationError extends Error {
  statusCode: number;

  constructor(message = "Not authorized, Token failed", statusCode = 401) {
    super(message);
    this.name = "AuthenticationError";
    this.statusCode = statusCode;
  }
}

export const authGuard = async (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const { id, role } = verify(token, process.env.JWT_SECRET);

      // Determine the model based on the user's role
      let userModel;
      if (role === "Student") {
        userModel = Student;
      } else if (role === "Instructor") {
        userModel = Instructor;
      } else {
        const authError = new AuthenticationError("Invalid role");
        return next(authError);
      }

      // Fetch the user from the database
      const user = await userModel.findById(id).select("-password");

      if (!user) {
        const authError = new AuthenticationError("User not found");
        return next(authError);
      }

      // Attach user data, including the role, to req.user
      req.user = { ...user._doc, role };

      next();
    } catch (error) {
      const authError = new AuthenticationError("Not authorized, Token failed");
      next(authError);
    }
  } else {
    const authError = new AuthenticationError("Not authorized, Token failed");
    next(authError);
  }
};
// Export the AuthenticationError class
export { AuthenticationError as CustomError };
