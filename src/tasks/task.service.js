const Task = require("../models/tasks.models");
const User = require("../models/users.models");

// checking the login user
const isHod = async (req, res) => {
  const user = await User.findOne({ email: req.user.email });
  console.log(user);
  if (user.role === "Head of the department") {
    res.send("Hod Login");
  } else {
    res.send("Professor Login");
  }
};

const saveTask = async (req, res) => {
  const assignedUser = req.body.assignedUser;
  const title = req.body.title;
  const description = req.body.description;
  const assignedDate = req.body.assignedDate;
  const expectedDate = req.body.expectedDate;
  const submittedDate = req.body.submittedDate;

  const newTask = Task({
    assignedUser,
    title,
    description,
    assignedDate,
    expectedDate,
    submittedDate,
  });
  try {
    await newTask.save();
    res.send("task is saved");
  } catch (err) {
    console.log(err, "this has error");
  }
};

module.exports = { saveTask, isHod };
