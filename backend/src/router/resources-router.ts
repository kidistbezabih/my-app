import { Request, Response, Router } from "express";
import { Resource } from "../models/Resource.js";

const resourcesRouter = Router();

// GET /api/v1/resources - Get all resources
resourcesRouter.get("/", async (req: Request, res: Response) => {
  try {
    const { type, featured } = req.query;

    const filter: any = { isActive: true };
    if (type) {
      filter.type = type;
    }
    if (featured === "true") {
      filter.featured = true;
    }

    const resources = await Resource.find(filter)
      .select(
        "slug type title summary analyst year customer industry awardName featured order"
      )
      .sort({ featured: -1, order: 1, createdAt: -1 });

    res.status(200).json({
      status: 200,
      message: "Resources retrieved successfully",
      data: resources,
    });
  } catch (error: any) {
    console.error("Error fetching resources:", error);
    res.status(500).json({
      status: 500,
      message: "Failed to fetch resources",
      error: error.message,
    });
  }
});

// GET /api/v1/resources/:slug - Get single resource by slug
resourcesRouter.get("/:slug", async (req: Request, res: Response) => {
  try {
    const { slug } = req.params;

    const resource = await Resource.findOne({ slug, isActive: true });

    if (!resource) {
      return res.status(404).json({
        status: 404,
        message: "Resource not found",
      });
    }

    res.status(200).json({
      status: 200,
      message: "Resource retrieved successfully",
      data: resource,
    });
  } catch (error: any) {
    console.error("Error fetching resource:", error);
    res.status(500).json({
      status: 500,
      message: "Failed to fetch resource",
      error: error.message,
    });
  }
});

export default resourcesRouter;
