import express from "express";
import path from "path";

export function setupStatic(app: express.Express) {
  const publicPath = path.resolve("dist/public");

  app.use(express.static(publicPath));

  app.get("*", (_, res) => {
    res.sendFile(path.join(publicPath, "index.html"));
  });
}
