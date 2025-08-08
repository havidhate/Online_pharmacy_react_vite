const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/authMiddleware");
const { getSkills, addSkill, deleteSkill } = require("../controllers/skillController");

router.get("/me", protect, getSkills);
router.post("/", protect, addSkill);
router.delete("/:id", protect, deleteSkill);

module.exports = router;
