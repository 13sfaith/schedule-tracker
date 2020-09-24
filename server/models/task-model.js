const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Task = new Schema(
  {
    name: { type: String, required: true },
    totalDays: { type: Number, required: true},
    daysAchieved: { type: [Number], required: true},
  },
  { timestamps: true },
);

module.exports = mongoose.model('tasks', Task);
