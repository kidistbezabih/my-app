import { Request, Response, Router } from "express";
import { Blog } from "../models/Blog.js";

const blogsRouter = Router();

// GET /api/v1/blogs - Get all published blogs
blogsRouter.get("/", async (req: Request, res: Response) => {
  try {
    const { category, tag, featured, limit } = req.query;

    const filter: any = { status: "published", isActive: true };
    if (category) filter.category = category;
    if (tag) filter.tags = tag;
    if (featured === "true") filter.featured = true;

    const queryLimit = limit ? parseInt(limit as string) : 50;

    const blogs = await Blog.find(filter)
      .select(
        "slug title subtitle author authorRole publishedDate category tags excerpt coverImage readTime views featured"
      )
      .sort({ featured: -1, publishedDate: -1 })
      .limit(queryLimit);

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

// GET /api/v1/blogs/:slug - Get single blog by slug
blogsRouter.get("/:slug", async (req: Request, res: Response) => {
  try {
    const { slug } = req.params;

    const blog = await Blog.findOne({
      slug,
      status: "published",
      isActive: true,
    });

    if (!blog) {
      return res.status(404).json({
        status: 404,
        message: "Blog post not found",
      });
    }

    // Increment view count
    blog.views += 1;
    await blog.save();

    res.status(200).json({
      status: 200,
      message: "Blog retrieved successfully",
      data: blog,
    });
  } catch (error: any) {
    console.error("Error fetching blog:", error);
    res.status(500).json({
      status: 500,
      message: "Failed to fetch blog",
      error: error.message,
    });
  }
});

// GET /api/v1/blogs/categories - Get all categories
blogsRouter.get("/meta/categories", async (req: Request, res: Response) => {
  try {
    const categories = await Blog.distinct("category", {
      status: "published",
      isActive: true,
    });

    res.status(200).json({
      status: 200,
      message: "Categories retrieved successfully",
      data: categories,
    });
  } catch (error: any) {
    console.error("Error fetching categories:", error);
    res.status(500).json({
      status: 500,
      message: "Failed to fetch categories",
      error: error.message,
    });
  }
});

// GET /api/v1/blogs/tags - Get all tags
blogsRouter.get("/meta/tags", async (req: Request, res: Response) => {
  try {
    const tags = await Blog.distinct("tags", {
      status: "published",
      isActive: true,
    });

    res.status(200).json({
      status: 200,
      message: "Tags retrieved successfully",
      data: tags,
    });
  } catch (error: any) {
    console.error("Error fetching tags:", error);
    res.status(500).json({
      status: 500,
      message: "Failed to fetch tags",
      error: error.message,
    });
  }
});

export default blogsRouter;
