import express from "express";

import {
  createTask,
  getTask,
  updateTask,
  deleteTask,
  currentUser,
} from "../controller/taskController.js";
import { isAuth } from "../middleware/Auth.js";

const userRoute = express.Router();

userRoute.post("/create", isAuth, createTask);
userRoute.get("/current-user", isAuth, currentUser);

userRoute.get("/get", isAuth, getTask);

userRoute.put("/update/:id", isAuth, updateTask);

userRoute.delete("/delete/:id", isAuth, deleteTask);

export default userRoute;
