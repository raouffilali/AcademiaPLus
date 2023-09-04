import express from "express";
import { authGuard } from "../middleware/authMiddleware";
import {
  getUserById,
  registerUser,
  loginUser,
  userProfile,
  updateProfile,
  getUsers,
  updateProfilePicture,
  updatePassword,
  updateEmail,
} from "../controllers/Users/studentControllers";

const router = express.Router();

// router.route('/register').post(registerUser);
// router.route('/login').post(loginUser);
// router.route('/profile').get(authGuard, userProfile);
// router.route('/profile').put(authGuard, updateProfile);
// router.route('/profile/picture').put(authGuard, updateProfilePicture);
// router.route('/profile/password').put(authGuard, updatePassword);
// router.route('/profile/email').put(authGuard, updateEmail);
// router.route('/').get(getUsers);
// router.route('/:id').get(authGuard, getUserById);

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", authGuard, userProfile);
router.put("/updateProfile", authGuard, updateProfile);
router.put("/profile/password", authGuard, updatePassword);
router.put("/profile/email", authGuard, updateEmail);
router.put("/profile/picture", authGuard, updateProfilePicture);
router.get("/", getUsers);
router.get("/:id", authGuard, getUserById);

export default router;
