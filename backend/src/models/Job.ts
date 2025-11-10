import { Document, Schema, model } from "mongoose";

export interface IJob extends Document {
  slug: string;
  title: string;
  subsidiary: string;
  department: string;
  location: string;
  locationType: "remote" | "hybrid" | "onsite";
  employmentType: "full-time" | "part-time" | "contract";

  // Job details
  description: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave?: string[];

  // Compensation
  salaryRange?: string;
  equity: boolean;
  benefits: string[];

  // Application
  applyUrl?: string;
  contactEmail?: string;

  // Metadata
  featured: boolean;
  isActive: boolean;
  postedDate: Date;
  closingDate?: Date;

  createdAt: Date;
  updatedAt: Date;
}

const JobSchema = new Schema<IJob>(
  {
    slug: { type: String, required: true, unique: true, index: true },
    title: { type: String, required: true },
    subsidiary: { type: String, required: true, index: true },
    department: { type: String, required: true },
    location: { type: String, required: true },
    locationType: {
      type: String,
      enum: ["remote", "hybrid", "onsite"],
      required: true,
    },
    employmentType: {
      type: String,
      enum: ["full-time", "part-time", "contract"],
      default: "full-time",
    },

    description: { type: String, required: true },
    responsibilities: [{ type: String }],
    requirements: [{ type: String }],
    niceToHave: [{ type: String }],

    salaryRange: { type: String },
    equity: { type: Boolean, default: true },
    benefits: [{ type: String }],

    applyUrl: { type: String },
    contactEmail: { type: String },

    featured: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
    postedDate: { type: Date, required: true, index: true },
    closingDate: { type: Date },
  },
  {
    timestamps: true,
  }
);

// Indexes for efficient querying
JobSchema.index({ subsidiary: 1, isActive: 1, postedDate: -1 });
JobSchema.index({ featured: 1, postedDate: -1 });
JobSchema.index({ isActive: 1, postedDate: -1 });

export const Job = model<IJob>("Job", JobSchema);
