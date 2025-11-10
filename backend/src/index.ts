import { app } from "./app.js";
import { connectDB } from "./db/connect.js";

// Connect to DB immediately for Vercel serverless
connectDB()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log("DB connection error:", err);
  });

// Export for Vercel serverless - Vercel handles the server listening
export default app;
