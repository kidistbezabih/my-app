import { Request, Response, Router } from "express";
import { Blog } from "../models/Blog.js";
import { requireAuth } from "./admin-auth-router.js";

const adminBlogsRouter = Router();

// All routes require authentication
adminBlogsRouter.use(requireAuth);

// GET /api/v1/admin/blogs - Get all blogs (including drafts)
adminBlogsRouter.get("/", async (req: Request, res: Response) => {
  try {
    const { status } = req.query;

    const filter: any = {};
    if (status) filter.status = status;

    const blogs = await Blog.find(filter).sort({ createdAt: -1 });

    res.status(200).json({
      status: 200,
      message: "Blogs retrieved successfully",
      data: blogs,
    });
  } catch (error: any) {
    console.error("Error fetching blogs:", error);
    res.status(500).json({
      status: 500,
      message: "Failed to fetch blogs",
      error: error.message,
    });
  }
});

// POST /api/v1/admin/blogs - Create new blog
adminBlogsRouter.post("/", async (req: Request, res: Response) => {
  try {
    const admin = (req as any).admin;

    // Check permission
    if (!admin.permissions.manageBlogs) {
      return res.status(403).json({
        status: 403,
        message: "No permission to manage blogs",
      });
    }

    const blogData = {
      ...req.body,
      author: req.body.author || admin.fullName,
    };

    const blog = new Blog(blogData);
    await blog.save();

    res.status(201).json({
      status: 201,
      message: "Blog created successfully",
      data: blog,
    });
  } catch (error: any) {
    console.error("Error creating blog:", error);
    res.status(500).json({
      status: 500,
      message: "Failed to create blog",
      error: error.message,
    });
  }
});

// PUT /api/v1/admin/blogs/:id - Update blog
adminBlogsRouter.put("/:id", async (req: Request, res: Response) => {
  try {
    const admin = (req as any).admin;

    if (!admin.permissions.manageBlogs) {
      return res.status(403).json({
        status: 403,
        message: "No permission to manage blogs",
      });
    }

    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!blog) {
      return res.status(404).json({
        status: 404,
        message: "Blog not found",
      });
    }

    res.status(200).json({
      status: 200,
      message: "Blog updated successfully",
      data: blog,
    });
  } catch (error: any) {
    console.error("Error updating blog:", error);
    res.status(500).json({
      status: 500,
      message: "Failed to update blog",
      error: error.message,
    });
  }
});

// DELETE /api/v1/admin/blogs/:id - Delete blog
adminBlogsRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    const admin = (req as any).admin;

    if (!admin.permissions.manageBlogs) {
      return res.status(403).json({
        status: 403,
        message: "No permission to manage blogs",
      });
    }

    const blog = await Blog.findByIdAndDelete(req.params.id);

    if (!blog) {
      return res.status(404).json({
        status: 404,
        message: "Blog not found",
      });
    }

    res.status(200).json({
      status: 200,
      message: "Blog deleted successfully",
    });
  } catch (error: any) {
    console.error("Error deleting blog:", error);
    res.status(500).json({
      status: 500,
      message: "Failed to delete blog",
      error: error.message,
    });
  }
});

export default adminBlogsRouter;
