import { Request, Response, Router } from "express";
import { MongoClient } from "mongodb";
import passport from "passport";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const User = require("../models/User");

const router = Router();

// Signup route
router.post("/signup", async (req: Request, res: Response) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    // Check if user already exists
    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new User object
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();

    return res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to create user" });
  }
});

// Login route
router.post("/login", (req: Request, res: Response, next) => {
  passport.authenticate("local", { session: false }, (err, user) => {
    if (err || !user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Generate a JWT token
    const token = jwt.sign(
      {
        userId: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      },
      process.env.JWT_SECRET
    );

    // Send the token and user data to the client
    return res.status(200).json({ token, user: { id: user._id, name: user.firstName + " " + user.lastName, email: user.email } });
  })(req, res, next);
});

export default router;
