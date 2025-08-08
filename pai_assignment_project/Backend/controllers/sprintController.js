const Sprint = require("../models/Sprint");

exports.getSprints = async (req, res) => {
  const { completed } = req.query;
  const filter = { assignedTo: req.user._id };
  if (completed) filter.completed = completed === "true";
  const sprints = await Sprint.find(filter);
  res.json(sprints);
};

exports.assignSprint = async (req, res) => {
  const sprint = await Sprint.create(req.body);
  res.status(201).json(sprint);
};

exports.markComplete = async (req, res) => {
  const sprint = await Sprint.findById(req.params.id);
  if (!sprint || sprint.assignedTo.toString() !== req.user._id.toString()) {
    return res.status(403).json({ message: "Not permitted" });
  }
  sprint.completed = true;
  await sprint.save();
  res.json(sprint);
};
