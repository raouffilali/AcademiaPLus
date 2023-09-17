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
router.post("/course/:courseId/sections",  createSection);
// Create a new lecture within a section
router.post(
  "/course/:courseId/sections/:sectionId/lectures",

  createLecture
);
// Get all courses
router.get("/all-courses", getAllCourses);
// Get a single course
router.get("/course/:courseId", getCourse);
// Update a section's title
router.put(
  "/course/:courseId/sections/:sectionId",

  updateSectionTitle
);
// Delete a lecture from a section
router.delete(
  "/course/:courseId/sections/:sectionId/lectures/:lectureId",

  deleteLectureFromSection
);
// Update lecture properties
router.put(
  "/course/:courseId/sections/:sectionId/lectures/:lectureId",

  updateLecture
);
// Delete a section from a course
router.delete(
  "/course/:courseId/sections/:sectionId",

  deleteSectionFromCourse
);
// Delete a course
router.delete("/course/:courseId",  deleteCourse);

export default router;
