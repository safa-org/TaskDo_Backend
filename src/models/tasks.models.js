const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema({
  assignedUser: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    requried: true,
  },
  description: {
    type: String,
    required: true,
  },
  assignedDate:{
      type:Date,
      required: true,
  },
  expectedDate:{
    type:Date,
    required: true, 
  },
  submittedDate:{
    type:Date,
    required: true,
  }

});

module.exports =  Task = mongoose.model("task",TaskSchema) 