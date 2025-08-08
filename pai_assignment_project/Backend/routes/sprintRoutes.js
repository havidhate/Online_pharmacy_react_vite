const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/authMiddleware");
const { authorizeRoles } = require("../middlewares/roleMiddleware");
const { getSprints, assignSprint, markComplete } = require("../controllers/sprintController");

router.get("/", protect, getSprints);
router.post("/", protect, authorizeRoles("mentor"), assignSprint);
router.patch("/:id", protect, markComplete);

module.exports = router;
