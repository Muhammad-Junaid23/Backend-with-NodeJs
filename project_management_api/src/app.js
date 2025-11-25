import express from "express";
import cors from "cors";

const app = express();

// basic config
app.use(express.json({ limit: "15kb" }));
app.use(express.urlencoded({ extended: "true", limit: "16kb" }));
app.use(express.static("public"));

// cors config
app.use(
   cors({
      origin: process.env.CORS_ORIGIN?.split(",") || "https://localhost:5173",
      credentials: true,
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization"],
   }),
);

//import routes
import healthCheckRouter from "./routes/healthcheck.routes.js";

app.use("/api/v1/healthcheck", healthCheckRouter);

app.get("/", (req, res) => {
   res.send("welcome to project management api");
});

app.get("/unknownX", (req, res) => {
   res.send("welcome to not found");
});

export default app;
