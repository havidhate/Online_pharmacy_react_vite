const mongoose = require("mongoose");

const sprintSchema = new mongoose.Schema({
  title: String,
  goal: String,
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  startDate: Date,
  endDate: Date,
  completed: { type: Boolean, default: false },
  points: Number
});

module.exports = mongoose.model("Sprint", sprintSchema);
