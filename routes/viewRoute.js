import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(__filename);
const routes = express.Router();

const __dirname = dirname.replace("routes", "");
const viewsDir = path.join(__dirname, "views");

routes.get("/", (req, res) => {
  return res.render("home");
});

routes.get("/:view", (req, res) => {
  const view = req.params.view;
  const viewsPath = path.join(viewsDir, `${view}.ejs`);

  fs.stat(viewsPath, (error) => {
    if (error) {
      res.status(404).render("404");
      console.log("View Route error ", error.message);
    } else {
      res.render(view);
    }
  });
});

export default routes;
