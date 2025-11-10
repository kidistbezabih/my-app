import { Request, Response, Router } from "express";
import { Blog } from "../models/Blog.js";
import { Contact } from "../models/Contact.js";
import { Job } from "../models/Job.js";
import { PageView } from "../models/PageView.js";
import { requireAuth } from "./admin-auth-router.js";

const adminAnalyticsRouter = Router();

// All routes require authentication
adminAnalyticsRouter.use(requireAuth);

// GET /api/v1/admin/analytics/overview - Dashboard overview stats
adminAnalyticsRouter.get("/overview", async (req: Request, res: Response) => {
  try {
    const now = new Date();
    const last30Days = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
    const last7Days = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    // Page views
    const totalPageViews = await PageView.countDocuments();
    const pageViewsLast30Days = await PageView.countDocuments({
      viewDate: { $gte: last30Days },
    });
    const pageViewsToday = await PageView.countDocuments({
      viewDate: { $gte: today },
    });

    // Contacts
    const totalContacts = await Contact.countDocuments({ type: "contact" });
    const newContacts = await Contact.countDocuments({
      type: "contact",
      status: "new",
    });
    const contactsLast7Days = await Contact.countDocuments({
      type: "contact",
      createdAt: { $gte: last7Days },
    });

    // Demos
    const totalDemos = await Contact.countDocuments({ type: "demo" });
    const newDemos = await Contact.countDocuments({
      type: "demo",
      status: "new",
    });
    const demosLast7Days = await Contact.countDocuments({
      type: "demo",
      createdAt: { $gte: last7Days },
    });

    // Content
    const totalBlogs = await Blog.countDocuments({ status: "published" });
    const totalJobs = await Job.countDocuments({ isActive: true });

    // Most viewed pages (last 30 days)
    const topPages = await PageView.aggregate([
      { $match: { viewDate: { $gte: last30Days } } },
      { $group: { _id: "$page", count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 10 },
      { $project: { page: "$_id", views: "$count", _id: 0 } },
    ]);

    // Page views by category
    const viewsByCategory = await PageView.aggregate([
      { $match: { viewDate: { $gte: last30Days } } },
      { $group: { _id: "$category", count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $project: { category: "$_id", views: "$count", _id: 0 } },
    ]);

    res.status(200).json({
      status: 200,
      message: "Analytics retrieved successfully",
      data: {
        pageViews: {
          total: totalPageViews,
          last30Days: pageViewsLast30Days,
          today: pageViewsToday,
        },
        contacts: {
          total: totalContacts,
          new: newContacts,
          last7Days: contactsLast7Days,
        },
        demos: {
          total: totalDemos,
          new: newDemos,
          last7Days: demosLast7Days,
        },
        content: {
          publishedBlogs: totalBlogs,
          activeJobs: totalJobs,
        },
        topPages,
        viewsByCategory,
      },
    });
  } catch (error: any) {
    console.error("Error fetching analytics:", error);
    res.status(500).json({
      status: 500,
      message: "Failed to fetch analytics",
      error: error.message,
    });
  }
});

// GET /api/v1/admin/analytics/daily - Daily stats for last 30 days
adminAnalyticsRouter.get("/daily", async (req: Request, res: Response) => {
  try {
    const last30Days = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);

    const dailyViews = await PageView.aggregate([
      { $match: { viewDate: { $gte: last30Days } } },
      {
        $group: {
          _id: {
            $dateToString: { format: "%Y-%m-%d", date: "$viewDate" },
          },
          views: { $sum: 1 },
        },
      },
      { $sort: { _id: 1 } },
      { $project: { date: "$_id", views: 1, _id: 0 } },
    ]);

    res.status(200).json({
      status: 200,
      message: "Daily analytics retrieved successfully",
      data: dailyViews,
    });
  } catch (error: any) {
    console.error("Error fetching daily analytics:", error);
    res.status(500).json({
      status: 500,
      message: "Failed to fetch daily analytics",
      error: error.message,
    });
  }
});

// POST /api/v1/admin/analytics/track - Track page view (public endpoint)
adminAnalyticsRouter.post("/track", async (req: Request, res: Response) => {
  try {
    const {
      path,
      page,
      category,
      referrer,
      utmSource,
      utmMedium,
      utmCampaign,
    } = req.body;

    if (!path || !page || !category) {
      return res.status(400).json({
        status: 400,
        message: "Missing required fields: path, page, category",
      });
    }

    const pageView = new PageView({
      path,
      page,
      category,
      userAgent: req.headers["user-agent"],
      ipAddress: req.ip || req.connection.remoteAddress,
      referrer,
      utmSource,
      utmMedium,
      utmCampaign,
      viewDate: new Date(),
    });

    await pageView.save();

    res.status(201).json({
      status: 201,
      message: "Page view tracked",
    });
  } catch (error: any) {
    console.error("Error tracking page view:", error);
    res.status(500).json({
      status: 500,
      message: "Failed to track page view",
      error: error.message,
    });
  }
});

export default adminAnalyticsRouter;
