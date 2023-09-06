import express from "express";
import { authGuard } from "../middleware/authMiddleware";
import  verifyEmail  from "../middleware/verifyEmail";
import {
  getUserById,
  registerUser,
  loginUser,
  userProfile,
  updateProfile,
  // getUsers,
  updateProfilePicture,
  updatePassword,
  updateEmail,
  updateCoverPicture,
  uploadMultipleFiles,
} from "../controllers/Users/studentControllers";

const router = express.Router();

router.post("/register", registerUser);
router.get("/verify", verifyEmail);
router.post("/login", loginUser);
router.get("/profile", authGuard, userProfile);
router.put("/updateProfile", authGuard, updateProfile);
router.put("/profile/password", authGuard, updatePassword);
router.put("/profile/email", authGuard, updateEmail);
router.put("/profile/picture", authGuard, updateProfilePicture);
router.put("/profile/cover", authGuard, updateCoverPicture);
router.post("/profile/files-upload", authGuard, uploadMultipleFiles);
// router.get("/", getUsers);
router.get("/:id", authGuard, getUserById);

export default router;
