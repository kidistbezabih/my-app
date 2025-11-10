import bodyParser from "body-parser";
import cors from "cors";
import { config } from "dotenv";
import express from "express";
import morgan from "morgan";
import appRouter from "./router/index.js";
//api-sepcs
// const swaggerDocument = YAML.load(swaggerYaml);

config();

const app = express();

//api-docs

// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
//middlewares
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));

// CORS Configuration for production
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  process.env.FRONTEND_URL || ""
].filter(Boolean);

app.use(cors({ 
    origin: (origin, callback) => {
      // Allow requests with no origin (mobile apps, Postman, curl, etc.)
      if (!origin) return callback(null, true);
      
      if (allowedOrigins.includes(origin) || process.env.NODE_ENV === "development") {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true 
}));

app.use(express.json());

// remove it in production
app.use(morgan("dev"));

app.use("/api/v1", appRouter);

export { app };
