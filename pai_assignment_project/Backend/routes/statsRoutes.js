const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/authMiddleware");
const { authorizeRoles } = require("../middlewares/roleMiddleware");
const { topPerformers } = require("../controllers/statsController");

router.get("/top-performers", protect, authorizeRoles("admin"), topPerformers);

module.exports = router;
