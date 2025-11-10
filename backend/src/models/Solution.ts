import { Document, Schema, model } from "mongoose";

export interface IUseCase {
  title: string;
  description: string;
  benefits: string[];
}

export interface IIntegration {
  product: string;
  description: string;
}

export interface ISolution extends Document {
  slug: string;
  name: string;
  category: "by-need" | "by-industry";
  tagline: string;
  description: string;
  eyebrow: string;
  overview: string;

  // Challenges and solutions
  challenges: string[];
  solutionApproach: string[];

  // Use cases
  useCases: IUseCase[];

  // Related products and integrations
  relatedProducts: string[];
  integrations: IIntegration[];

  // Industries served (for by-need solutions)
  industries?: string[];

  // Target personas
  targetPersonas: string[];

  // Metadata
  isActive: boolean;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

const UseCaseSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  benefits: [{ type: String }],
});

const IntegrationSchema = new Schema({
  product: { type: String, required: true },
  description: { type: String, required: true },
});

const SolutionSchema = new Schema<ISolution>(
  {
    slug: { type: String, required: true, unique: true, index: true },
    name: { type: String, required: true },
    category: {
      type: String,
      enum: ["by-need", "by-industry"],
      required: true,
    },
    tagline: { type: String, required: true },
    description: { type: String, required: true },
    eyebrow: { type: String, default: "Solution" },
    overview: { type: String, required: true },

    challenges: [{ type: String }],
    solutionApproach: [{ type: String }],
    useCases: [UseCaseSchema],
    relatedProducts: [{ type: String }],
    integrations: [IntegrationSchema],
    industries: [{ type: String }],
    targetPersonas: [{ type: String }],

    isActive: { type: Boolean, default: true },
    order: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

export const Solution = model<ISolution>("Solution", SolutionSchema);
