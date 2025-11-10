import { Document, Schema, model } from "mongoose";

export interface IBlog extends Document {
  slug: string;
  title: string;
  subtitle?: string;
  author: string;
  authorRole?: string;
  authorImage?: string;
  publishedDate: Date;
  updatedDate?: Date;
  category: string;
  tags: string[];

  // Content
  excerpt: string;
  content: string;
  coverImage?: string;

  // SEO
  metaDescription?: string;

  // Engagement
  readTime: number; // in minutes
  views: number;
  featured: boolean;

  // Status
  status: "draft" | "published" | "archived";
  isActive: boolean;

  createdAt: Date;
  updatedAt: Date;
}

const BlogSchema = new Schema<IBlog>(
  {
    slug: { type: String, required: true, unique: true, index: true },
    title: { type: String, required: true },
    subtitle: { type: String },
    author: { type: String, required: true },
    authorRole: { type: String },
    authorImage: { type: String },
    publishedDate: { type: Date, required: true, index: true },
    updatedDate: { type: Date },
    category: { type: String, required: true, index: true },
    tags: [{ type: String }],

    excerpt: { type: String, required: true },
    content: { type: String, required: true },
    coverImage: { type: String },

    metaDescription: { type: String },

    readTime: { type: Number, default: 5 },
    views: { type: Number, default: 0 },
    featured: { type: Boolean, default: false },

    status: {
      type: String,
      enum: ["draft", "published", "archived"],
      default: "published",
      index: true,
    },
    isActive: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

// Indexes for efficient querying
BlogSchema.index({ status: 1, publishedDate: -1 });
BlogSchema.index({ category: 1, publishedDate: -1 });
BlogSchema.index({ featured: 1, publishedDate: -1 });
BlogSchema.index({ tags: 1 });

export const Blog = model<IBlog>("Blog", BlogSchema);
