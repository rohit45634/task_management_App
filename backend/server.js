import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoute from "./routes/authRoutes.js";
import userRoute from "./routes/taskRoutes.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
// app.use(cors());

app.use(
  cors({
    origin: "https://task-management-app-iota-nine.vercel.app",
    credentials: true,
  }),
);
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/task", userRoute);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Mongo Connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("API Running");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server ${PORT}`);
});
