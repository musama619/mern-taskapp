const express = require("express");
const { getTasks, getTask, createTask, updateTask, deletTask } = require("../controllers/taskController");
const router = express.Router();


//GET all games
router.get("/", getTasks);

//GET a single game
router.get("/:id", getTask);

//POST a new game
router.post("/", createTask);

//PUT a new game
router.patch("/:id", updateTask);

//DELETE a game
router.delete("/:id", deletTask);

module.exports = router;
