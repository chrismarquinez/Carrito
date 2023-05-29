const express = require ("express");
const Task = require("../models/taskModel");
const { createTask, getTasks , getTask , deleteTask } = require("../controllers/taskController");
const router = express.Router();


router.post("/api/tasks", createTask);
router.get("/api/tasks", getTasks);
router.get("/api/tasks/:id", getTask);
router.get("/api/tasks", deleteTask);


module.exports = router;