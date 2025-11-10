import crypto from "crypto";
import { Request, Response, Router } from "express";
import { Admin } from "../models/Admin.js";

const adminAuthRouter = Router();

// Simple session store (in production, use Redis or similar)
const sessions = new Map<string, { adminId: string; expiresAt: Date }>();

// Helper to generate session token
const generateSessionToken = (): string => {
  return crypto.randomBytes(32).toString("hex");
};

// POST /api/v1/admin/auth/login - Admin login
adminAuthRouter.post("/login", async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        status: 400,
        message: "Username and password are required",
      });
    }

    // Find admin
    const admin = await Admin.findOne({
      username: username.toLowerCase(),
      isActive: true,
    });

    if (!admin) {
      return res.status(401).json({
        status: 401,
        message: "Invalid credentials",
      });
    }

    // Check lockout
    if (admin.lockoutUntil && admin.lockoutUntil > new Date()) {
      return res.status(423).json({
        status: 423,
        message: "Account is locked. Please try again later.",
      });
    }

    // Verify password
    const isValid = admin.comparePassword(password);

    if (!isValid) {
      // Increment login attempts
      admin.loginAttempts += 1;

      // Lock account after 5 failed attempts
      if (admin.loginAttempts >= 5) {
        admin.lockoutUntil = new Date(Date.now() + 30 * 60 * 1000); // 30 minutes
      }

      await admin.save();

      return res.status(401).json({
        status: 401,
        message: "Invalid credentials",
      });
    }

    // Reset login attempts
    admin.loginAttempts = 0;
    admin.lockoutUntil = undefined;
    admin.lastLogin = new Date();
    await admin.save();

    // Create session
    const sessionToken = generateSessionToken();
    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours

    sessions.set(sessionToken, {
      adminId: admin._id.toString(),
      expiresAt,
    });

    res.status(200).json({
      status: 200,
      message: "Login successful",
      data: {
        token: sessionToken,
        admin: {
          id: admin._id,
          username: admin.username,
          email: admin.email,
          fullName: admin.fullName,
          role: admin.role,
          permissions: admin.permissions,
        },
        expiresAt,
      },
    });
  } catch (error: any) {
    console.error("Error during admin login:", error);
    res.status(500).json({
      status: 500,
      message: "Login failed",
      error: error.message,
    });
  }
});

// POST /api/v1/admin/auth/logout - Admin logout
adminAuthRouter.post("/logout", async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization?.replace("Bearer ", "");

    if (token) {
      sessions.delete(token);
    }

    res.status(200).json({
      status: 200,
      message: "Logout successful",
    });
  } catch (error: any) {
    console.error("Error during logout:", error);
    res.status(500).json({
      status: 500,
      message: "Logout failed",
      error: error.message,
    });
  }
});

// GET /api/v1/admin/auth/verify - Verify session
adminAuthRouter.get("/verify", async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization?.replace("Bearer ", "");

    if (!token) {
      return res.status(401).json({
        status: 401,
        message: "No token provided",
      });
    }

    const session = sessions.get(token);

    if (!session) {
      return res.status(401).json({
        status: 401,
        message: "Invalid session",
      });
    }

    if (session.expiresAt < new Date()) {
      sessions.delete(token);
      return res.status(401).json({
        status: 401,
        message: "Session expired",
      });
    }

    const admin = await Admin.findById(session.adminId).select("-password");

    if (!admin || !admin.isActive) {
      sessions.delete(token);
      return res.status(401).json({
        status: 401,
        message: "Admin not found or inactive",
      });
    }

    res.status(200).json({
      status: 200,
      message: "Session valid",
      data: {
        admin: {
          id: admin._id,
          username: admin.username,
          email: admin.email,
          fullName: admin.fullName,
          role: admin.role,
          permissions: admin.permissions,
        },
      },
    });
  } catch (error: any) {
    console.error("Error verifying session:", error);
    res.status(500).json({
      status: 500,
      message: "Verification failed",
      error: error.message,
    });
  }
});

// Middleware to verify admin authentication
export const requireAuth = async (
  req: Request,
  res: Response,
  next: Function
) => {
  try {
    const token = req.headers.authorization?.replace("Bearer ", "");

    if (!token) {
      return res.status(401).json({
        status: 401,
        message: "Authentication required",
      });
    }

    const session = sessions.get(token);

    if (!session || session.expiresAt < new Date()) {
      return res.status(401).json({
        status: 401,
        message: "Invalid or expired session",
      });
    }

    const admin = await Admin.findById(session.adminId);

    if (!admin || !admin.isActive) {
      return res.status(401).json({
        status: 401,
        message: "Admin not found or inactive",
      });
    }

    // Attach admin to request
    (req as any).admin = admin;
    next();
  } catch (error: any) {
    res.status(500).json({
      status: 500,
      message: "Authentication failed",
      error: error.message,
    });
  }
};

export default adminAuthRouter;
