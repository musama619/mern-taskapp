const Task = require("../models/TaskModel");
const mongoose = require("mongoose");

//get all tasks
const getTasks = async (req, res) => {
    const user_id = req.user._id;
    const tasks = await Task.find({ user_id }).sort({ createdAt: -1 });
    if (!tasks) {
        return res.status(404).json({ error: "No such task" });
    }
    res.status(200).json(tasks);
};

//get a single task
const getTask = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such task" });
    }
    const task = await Task.findById(id);
    if (!task) {
        return res.status(404).json({ error: "No such task" });
    }
    res.status(200).json(task);
};

const getCompletedTasks = async (req, res) => {
    const user_id = req.user._id;
    console.log(req);
    const tasks = await Task.find({ isComplete: true, user_id: user_id });
    if (!tasks) {
        return res.status(404).json({ error: "No such task" });
    }
    res.status(200).json(tasks);
};
const getNotCompletedTasks = async (req, res) => {
    const user_id = req.user._id;

    const tasks = await Task.find({ isComplete: false, user_id: user_id });
    if (!tasks) {
        return res.status(404).json({ error: "No such task" });
    }
    res.status(200).json(tasks);
};

//create a task
const createTask = async (req, res) => {
    const {
        title,
        description,
        dueDate,
        isActive,
        isComplete,
        isDeleted,
        isReminder,
        color,
    } = req.body;
    const user_id = req.user._id;
    try {
        const task = await Task.create({
            title,
            description,
            dueDate,
            isActive,
            isComplete,
            isDeleted,
            isReminder,
            color,
            user_id,
        });
        if (!task) {
            return res.status(404).json({ error: "No such task" });
        }
        res.status(200).json(task);
    } catch (error) {
        console.log(error.message);
    }
};

//update a task
const updateTask = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such task" });
    }

    const task = await Task.findOneAndUpdate(
        { _id: id },
        {
            ...req.body,
        }
    );

    if (!task) {
        return res.status(404).json({ error: "No such task" });
    }
    res.status(200).json(task);
};

//delete a task
const deletTask = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such task" });
    }

    const task = await Task.findOneAndDelete({ _id: id });
    if (!task) {
        return res.status(404).json({ error: "No such task" });
    }
    res.status(200).json(task);
};

module.exports = {
    getTasks,
    getCompletedTasks,
    getNotCompletedTasks,
    getTask,
    createTask,
    updateTask,
    deletTask,
};
