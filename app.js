import express from "express"
import cookieParser from "cookie-parser";
import dotenv from "dotenv"
import morgan from "morgan";
import helmet from "helmet";
import userRoutes from "./routes/userRoutes.js"

dotenv.config()

export const app = express();

//regular middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'));
app.use(helmet());

//cookie middleware
app.use(cookieParser());

// routes
app.use("/api", userRoutes);