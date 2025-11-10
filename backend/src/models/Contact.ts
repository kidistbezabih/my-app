import { Document, Schema, model } from "mongoose";

export interface IContact extends Document {
  type: "demo" | "contact" | "general";

  // Personal information
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;

  // Company information
  company: string;
  jobTitle?: string;
  industry?: string;
  companySize?: string;

  // Interest and message
  interestedProducts?: string[];
  interestedSolutions?: string[];
  message?: string;

  // Source tracking
  source?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;

  // Status
  status: "new" | "contacted" | "qualified" | "converted" | "closed";
  assignedTo?: string;
  notes?: string;

  createdAt: Date;
  updatedAt: Date;
}

const ContactSchema = new Schema<IContact>(
  {
    type: {
      type: String,
      enum: ["demo", "contact", "general"],
      required: true,
      default: "general",
    },

    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    phone: { type: String },

    company: { type: String, required: true },
    jobTitle: { type: String },
    industry: { type: String },
    companySize: { type: String },

    interestedProducts: [{ type: String }],
    interestedSolutions: [{ type: String }],
    message: { type: String },

    source: { type: String },
    utm_source: { type: String },
    utm_medium: { type: String },
    utm_campaign: { type: String },

    status: {
      type: String,
      enum: ["new", "contacted", "qualified", "converted", "closed"],
      default: "new",
    },
    assignedTo: { type: String },
    notes: { type: String },
  },
  {
    timestamps: true,
  }
);

// Indexes for efficient querying
ContactSchema.index({ email: 1 });
ContactSchema.index({ status: 1, createdAt: -1 });
ContactSchema.index({ type: 1, createdAt: -1 });

export const Contact = model<IContact>("Contact", ContactSchema);
