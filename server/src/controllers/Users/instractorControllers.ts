// controllers/studentController.js

import Student from "../../models/Users/Student";
import { Course } from "../../models/Course/course";

// Enroll a student in a course
export const enrollInCourse = async (req, res) => {
  try {
    const { studentId, courseId } = req.body;

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
