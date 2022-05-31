const express = require("express");
const TaskRouter = express.Router();
const { saveTask, isHod } = require("./task.service");

TaskRouter.post("/saveTask", saveTask);
TaskRouter.get("/isHod", isHod);

module.exports = TaskRouter;
