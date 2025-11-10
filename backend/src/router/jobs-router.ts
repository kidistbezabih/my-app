import { Request, Response, Router } from "express";
import { Job } from "../models/Job.js";

const jobsRouter = Router();

// GET /api/v1/jobs - Get all active jobs
jobsRouter.get("/", async (req: Request, res: Response) => {
  try {
    const { subsidiary, department, location, featured } = req.query;

    const filter: any = { isActive: true };
    if (subsidiary) filter.subsidiary = subsidiary;
    if (department) filter.department = department;
    if (location) filter.location = new RegExp(location as string, "i");
    if (featured === "true") filter.featured = true;

    const jobs = await Job.find(filter)
      .select(
        "slug title subsidiary department location locationType employmentType description salaryRange featured postedDate"
      )
      .sort({ featured: -1, postedDate: -1 });

    res.status(200).json({
      status: 200,
      message: "Jobs retrieved successfully",
      data: jobs,
    });
  } catch (error: any) {
    console.error("Error fetching jobs:", error);
    res.status(500).json({
      status: 500,
      message: "Failed to fetch jobs",
      error: error.message,
    });
  }
});

// GET /api/v1/jobs/:slug - Get single job by slug
jobsRouter.get("/:slug", async (req: Request, res: Response) => {
  try {
    const { slug } = req.params;

    const job = await Job.findOne({ slug, isActive: true });

    if (!job) {
      return res.status(404).json({
        status: 404,
        message: "Job not found",
      });
    }

    res.status(200).json({
      status: 200,
      message: "Job retrieved successfully",
      data: job,
    });
  } catch (error: any) {
    console.error("Error fetching job:", error);
    res.status(500).json({
      status: 500,
      message: "Failed to fetch job",
      error: error.message,
    });
  }
});

export default jobsRouter;
