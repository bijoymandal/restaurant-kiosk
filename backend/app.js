import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "./src/config/db.js";

// import menuRoutes from "./src/routes/menu.routes.js";
// import orderRoutes from "./routes/order.routes.js";
import authRoutes from "./src/routes/auth.routes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
sequelize.sync({alter:true}).then(()=>console.log("Database Connected")).catch((error)=>console.log("Database sync error"));


// Routes
// app.use("/api/menus", menuRoutes);
// app.use("/api/orders", orderRoutes);
app.use("/api/auth", authRoutes);

export default app;
