const Task = require("../models/tasks.models")

const saveTask = async(req,res)=>{
    const assignedUser = req.body.assignedUser;
    const title = req.body.title;
    const description = req.body.description;
    const assignedDate = req.body.assignedDate;
    const expectedDate = req.body.expectedDate;
    const submittedDate = req.body.submittedDate;

    const newTask =Task({
        assignedUser,
        title,
        description,
        assignedDate,
        expectedDate,
        submittedDate
    })
    try{
        await saveTask.save()
        res.send("task is saved")
    }
    catch(err){
        console.log(err,"this has error")
    }
}

module.exports = {saveTask}