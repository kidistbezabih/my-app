import { Request, Response, Router } from "express";
import { Solution } from "../models/Solution.js";

const solutionsRouter = Router();

// GET /api/v1/solutions - Get all solutions
solutionsRouter.get("/", async (req: Request, res: Response) => {
  try {
    const { category } = req.query;

    const filter: any = { isActive: true };
    if (category && (category === "by-need" || category === "by-industry")) {
      filter.category = category;
    }

    const solutions = await Solution.find(filter)
      .select("slug name category tagline description order")
      .sort({ category: 1, order: 1 });

    res.status(200).json({
      status: 200,
      message: "Solutions retrieved successfully",
      data: solutions,
    });
  } catch (error: any) {
    console.error("Error fetching solutions:", error);
    res.status(500).json({
      status: 500,
      message: "Failed to fetch solutions",
      error: error.message,
    });
  }
});

// GET /api/v1/solutions/:slug - Get single solution by slug
solutionsRouter.get("/:slug", async (req: Request, res: Response) => {
  try {
    const { slug } = req.params;

    const solution = await Solution.findOne({ slug, isActive: true });

    if (!solution) {
      return res.status(404).json({
        status: 404,
        message: "Solution not found",
      });
    }

    res.status(200).json({
      status: 200,
      message: "Solution retrieved successfully",
      data: solution,
    });
  } catch (error: any) {
    console.error("Error fetching solution:", error);
    res.status(500).json({
      status: 500,
      message: "Failed to fetch solution",
      error: error.message,
    });
  }
});

export default solutionsRouter;
