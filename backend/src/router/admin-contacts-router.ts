import { Request, Response, Router } from "express";
import { Contact } from "../models/Contact.js";
import { requireAuth } from "./admin-auth-router.js";

const adminContactsRouter = Router();

// All routes require authentication
adminContactsRouter.use(requireAuth);

// GET /api/v1/admin/contacts - Get all contacts with full details
adminContactsRouter.get("/", async (req: Request, res: Response) => {
  try {
    const { type, status, limit } = req.query;

    const filter: any = {};
    if (type) filter.type = type;
    if (status) filter.status = status;

    const queryLimit = limit ? parseInt(limit as string) : 100;

    const contacts = await Contact.find(filter)
      .sort({ createdAt: -1 })
      .limit(queryLimit);

    res.status(200).json({
      status: 200,
      message: "Contacts retrieved successfully",
      data: contacts,
    });
  } catch (error: any) {
    console.error("Error fetching contacts:", error);
    res.status(500).json({
      status: 500,
      message: "Failed to fetch contacts",
      error: error.message,
    });
  }
});

// GET /api/v1/admin/contacts/:id - Get single contact
adminContactsRouter.get("/:id", async (req: Request, res: Response) => {
  try {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({
        status: 404,
        message: "Contact not found",
      });
    }

    res.status(200).json({
      status: 200,
      message: "Contact retrieved successfully",
      data: contact,
    });
  } catch (error: any) {
    console.error("Error fetching contact:", error);
    res.status(500).json({
      status: 500,
      message: "Failed to fetch contact",
      error: error.message,
    });
  }
});

// PUT /api/v1/admin/contacts/:id - Update contact status/notes
adminContactsRouter.put("/:id", async (req: Request, res: Response) => {
  try {
    const admin = (req as any).admin;
    const { status, notes, assignedTo } = req.body;

    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      {
        ...(status && { status }),
        ...(notes && { notes }),
        ...(assignedTo && { assignedTo }),
      },
      { new: true }
    );

    if (!contact) {
      return res.status(404).json({
        status: 404,
        message: "Contact not found",
      });
    }

    res.status(200).json({
      status: 200,
      message: "Contact updated successfully",
      data: contact,
    });
  } catch (error: any) {
    console.error("Error updating contact:", error);
    res.status(500).json({
      status: 500,
      message: "Failed to update contact",
      error: error.message,
    });
  }
});

// DELETE /api/v1/admin/contacts/:id - Delete contact
adminContactsRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);

    if (!contact) {
      return res.status(404).json({
        status: 404,
        message: "Contact not found",
      });
    }

    res.status(200).json({
      status: 200,
      message: "Contact deleted successfully",
    });
  } catch (error: any) {
    console.error("Error deleting contact:", error);
    res.status(500).json({
      status: 500,
      message: "Failed to delete contact",
      error: error.message,
    });
  }
});

// GET /api/v1/admin/contacts/stats/summary - Contact stats
adminContactsRouter.get(
  "/stats/summary",
  async (req: Request, res: Response) => {
    try {
      const totalContacts = await Contact.countDocuments({ type: "contact" });
      const totalDemos = await Contact.countDocuments({ type: "demo" });

      const contactsByStatus = await Contact.aggregate([
        { $match: { type: "contact" } },
        { $group: { _id: "$status", count: { $sum: 1 } } },
      ]);

      const demosByStatus = await Contact.aggregate([
        { $match: { type: "demo" } },
        { $group: { _id: "$status", count: { $sum: 1 } } },
      ]);

      res.status(200).json({
        status: 200,
        message: "Contact stats retrieved",
        data: {
          totalContacts,
          totalDemos,
          contactsByStatus,
          demosByStatus,
        },
      });
    } catch (error: any) {
      console.error("Error fetching contact stats:", error);
      res.status(500).json({
        status: 500,
        message: "Failed to fetch stats",
        error: error.message,
      });
    }
  }
);

export default adminContactsRouter;
