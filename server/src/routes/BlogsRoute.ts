import express from "express";
import BlogController from "../controllers/BlogController";

const router = express.Router();

router.get("/", BlogController.getAllBlogs);
router.post("/create", BlogController.upload.single("image"), BlogController.validateCreateBlog(), BlogController.createBlog);
router.get("/category/:category", BlogController.getBlogsByCategory);
router.get("/author/:author", BlogController.getBlogsByAuthor);
router.get("/date/:date", BlogController.getBlogsByDate);
router.get("/title/:title", BlogController.getBlogsByTitle);
router.get("/pagination/:page", BlogController.getBlogsByPagination);
router.get(
  "/category-pagination",
  BlogController.getBlogsByCategoryAndPagination
);
router.get("/title-pagination", BlogController.getBlogsByTitleAndPagination);
router.get("/author-pagination", BlogController.getBlogsByAuthorAndPagination);
router.get(
  "/categories-pagination",
  BlogController.getBlogsByCategoriesAndPagination
);
router.get("/:id", BlogController.getBlogById);
router.put("/:id", BlogController.updateBlogById);
router.delete("/:id", BlogController.deleteBlogById);

export default router;
