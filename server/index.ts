import express from "express";
import { registerRoutes } from "./routes.js";
import { serveStatic } from "./static.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

(async () => {
  await registerRoutes(app);

  if (process.env.NODE_ENV === "production") {
    serveStatic(app);
  }
})();

app.use((err: any, _req: any, res: any, _next: any) => {
  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
  });
});

export default app;
