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
const __dirname = path.dirname(__filename);

dotenv.config({ path: "./config/config.env" });
const app = express();


const port = process.env.PORT;

connectDB();

const allowedOrigins = [
  // "https://main.d1sj7cd70hlter.amplifyapp.com",
  // "https://expense-tracker-app-three-beryl.vercel.app",
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

const frontendBuildPath = path.join(__dirname, 'frontend','build');
app.use(express.static(frontendBuildPath));

// Serve the index.html file
app.get('*', function (req, res) {
  const index = path.join(frontendBuildPath, 'index.html');
  res.sendFile(index);
});
app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
