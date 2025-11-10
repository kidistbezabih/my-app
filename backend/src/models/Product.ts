import { Document, Schema, model } from "mongoose";

export interface IFeature {
  title: string;
  description: string;
  icon?: string;
}

export interface ITechDifferentiator {
  title: string;
  description: string;
}

export interface ICustomerStory {
  customer: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string;
  metrics?: string[];
}

export interface ILeadership {
  name: string;
  role: string;
  bio: string;
  previousRoles?: string[];
}

export interface IMarketPosition {
  analyst: string;
  recognition: string;
  year: string;
  details?: string;
}

export interface IProduct extends Document {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  eyebrow: string;
  overview: string;
  founded: string;
  customerCount: string;

  // Market positioning
  marketPosition: IMarketPosition[];

  // Leadership team
  leadership: ILeadership[];

  // Features and capabilities
  features: IFeature[];
  coreCapabilities: IFeature[];
  techDifferentiators: ITechDifferentiator[];

  // Customer success
  customerStories: ICustomerStory[];

  // Metadata
  isActive: boolean;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

const FeatureSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String },
});

const TechDifferentiatorSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

const CustomerStorySchema = new Schema({
  customer: { type: String, required: true },
  industry: { type: String, required: true },
  challenge: { type: String, required: true },
  solution: { type: String, required: true },
  results: { type: String, required: true },
  metrics: [{ type: String }],
});

const LeadershipSchema = new Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  bio: { type: String, required: true },
  previousRoles: [{ type: String }],
});

const MarketPositionSchema = new Schema({
  analyst: { type: String, required: true },
  recognition: { type: String, required: true },
  year: { type: String, required: true },
  details: { type: String },
});

const ProductSchema = new Schema<IProduct>(
  {
    slug: { type: String, required: true, unique: true, index: true },
    name: { type: String, required: true },
    tagline: { type: String, required: true },
    description: { type: String, required: true },
    eyebrow: { type: String, default: "Product" },
    overview: { type: String, required: true },
    founded: { type: String, required: true },
    customerCount: { type: String, required: true },

    marketPosition: [MarketPositionSchema],
    leadership: [LeadershipSchema],
    features: [FeatureSchema],
    coreCapabilities: [FeatureSchema],
    techDifferentiators: [TechDifferentiatorSchema],
    customerStories: [CustomerStorySchema],

    isActive: { type: Boolean, default: true },
    order: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

export const Product = model<IProduct>("Product", ProductSchema);
