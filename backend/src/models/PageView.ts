import { Document, Schema, model } from "mongoose";

export interface IPageView extends Document {
  path: string;
  page: string; // Friendly name like "Quorix Product Page"
  category: "product" | "solution" | "resource" | "company" | "home" | "other";

  // Visitor info
  userAgent?: string;
  ipAddress?: string;
  referrer?: string;

  // UTM tracking
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;

  // Session
  sessionId?: string;

  // Timing
  viewDate: Date;
  timeOnPage?: number; // in seconds

  createdAt: Date;
}

const PageViewSchema = new Schema<IPageView>(
  {
    path: { type: String, required: true, index: true },
    page: { type: String, required: true },
    category: {
      type: String,
      enum: ["product", "solution", "resource", "company", "home", "other"],
      required: true,
      index: true,
    },
    userAgent: { type: String },
    ipAddress: { type: String },
    referrer: { type: String },
    utmSource: { type: String },
    utmMedium: { type: String },
    utmCampaign: { type: String },
    sessionId: { type: String, index: true },
    viewDate: { type: Date, required: true, index: true },
    timeOnPage: { type: Number },
  },
  {
    timestamps: true,
  }
);

// Indexes for analytics queries
PageViewSchema.index({ viewDate: -1, category: 1 });
PageViewSchema.index({ path: 1, viewDate: -1 });
PageViewSchema.index({ category: 1, viewDate: -1 });

export const PageView = model<IPageView>("PageView", PageViewSchema);
