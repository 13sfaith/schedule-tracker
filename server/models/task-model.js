const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Task = new Schema(
  {
    name: { type: String, required: true },
    dueDate: { type: Number, required: true},
    frequency: { type: Number, required: true},
  },
  { timestamps: true },
);

module.exports = mongoose.model('tasks', Task);
