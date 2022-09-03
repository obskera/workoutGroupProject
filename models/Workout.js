const mongoose = require('mongoose')

const WorkoutSchema = new mongoose.Schema({
  workoutName: {
    type: String,
    required: true,
  },
  reps: {
    type: Number,
    required: true,
  },
  showReps: {
    type: Boolean,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  partial: {
    type: Boolean,
    required: true,
  },
  dateTime: {
    type: Boolean,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  userId: {
    type: String,
    required: true
  },
})

module.exports = mongoose.model('Workout', WorkoutSchema)

