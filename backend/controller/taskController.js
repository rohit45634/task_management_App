import Task from "../models/Task.js";
export const currentUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    res.status(200).json({
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

// Create Task

export const createTask = async (req, res) => {
  try {
    const { title, description, priority } = req.body;

    const task = await Task.create({
      title,

      description,

      priority,

      // user: req.user.id,
    });

    res.status(201).json({
      message: "Task Created",

      task,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Task

export const getTask = async (req, res) => {
  try {
    const tasks = await Task.find({
      //       user: req.user.id,
    });

    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Update Task

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findById(id);

    if (!task) {
      return res.status(404).json({
        message: "Task Not Found",
      });
    }

    const updatedTask = await Task.findByIdAndUpdate(
      id,

      req.body,

      {
        new: true,
      },
    );

    res.status(200).json({
      message: "Task Updated",

      updatedTask,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Task

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findById(id);

    if (!task) {
      return res.status(404).json({
        message: "Task Not Found",
      });
    }

    await Task.findByIdAndDelete(id);

    res.status(200).json({
      message: "Task Deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
