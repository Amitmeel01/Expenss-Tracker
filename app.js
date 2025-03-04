import express from "express";
import cors from "cors";
import { connectDB } from "./DB/Database.js";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import transactionRoutes from "./Routers/Transactions.js";
import userRoutes from "./Routers/userRouter.js";
import { fileURLToPath } from 'url';
import path from 'path';

// Define __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.resolve();

dotenv.config({ path: "./config/config.env" });
const app = express();


const port = process.env.PORT;

connectDB();

const allowedOrigins = [
  "https://expense-tracker-and-budget-management-system.vercel.app/",
  "http://localhost:3000/",
  "https://expense-tracker-and-budget-management.netlify.app/",
  // // add more origins as needed
  '*'
];

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Router
app.use("/api/v1", transactionRoutes);
app.use("/api/auth", userRoutes);

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.use(express.static(path.join(__dirname,"frontend/build")))
// const frontendBuildPath = path.join(__dirname, 'frontend','build');
// app.use(express.static(frontendBuildPath));

// Serve the index.html file
app.get('*', (req, res)=>{
  // const index = path.join(frontendBuildPath, 'index.html');
  res.sendFile(path.resolve(__dirname, 'frontend','build',"index.html"));
});
app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
