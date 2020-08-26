const mongoose = require('mongoose');
const schema = mongoose.Schema;

const Task = new schema(
  {
    name: { type: String, required: true },
    dueDate: { type: Number, required: true},
    frequency: { type: Number, required: false},
  },
  { timestamps: true },
);

module.exports = mongoose.model('tasks', Task);
