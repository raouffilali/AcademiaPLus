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
router.post("/courses", createCourse);
// Create a new section within a course
router.post("/courses/:courseId/sections", createSection);
// Create a new lecture within a section
router.post("/courses/:courseId/sections/:sectionId/lectures", createLecture);
// Get all courses
router.get("/courses", getAllCourses);
// Get a single course
router.get("/courses/:courseId", getCourse);
// Update a section's title
router.put("/courses/:courseId/sections/:sectionId", updateSectionTitle);
// Delete a lecture from a section
router.delete(
  "/courses/:courseId/sections/:sectionId/lectures/:lectureId",
  deleteLectureFromSection
);
// Update lecture properties
router.put(
  "/courses/:courseId/sections/:sectionId/lectures/:lectureId",
  updateLecture
);
// Delete a section from a course
router.delete(
  "/courses/:courseId/sections/:sectionId",
  deleteSectionFromCourse
);
// Delete a course
router.delete("/courses/:courseId", deleteCourse);



export default router;
