const express = require("express");
const {
    getTasks,
    getTask,
    getCompletedTasks,
    createTask,
    updateTask,
    deletTask,
    getNotCompletedTasks,
} = require("../controllers/taskController");

const auth = require("../middleware/auth");

const router = express.Router();

//auth route access
router.use(auth);

//GET all tasks
router.get("/", getTasks);

//GET completed tasks
router.get("/completed", getCompletedTasks);

//GET not completed tasks
router.get("/active", getNotCompletedTasks);

//GET a single task
router.get("/:id", getTask);

//POST a new task
router.post("/", createTask);

//PUT a new task
router.patch("/:id", updateTask);

//DELETE a task
router.delete("/:id", deletTask);

module.exports = router;
