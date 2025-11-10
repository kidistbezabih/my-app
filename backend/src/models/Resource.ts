import { Document, Schema, model } from "mongoose";

export interface IResource extends Document {
  slug: string;
  type: "analyst-report" | "case-study" | "award" | "blog";
  title: string;
  summary: string;
  content?: string;

  // For analyst reports
  analyst?: string;
  year?: string;
  productRelated?: string;

  // For case studies
  customer?: string;
  industry?: string;
  challenge?: string;
  solution?: string;
  results?: string;
  metrics?: string[];

  // For awards
  awardName?: string;
  awardingBody?: string;

  // For blog
  author?: string;
  publishedDate?: Date;
  tags?: string[];

  // Common fields
  imageUrl?: string;
  externalUrl?: string;
  featured: boolean;
  isActive: boolean;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

const ResourceSchema = new Schema<IResource>(
  {
    slug: { type: String, required: true, unique: true, index: true },
    type: {
      type: String,
      enum: ["analyst-report", "case-study", "award", "blog"],
      required: true,
      index: true,
    },
    title: { type: String, required: true },
    summary: { type: String, required: true },
    content: { type: String },

    // Analyst reports
    analyst: { type: String },
    year: { type: String },
    productRelated: { type: String },

    // Case studies
    customer: { type: String },
    industry: { type: String },
    challenge: { type: String },
    solution: { type: String },
    results: { type: String },
    metrics: [{ type: String }],

    // Awards
    awardName: { type: String },
    awardingBody: { type: String },

    // Blog
    author: { type: String },
    publishedDate: { type: Date },
    tags: [{ type: String }],

    // Common
    imageUrl: { type: String },
    externalUrl: { type: String },
    featured: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
    order: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

// Index for efficient querying
ResourceSchema.index({ type: 1, featured: 1, order: 1 });

export const Resource = model<IResource>("Resource", ResourceSchema);
