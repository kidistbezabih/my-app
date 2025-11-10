import { Request, Response, Router } from "express";
import { Contact } from "../models/Contact.js";

const contactsRouter = Router();

// POST /api/v1/contacts - Create a new contact submission
contactsRouter.post("/", async (req: Request, res: Response) => {
  try {
    const {
      type,
      firstName,
      lastName,
      email,
      phone,
      company,
      jobTitle,
      industry,
      companySize,
      interestedProducts,
      interestedSolutions,
      message,
      source,
      utm_source,
      utm_medium,
      utm_campaign,
    } = req.body;

    // Validation
    if (!firstName || !lastName || !email || !company) {
      return res.status(400).json({
        status: 400,
        message: "Missing required fields: firstName, lastName, email, company",
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        status: 400,
        message: "Invalid email format",
      });
    }

    const contact = new Contact({
      type: type || "general",
      firstName,
      lastName,
      email,
      phone,
      company,
      jobTitle,
      industry,
      companySize,
      interestedProducts,
      interestedSolutions,
      message,
      source,
      utm_source,
      utm_medium,
      utm_campaign,
      status: "new",
    });

    await contact.save();

    res.status(201).json({
      status: 201,
      message: "Contact submission received successfully",
      data: {
        id: contact._id,
        email: contact.email,
      },
    });
  } catch (error: any) {
    console.error("Error creating contact:", error);
    res.status(500).json({
      status: 500,
      message: "Failed to submit contact form",
      error: error.message,
    });
  }
});

// GET /api/v1/contacts - Get all contacts (admin endpoint - add auth middleware in production)
contactsRouter.get("/", async (req: Request, res: Response) => {
  try {
    const { type, status, limit } = req.query;

    const filter: any = {};
    if (type) filter.type = type;
    if (status) filter.status = status;

    const queryLimit = limit ? parseInt(limit as string) : 50;

    const contacts = await Contact.find(filter)
      .select("-notes") // Don't expose internal notes
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

export default contactsRouter;
