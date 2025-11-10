import { Document, Schema, model } from "mongoose";

export interface ISiteSettings extends Document {
  key: string; // Unique identifier like "hero_title", "cta_text"
  category: "hero" | "cta" | "footer" | "general" | "seo";
  label: string; // Human-readable label for admin UI
  value: string;
  description?: string; // Help text for admins
  dataType: "text" | "textarea" | "number" | "boolean" | "email" | "url";

  // Metadata
  isEditable: boolean;
  lastEditedBy?: string;
  lastEditedAt?: Date;

  createdAt: Date;
  updatedAt: Date;
}

const SiteSettingsSchema = new Schema<ISiteSettings>(
  {
    key: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    category: {
      type: String,
      enum: ["hero", "cta", "footer", "general", "seo"],
      required: true,
      index: true,
    },
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    dataType: {
      type: String,
      enum: ["text", "textarea", "number", "boolean", "email", "url"],
      default: "text",
    },
    isEditable: {
      type: Boolean,
      default: true,
    },
    lastEditedBy: {
      type: String,
    },
    lastEditedAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

// Index for quick lookups
SiteSettingsSchema.index({ category: 1, isEditable: 1 });

export const SiteSettings = model<ISiteSettings>(
  "SiteSettings",
  SiteSettingsSchema
);
