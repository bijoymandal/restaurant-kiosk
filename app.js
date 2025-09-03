import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// import menuRoutes from "./src/routes/menu.routes.js";
// import orderRoutes from "./routes/order.routes.js";
// import authRoutes from "./routes/auth.routes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
// app.use("/api/menus", menuRoutes);
// app.use("/api/orders", orderRoutes);
// app.use("/api/auth", authRoutes);

export default app;
