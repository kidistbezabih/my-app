import { Router } from "express";
import adminAnalyticsRouter from "./admin-analytics-router.js";
import adminAuthRouter from "./admin-auth-router.js";
import adminBlogsRouter from "./admin-blogs-router.js";
import adminContactsRouter from "./admin-contacts-router.js";
import adminJobsRouter from "./admin-jobs-router.js";
import adminSettingsRouter from "./admin-settings-router.js";
import blogsRouter from "./blogs-router.js";
import contactsRouter from "./contacts-router.js";
import helloRouter from "./hello-router.js";
import jobsRouter from "./jobs-router.js";
import productsRouter from "./products-router.js";
import resourcesRouter from "./resources-router.js";
import solutionsRouter from "./solutions-router.js";

const appRouter = Router();

// Public routes
appRouter.use("/hello", helloRouter);
appRouter.use("/products", productsRouter);
appRouter.use("/solutions", solutionsRouter);
appRouter.use("/resources", resourcesRouter);
appRouter.use("/contacts", contactsRouter);
appRouter.use("/blogs", blogsRouter);
appRouter.use("/jobs", jobsRouter);

// Admin routes
appRouter.use("/admin/auth", adminAuthRouter);
appRouter.use("/admin/analytics", adminAnalyticsRouter);
appRouter.use("/admin/blogs", adminBlogsRouter);
appRouter.use("/admin/jobs", adminJobsRouter);
appRouter.use("/admin/contacts", adminContactsRouter);
appRouter.use("/admin/settings", adminSettingsRouter);

export default appRouter;
