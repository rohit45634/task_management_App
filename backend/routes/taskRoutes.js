import express from "express";

import {
  createTask,
  getTask,
  updateTask,
  deleteTask,
} from "../controller/taskController.js";

const userRoute = express.Router();

userRoute.post("/create", createTask);

userRoute.get("/get", getTask);

userRoute.put("/update/:id", updateTask);

userRoute.delete("/delete/:id", deleteTask);

export default userRoute;
