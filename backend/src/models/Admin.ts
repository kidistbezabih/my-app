import crypto from "crypto";
import { Document, Schema, model } from "mongoose";

export interface IAdmin extends Document {
  username: string;
  email: string;
  password: string; // hashed
  fullName: string;
  role: "super-admin" | "admin" | "editor";

  // Permissions
  permissions: {
    manageBlogs: boolean;
    manageJobs: boolean;
    manageContacts: boolean;
    manageDemos: boolean;
    manageSettings: boolean;
    viewAnalytics: boolean;
    manageAdmins: boolean;
  };

  // Session management
  lastLogin?: Date;
  loginAttempts: number;
  lockoutUntil?: Date;

  // Metadata
  isActive: boolean;
  createdBy?: string;

  createdAt: Date;
  updatedAt: Date;

  // Methods
  comparePassword(candidatePassword: string): boolean;
  hashPassword(password: string): string;
}

const AdminSchema = new Schema<IAdmin>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["super-admin", "admin", "editor"],
      default: "admin",
    },
    permissions: {
      manageBlogs: { type: Boolean, default: true },
      manageJobs: { type: Boolean, default: true },
      manageContacts: { type: Boolean, default: true },
      manageDemos: { type: Boolean, default: true },
      manageSettings: { type: Boolean, default: false },
      viewAnalytics: { type: Boolean, default: true },
      manageAdmins: { type: Boolean, default: false },
    },
    lastLogin: { type: Date },
    loginAttempts: { type: Number, default: 0 },
    lockoutUntil: { type: Date },
    isActive: { type: Boolean, default: true },
    createdBy: { type: String },
  },
  {
    timestamps: true,
  }
);

// Hash password before saving
AdminSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();

  this.password = this.hashPassword(this.password);
  next();
});

// Method to hash password
AdminSchema.methods.hashPassword = function (password: string): string {
  return crypto
    .createHash("sha256")
    .update(password + process.env.ADMIN_SALT || "axionore-salt-2024")
    .digest("hex");
};

// Method to compare password
AdminSchema.methods.comparePassword = function (
  candidatePassword: string
): boolean {
  const hashedCandidate = this.hashPassword(candidatePassword);
  return hashedCandidate === this.password;
};

// Indexes
AdminSchema.index({ email: 1 });
AdminSchema.index({ isActive: 1 });

export const Admin = model<IAdmin>("Admin", AdminSchema);
