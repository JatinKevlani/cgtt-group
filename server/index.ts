import express from "express";
import { registerRoutes } from "./routes";
import { serveStatic } from "./static";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ✅ wrap async logic
(async () => {
  await registerRoutes(app);

  if (process.env.NODE_ENV === "production") {
    serveStatic(app);
  }
})();

// error handler
app.use((err: any, _req: any, res: any, _next: any) => {
  const status = err.status || err.statusCode || 500;
  res.status(status).json({
    message: err.message || "Internal Server Error",
  });
});

export default app;
