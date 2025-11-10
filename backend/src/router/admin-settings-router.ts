import { Request, Response, Router } from "express";
import { SiteSettings } from "../models/SiteSettings.js";
import { requireAuth } from "./admin-auth-router.js";

const adminSettingsRouter = Router();

// All routes require authentication
adminSettingsRouter.use(requireAuth);

// GET /api/v1/admin/settings - Get all settings
adminSettingsRouter.get("/", async (req: Request, res: Response) => {
  try {
    const { category } = req.query;

    const filter: any = {};
    if (category) filter.category = category;

    const settings = await SiteSettings.find(filter).sort({
      category: 1,
      key: 1,
    });

    res.status(200).json({
      status: 200,
      message: "Settings retrieved successfully",
      data: settings,
    });
  } catch (error: any) {
    console.error("Error fetching settings:", error);
    res.status(500).json({
      status: 500,
      message: "Failed to fetch settings",
      error: error.message,
    });
  }
});

// PUT /api/v1/admin/settings/:id - Update setting
adminSettingsRouter.put("/:id", async (req: Request, res: Response) => {
  try {
    const admin = (req as any).admin;

    if (!admin.permissions.manageSettings) {
      return res.status(403).json({
        status: 403,
        message: "No permission to manage settings",
      });
    }

    const { value } = req.body;

    const setting = await SiteSettings.findByIdAndUpdate(
      req.params.id,
      {
        value,
        lastEditedBy: admin.username,
        lastEditedAt: new Date(),
      },
      { new: true }
    );

    if (!setting) {
      return res.status(404).json({
        status: 404,
        message: "Setting not found",
      });
    }

    res.status(200).json({
      status: 200,
      message: "Setting updated successfully",
      data: setting,
    });
  } catch (error: any) {
    console.error("Error updating setting:", error);
    res.status(500).json({
      status: 500,
      message: "Failed to update setting",
      error: error.message,
    });
  }
});

export default adminSettingsRouter;
