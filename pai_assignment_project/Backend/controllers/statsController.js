const Sprint = require("../models/Sprint");
const User = require("../models/User");

exports.topPerformers = async (req, res) => {
  const performers = await Sprint.aggregate([
    { $match: { completed: true } },
    {
      $group: {
        _id: "$assignedTo",
        avgPointsPerDay: {
          $avg: {
            $divide: [
              "$points",
              { $divide: [{ $subtract: ["$endDate", "$startDate"] }, 1000 * 60 * 60 * 24] }
            ]
          }
        }
      }
    },
    { $sort: { avgPointsPerDay: -1 } },
    { $limit: 3 }
  ]);

  const populated = await User.populate(performers, { path: "_id", select: "name email" });
  res.json(populated);
};
