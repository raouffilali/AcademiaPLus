import { Request, Response } from "express";
import { Course, Section, Lecture } from "../models/Course/course";
import Instructor from "../models/Users/Instractor";

// create a new course
const createCourse = async (req: Request, res: Response) => {
  const {
    title,
    category,
    level,
    description,
    coverImage,
    promoVideo,
    sections,
    reviews,
    price,
  } = req.body;

  // Extract instructor's information from JWT token
  const token = req.headers.authorization; // Assuming you pass the JWT token in the Authorization header
  const decodedToken = JSON.parse(atob(token!.split('.')[1]));
  const instructorId = decodedToken.id; // Assuming the instructor's ID is in the token

  const course = new Course({
    title,
    category,
    level,
    description,
    coverImage,
    promoVideo,
    sections,
    reviews,
    price,
    instructore: instructorId, // Associate the course with the instructor
  });

  try {
    const createdCourse = await course.save();

    // Update the instructor's createdCourses array
    await Instructor.findByIdAndUpdate(
      instructorId,
      { $push: { createdCourses: createdCourse._id } },
      { new: true }
    );

    res.status(201).json(createdCourse);
  } catch (error) {
    console.error('Error creating course:', error);
    res.status(500).json({ error: 'Course creation failed' });
  }
};


// Create a new section within a course
const createSection = async (req: Request, res: Response) => {
  try {
    const courseId = req.params.courseId;
    const sectionData = req.body;
    const course = await Course.findById(courseId);

    if (!course) {
      return res.status(404).json({ error: "Course not found." });
    }

    const newSection = new Section({
      course: courseId,
      ...sectionData,
    });

    const savedSection = await newSection.save();

    // Add the savedSection to the course's sections
    course.sections.push(savedSection);

    // Save the course to update the reference
    await course.save();

    res.status(201).json(savedSection);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while creating the section." });
  }
};

// Create a new lecture within a section
const createLecture = async (req: Request, res: Response) => {
  try {
    const courseId = req.params.courseId;
    const sectionId = req.params.sectionId;
    const lectureData = req.body;
    const course = await Course.findById(courseId);

    if (!course) {
      return res.status(404).json({ error: "Course not found." });
    }

    const section = await Section.findById(sectionId);

    if (!section) {
      return res.status(404).json({ error: "Section not found." });
    }

    const newLecture = new Lecture({
      ...lectureData,
      section: sectionId, // Associate the lecture with the section
    });

    const savedLecture = await newLecture.save();

    // Add the savedLecture to the section's lectures
    section.lectures.push(savedLecture);

    // Save the section to update the reference
    await section.save();

    res.status(201).json(savedLecture);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while creating the lecture." });
  }
};

// Get all courses
const getAllCourses = async (req: Request, res: Response) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while retrieving courses." });
  }
};

//   get a single course

const getCourse = async (req: Request, res: Response) => {
  try {
    const courseId = req.params.courseId;

    // Use populate to fetch the associated sections and lectures
    const course = await Course.findById(courseId)
      .populate({
        path: "sections",
        populate: {
          path: "lectures",
        },
      })
      .exec();

    if (!course) {
      return res.status(404).json({ error: "Course not found." });
    }

    res.status(200).json(course);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while retrieving the course." });
  }
};

// Update a section's title
const updateSectionTitle = async (req: Request, res: Response) => {
  try {
    const courseId = req.params.courseId;
    const sectionId = req.params.sectionId;
    const { title } = req.body;

    const course = await Course.findById(courseId);

    if (!course) {
      return res.status(404).json({ error: "Course not found." });
    }

    const section = await Section.findByIdAndUpdate(
      sectionId,
      { title },
      { new: true } // To return the updated section
    );

    if (!section) {
      return res.status(404).json({ error: "Section not found." });
    }

    res.status(200).json(section);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while updating the section." });
  }
};

// Delete a lecture from a section
const deleteLectureFromSection = async (req: Request, res: Response) => {
  try {
    const courseId = req.params.courseId;
    const sectionId = req.params.sectionId;
    const lectureId = req.params.lectureId;

    const course = await Course.findById(courseId);

    if (!course) {
      return res.status(404).json({ error: "Course not found." });
    }

    const section = await Section.findById(sectionId);

    if (!section) {
      return res.status(404).json({ error: "Section not found." });
    }

    // Find the index of the lecture to delete
    const lectureIndex = section.lectures.findIndex(
      (lecture) => lecture.toString() === lectureId
    );

    if (lectureIndex === -1) {
      return res.status(404).json({ error: "Lecture not found." });
    }

    // Remove the lecture from the section's lectures array
    section.lectures.splice(lectureIndex, 1);
    await section.save();

    res.status(204).send(); // No content response
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while deleting the lecture." });
  }
};

