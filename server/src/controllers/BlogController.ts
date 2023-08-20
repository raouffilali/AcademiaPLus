// create controller for blog posts

import { Request, Response, NextFunction } from "express";
import createError from "http-errors";
import { validationResult } from "express-validator";
import BlogModel from "../models/Blogs/BLogModel";
import { check } from "express-validator";
import multer from "multer";
import path from "path";
// import fs from "fs"; // Import the fs module

class BlogController {
  // ... constructor and other methods
  constructor() {
    // Set up multer storage and upload configuration
    const storage = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, "public/uploads");
      },
      filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        const extname = path.extname(file.originalname);
        cb(null, uniqueSuffix + extname);
      },
    });

    this.upload = multer({ storage });
  }
  // Update the validation rules for the createBlog method
  validateCreateBlog() {
    return [
      check("title").notEmpty().withMessage("Title is required"),
      check("description").notEmpty().withMessage("Description is required"),
      check("image").notEmpty().withMessage("Image URL is required"),
      check("author").notEmpty().withMessage("Author is required"),
      check("category").notEmpty().withMessage("Category is required"),
    ];
  }
  async createBlog(req: Request, res: Response, next: NextFunction) {
    try {
      const errors = validationResult(req); // Validate request using express-validator
      if (!errors.isEmpty()) {
        return next(createError(400, errors.array()));
      }

      const { title, description, author, date, category } = req.body;
      // Get the uploaded image file if available
      const image = req.file ? req.file.filename : "";

      const newBlog = await BlogModel.create({
        title,
        description,
        image,
        author,
        date,
        category,
      });

      return res.status(201).json(newBlog);
    } catch (error) {
      return next(createError(500, "Internal server error"));
    }

  }
  upload: multer.Multer;

  // Get all blogs

  async getAllBlogs(req: Request, res: Response, next: NextFunction) {
    try {
      const blogs = await BlogModel.find();
      return res.status(200).json(blogs);
    } catch (error) {
      return next(createError(500, "Internal server error"));
    }
  }

  //   Get blogs by category
  async getBlogsByCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const { category } = req.params;
      const blogs = await BlogModel.find({ category });

      if (blogs.length === 0) {
        return next(createError(404, "No blogs found in this category"));
      }

      return res.status(200).json(blogs);
    } catch (error) {
      return next(createError(500, "Internal server error"));
    }
  }

  //   Get blogs by author
  async getBlogsByAuthor(req: Request, res: Response, next: NextFunction) {
    try {
      const { author } = req.params;
      const blogs = await BlogModel.find({ author }); // Find blogs by author
      if (blogs.length === 0) {
        return next(createError(404, "No blogs found by this author"));
      }
      return res.status(200).json(blogs);
    } catch (error) {
      return next(createError(500, "Internal server error"));
    }
  }

  //  Get blogs by date
  async getBlogsByDate(req: Request, res: Response, next: NextFunction) {
    try {
      const { date } = req.params;
      const blogs = await BlogModel.find({ date }); // Find blogs by date
      if (blogs.length === 0) {
        return next(createError(404, "No blogs found on this date"));
      }
      return res.status(200).json(blogs);
    } catch (error) {
      return next(createError(500, "Internal server error"));
    }
  }

  // Get blogs by title
  async getBlogsByTitle(req: Request, res: Response, next: NextFunction) {
    try {
      const { title } = req.params;
      const blogs = await BlogModel.find({ title }); // Find blogs by title
      if (blogs.length === 0) {
        return next(createError(404, "No blogs found with this title"));
      }
      return res.status(200).json(blogs);
    } catch (error) {
      return next(createError(500, "Internal server error"));
    }
  }

  // getl blogs with pagination and limit of 8 blogs per page

  async getBlogsByPagination(req: Request, res: Response, next: NextFunction) {
    try {
      const { page } = req.params;
      const blogs = await BlogModel.find()
        .skip((parseInt(page) - 1) * 8)
        .limit(8); // Find blogs by pagination
      if (blogs.length === 0) {
        return next(createError(404, "No blogs found"));
      }
      return res.status(200).json(blogs);
    } catch (error) {
      return next(createError(500, "Internal server error"));
    }
  }

  // get blogs by category and pagination

  async getBlogsByCategoryAndPagination(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { category, page, limit } = req.query;
      const pageNumber = parseInt(page as string) || 1;
      const limitNumber = parseInt(limit as string) || 10;

      const blogs = await BlogModel.find({ category })
        .skip((pageNumber - 1) * limitNumber)
        .limit(limitNumber);

      if (blogs.length === 0) {
        return next(createError(404, "No blogs found in this category"));
      }
      return res.status(200).json(blogs);
    } catch (error) {
      return next(createError(500, "Internal server error"));
    }
  }

  async getBlogsByTitleAndPagination(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { title, page, limit } = req.query;
      const pageNumber = parseInt(page as string) || 1;
      const limitNumber = parseInt(limit as string) || 10;

      const blogs = await BlogModel.find({
        title: { $regex: title, $options: "i" },
      })
        .skip((pageNumber - 1) * limitNumber)
        .limit(limitNumber);

      if (blogs.length === 0) {
        return next(createError(404, "No blogs found with this title"));
      }
      return res.status(200).json(blogs);
    } catch (error) {
      return next(createError(500, "Internal server error"));
    }
  }

  async getBlogsByAuthorAndPagination(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { author, page, limit } = req.query;
      const pageNumber = parseInt(page as string) || 1;
      const limitNumber = parseInt(limit as string) || 10;

      const blogs = await BlogModel.find({ author })
        .skip((pageNumber - 1) * limitNumber)
        .limit(limitNumber);

      if (blogs.length === 0) {
        return next(createError(404, "No blogs found by this author"));
      }
      return res.status(200).json(blogs);
    } catch (error) {
      return next(createError(500, "Internal server error"));
    }
  }

  // getBlogsByCategoriesAndPagination
  async getBlogsByCategoriesAndPagination(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { categories, page, limit } = req.query;
      const pageNumber = parseInt(page as string) || 1;
      const limitNumber = parseInt(limit as string) || 10;

      const categoryArray = String(categories).split(","); // Convert to string and then split

      const blogs = await BlogModel.find({ category: { $in: categoryArray } })
        .skip((pageNumber - 1) * limitNumber)
        .limit(limitNumber);

      if (blogs.length === 0) {
        return next(createError(404, "No blogs found in these categories"));
      }

      return res.status(200).json(blogs);
    } catch (error) {
      return next(createError(500, "Internal server error"));
    }
  }

  //   Get blog by id

  async getBlogById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const blog = await BlogModel.findById(id);

      if (!blog) {
        return next(createError(404, "Blog not found"));
      }

      return res.status(200).json(blog);
    } catch (error) {
      return next(createError(500, "Internal server error"));
    }
  }

  //   Update blog by id
  async updateBlogById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const updatedBlog = await BlogModel.findByIdAndUpdate(id, req.body, {
        new: true,
      });

      if (!updatedBlog) {
        return next(createError(404, "Blog not found"));
      }

      return res.status(200).json(updatedBlog);
    } catch (error) {
      return next(createError(500, "Internal server error"));
    }
  }
  //  Delete blog by id
  async deleteBlogById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const deletedBlog = await BlogModel.findByIdAndDelete(id);

      if (!deletedBlog) {
        return next(createError(404, "Blog not found"));
      }

      return res.status(204).end();
    } catch (error) {
      return next(createError(500, "Internal server error"));
    }
  }
}

export default new BlogController();
