import uploadPicture from "../../middleware/uploadPictureMiddleware";
import Student from "../../models/Users/Student";
import fileRemover from "../../utils/fileRemover";

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
  try {
    const { firstName, lastName, email, password } = req.body;

    // Validate input data
    if (!firstName || !lastName || !email || !password) {
      return res
        .status(400)
        .json({ message: "Full name, email, and password are required" });
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

    // Check if the user already exists
    const existingUser = await Student.findOne({ email });
    if (existingUser) {
      throw new Error("User already exists");
    }

    // Create a new user
    const newUser = await Student.create({
      firstName,
      lastName,
      email,
      password,
    });

    // Generate a JWT token
    const token = await newUser.generateJWT();

    // Respond with a sanitized user object (omit sensitive fields)
    const sanitizedUser = {
      _id: newUser._id,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      avatar: newUser.avatar,
      email: newUser.email,
      password: newUser.password,
      verified: newUser.verified,
    };

    // Return the sanitized user data along with the token
    return res.status(201).json({ user: sanitizedUser, token });
    console.log(newUser);
  } catch (error) {
    next(error);
  }
};
// --------------------------------------------------------------------------------------

// ?WORKING
// login User
const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Validate input data
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and Password are required" });
    }

    // Check if the user does not exists
    const user = await Student.findOne({ email });
    if (!user) {
      throw new NotFoundError("Email does not exist", 404);
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
        password: user.password,
        verified: user.verified,
      };
      // Return the sanitized user data along with the token
      return res.status(201).json({ user: sanitizedUser, token });
    } else {
      throw new Error("Invalid email or Password");
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
        achievements: user.achievements,
        progress: user.progress,
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
        achievements: user.achievements,
        progress: user.progress,
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
        achievements: user.achievements,
        progress: user.progress,
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
  try {
    const user = await Student.findById(req.user._id);
    if (user) {
      const { email } = req.body;
      //   Validate input data
      if (!email) {
        return res.status(400).json({ message: "Email is required" });
      }

      if (email) {
        user.email = email;
      }
      // validate updated email
      const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email);
      if (!emailRegex) {
        return res.status(400).json({
          message: "Email must be a valid email address.",
        });
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
        achievements: user.achievements,
        progress: user.progress,
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
};
