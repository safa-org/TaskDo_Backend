const express = require("express");
const TaskRouter = express.Router();
const { saveTask } = require("./task.service");

TaskRouter.post("/saveTask", saveTask);

module.exports = TaskRouter;
