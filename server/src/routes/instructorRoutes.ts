import express from "express";
import { authGuard } from "../middleware/authMiddleware";
import verifyEmailInstructor from "../middleware/verifyEmailInstructor";

import {
    getUserById,
    // registerUser,
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
    completeCourse,
    courseProgress,
    purchaseCourse,
    logoutUser,
    // sendPasswordResetEmail,
    // resetPassword,
    senEmailForPassword,
    resetPassword,
    uploadSingleFile,

    registerInstructorWithFile


  } from '../controllers/Users/instractorControllers'

  const router = express.Router();


router.post("/instructor-register", registerInstructorWithFile);
router.get("/verify", verifyEmailInstructor);
router.post('/forgot-password', senEmailForPassword);
router.post('/reset-password/:id/:token', resetPassword);
router.post("/instructor-login", loginUser);
router.post("/logout",authGuard, logoutUser);
router.get("/profile", authGuard, userProfile);
router.put("/updateProfile", authGuard, updateProfile);
router.put("/profile/password", authGuard, updatePassword);
router.put("/profile/email", authGuard, updateEmail);
router.put("/profile/picture", authGuard, updateProfilePicture);
router.put("/profile/cover", authGuard, updateCoverPicture);
router.post("/profile/files-upload", authGuard, uploadMultipleFiles);
router.post("/profile/file-upload",authGuard, uploadSingleFile);
router.get("/", getUsers);
router.get("/:id", authGuard, getUserById);
router.post("/enroll/:studentId/:courseId", authGuard, enrollInCourse);
router.post("/complete/:studentId/:courseId", authGuard, completeCourse);
router.get("/progress/:studentId/:courseId", authGuard, courseProgress);
router.post("/purchase/:studentId/:courseId", authGuard, purchaseCourse);

// ! NOT WORKING YET
// router.post("/verifyOTP", verifyPhone);

export default router;
