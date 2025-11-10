import { Request, Response, Router } from "express";
import { Job } from "../models/Job.js";
import { requireAuth } from "./admin-auth-router.js";

const adminJobsRouter = Router();

// All routes require authentication
adminJobsRouter.use(requireAuth);

// GET /api/v1/admin/jobs - Get all jobs
adminJobsRouter.get("/", async (req: Request, res: Response) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });

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

// POST /api/v1/admin/jobs - Create new job
adminJobsRouter.post("/", async (req: Request, res: Response) => {
  try {
    const admin = (req as any).admin;

    if (!admin.permissions.manageJobs) {
      return res.status(403).json({
        status: 403,
        message: "No permission to manage jobs",
      });
    }

    const job = new Job(req.body);
    await job.save();

    res.status(201).json({
      status: 201,
      message: "Job created successfully",
      data: job,
    });
  } catch (error: any) {
    console.error("Error creating job:", error);
    res.status(500).json({
      status: 500,
      message: "Failed to create job",
      error: error.message,
    });
  }
});

// PUT /api/v1/admin/jobs/:id - Update job
adminJobsRouter.put("/:id", async (req: Request, res: Response) => {
  try {
    const admin = (req as any).admin;

    if (!admin.permissions.manageJobs) {
      return res.status(403).json({
        status: 403,
        message: "No permission to manage jobs",
      });
    }

    const job = await Job.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!job) {
      return res.status(404).json({
        status: 404,
        message: "Job not found",
      });
    }

    res.status(200).json({
      status: 200,
      message: "Job updated successfully",
      data: job,
    });
  } catch (error: any) {
    console.error("Error updating job:", error);
    res.status(500).json({
      status: 500,
      message: "Failed to update job",
      error: error.message,
    });
  }
});

// DELETE /api/v1/admin/jobs/:id - Delete job
adminJobsRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    const admin = (req as any).admin;

    if (!admin.permissions.manageJobs) {
      return res.status(403).json({
        status: 403,
        message: "No permission to manage jobs",
      });
    }

    const job = await Job.findByIdAndDelete(req.params.id);

    if (!job) {
      return res.status(404).json({
        status: 404,
        message: "Job not found",
      });
    }

    res.status(200).json({
      status: 200,
      message: "Job deleted successfully",
    });
  } catch (error: any) {
    console.error("Error deleting job:", error);
    res.status(500).json({
      status: 500,
      message: "Failed to delete job",
      error: error.message,
    });
  }
});

export default adminJobsRouter;
