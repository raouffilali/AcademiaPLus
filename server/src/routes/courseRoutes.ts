import checkInstructorRole from "../middleware/checkInstructorRole";
import express from "express";
import {
  createCourse,
  createSection,
  createLecture,
  getAllCourses,
  getCourse,
  updateSectionTitle,
  deleteLectureFromSection,
  updateLecture,
  deleteSectionFromCourse,
  deleteCourse,
} from "../controllers/courseControllers";

const router = express.Router();

// Create a new course
router.post("/course",  createCourse);
// Create a new section within a course
router.post("/courses/:courseId/sections", checkInstructorRole, createSection);
// Create a new lecture within a section
router.post(
  "/courses/:courseId/sections/:sectionId/lectures",
  checkInstructorRole,
  createLecture
);
// Get all courses
router.get("/courses", checkInstructorRole, getAllCourses);
// Get a single course
router.get("/courses/:courseId", checkInstructorRole, getCourse);
// Update a section's title
router.put(
  "/courses/:courseId/sections/:sectionId",
  checkInstructorRole,
  updateSectionTitle
);
// Delete a lecture from a section
router.delete(
  "/courses/:courseId/sections/:sectionId/lectures/:lectureId",
  checkInstructorRole,
  deleteLectureFromSection
);
// Update lecture properties
router.put(
  "/courses/:courseId/sections/:sectionId/lectures/:lectureId",
  checkInstructorRole,
  updateLecture
);
// Delete a section from a course
router.delete(
  "/courses/:courseId/sections/:sectionId",
  checkInstructorRole,
  deleteSectionFromCourse
);
// Delete a course
router.delete("/courses/:courseId", checkInstructorRole, deleteCourse);

export default router;
