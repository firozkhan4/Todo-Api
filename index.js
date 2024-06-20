import "dotenv/config";
import express from "express";
import connectDB from "./db.js";
import path from "path";
import { fileURLToPath } from "url";

import authRoute from "./routes/authRoute.js";
import viewRoute from "./routes/viewRoute.js";
import todoRoute from "./routes/todoRoute.js";

import verifyToken from "./middlewares/verifyToken.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = process.env.PORT || 8000;

const app = express();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));

app.use("/", viewRoute);
app.use("/api/auth", authRoute);
app.use("/api/todos", todoRoute);

app.listen(PORT, () => console.log(`Server is running... ${PORT}`));
