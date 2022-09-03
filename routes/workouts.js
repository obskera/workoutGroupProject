const express = require("express");
const router = express.Router();
const workoutsController = require("../controllers/workouts");
const { ensureAuth } = require("../middleware/auth");

router.get("/", ensureAuth, workoutsController.getWorkouts);

router.post("/createWorkout", workoutsController.createWorkout);

router.put("/markComplete", workoutsController.markComplete);

router.put("/markIncomplete", workoutsController.markIncomplete);

router.delete("/deleteWorkout", workoutsController.deleteWorkout);

module.exports = router;



// const express = require('express')
// const router = express.Router()
// const todosController = require('../controllers/todos') 
// const { ensureAuth } = require('../middleware/auth')

// router.get('/', ensureAuth, todosController.getTodos)

// router.post('/createTodo', todosController.createTodo)

// router.put('/markComplete', todosController.markComplete)

// router.put('/markIncomplete', todosController.markIncomplete)

// router.delete('/deleteTodo', todosController.deleteTodo)

// module.exports = router