// Update lecture properties
const updateLecture = async (req: Request, res: Response) => {
  try {
    const courseId = req.params.courseId;
    const sectionId = req.params.sectionId;
    const lectureId = req.params.lectureId;
    const updatedLectureData = req.body;

    const course = await Course.findById(courseId);

    if (!course) {
      return res.status(404).json({ error: "Course not found." });
    }

    const section = await Section.findById(sectionId);

    if (!section) {
      return res.status(404).json({ error: "Section not found." });
    }

    // Find the lecture to update
    const lectureToUpdate = section.lectures.find(
      (lecture) => lecture.toString() === lectureId
    );

    if (!lectureToUpdate) {
      return res.status(404).json({ error: "Lecture not found." });
    }

    // Update lecture properties
    lectureToUpdate.set(updatedLectureData);
    await section.save();

    res.status(200).json(lectureToUpdate);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while updating the lecture." });
  }
};

// Delete a section from a course
const deleteSectionFromCourse = async (req: Request, res: Response) => {
  try {
    const courseId = req.params.courseId;
    const sectionId = req.params.sectionId;

    const course = await Course.findById(courseId);

    if (!course) {
      return res.status(404).json({ error: "Course not found." });
    }

    // Find the index of the section to delete
    const sectionIndex = course.sections.findIndex(
      (section) => section.toString() === sectionId
    );

    if (sectionIndex === -1) {
      return res.status(404).json({ error: "Section not found." });
    }

    // Remove the section from the course's sections array
    course.sections.splice(sectionIndex, 1);
    await course.save();

    res.status(204).send(); // No content response
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while deleting the section." });
  }
};

// Delete a course
const deleteCourse = async (req: Request, res: Response) => {
  try {
    const courseId = req.params.courseId;

    const course = await Course.findByIdAndDelete(courseId);

    if (!course) {
      return res.status(404).json({ error: "Course not found." });
    }

    res.status(204).send(); // No content response
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while deleting the course." });
  }
};

// ! Not implemented YET
// Create a review for a course
// router.post(
//   "/courses/:courseId/reviews",
//   async (req: Request, res: Response) => {
//     try {
//       const courseId = req.params.courseId;
//       const { rating, comment } = req.body;
//       const course = await Course.findById(courseId);

//       if (!course) {
//         return res.status(404).json({ error: "Course not found." });
//       }

//       // Create a new review object
//       const newReview = {
//         rating,
//         comment,
//       };

//       // Add the new review to the course's reviews array
//       course.reviews.push(newReview);

//       // Save the course with the new review
//       await course.save();

//       res.status(201).json(newReview);
//     } catch (error) {
//       res
//         .status(500)
//         .json({ error: "An error occurred while creating the review." });
//     }
//   }
// );

// Get all reviews for a course
// router.get(
//   "/courses/:courseId/reviews",
//   async (req: Request, res: Response) => {
//     try {
//       const courseId = req.params.courseId;
//       const course = await Course.findById(courseId);

//       if (!course) {
//         return res.status(404).json({ error: "Course not found." });
//       }

//       const reviews = course.reviews;

//       res.status(200).json(reviews);
//     } catch (error) {
//       res
//         .status(500)
//         .json({ error: "An error occurred while retrieving the reviews." });
//     }
//   }
// );

// // Update a review for a course
// router.put(
//   "/courses/:courseId/reviews/:reviewId",
//   async (req: Request, res: Response) => {
//     try {
//       const courseId = req.params.courseId;
//       const reviewId = req.params.reviewId;
//       const { rating, comment } = req.body;

//       const course = await Course.findById(courseId);

//       if (!course) {
//         return res.status(404).json({ error: "Course not found." });
//       }

//       // Use find to locate the review by its _id
//       const review = course.reviews.find((r) => r._id == reviewId);

//       if (!review) {
//         return res.status(404).json({ error: "Review not found." });
//       }

//       const reviewIndex = course.reviews.findIndex(
//         (r) => r._id.toString() === reviewId
//       );
//       // Update the review data
//       course.reviews[reviewIndex].rating = rating;
//       course.reviews[reviewIndex].comment = comment;

//       // Save the updated course
//       await course.save();

//       res.status(200).json(review);
//     } catch (error) {
//       res
//         .status(500)
//         .json({ error: "An error occurred while updating the review." });
//     }
//   }
// );

// Delete a review for a course
// router.delete(
//   "/courses/:courseId/reviews/:reviewId",
//   async (req: Request, res: Response) => {
//     try {
//       const courseId = req.params.courseId;
//       const reviewId = req.params.reviewId;

//       const course = await Course.findById(courseId);

//       if (!course) {
//         return res.status(404).json({ error: "Course not found." });
//       }

//       // Use findIndex to locate the index of the review by its _id
// // Use findIndex to locate the index of the review by its _id
// const reviewIndex = course.reviews.findIndex((r) => r._id.toString() === reviewId);

//       if (reviewIndex === -1) {
//         return res.status(404).json({ error: "Review not found." });
//       }

//       // Remove the review from the course's reviews array
//       course.reviews.splice(reviewIndex, 1);

//       // Save the course without the deleted review
//       await course.save();

//       res.status(204).send(); // No content response
//     } catch (error) {
//       res
//         .status(500)
//         .json({ error: "An error occurred while deleting the review." });
//     }
//   }
// );

// ! Not implemented YET
export {
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
};
