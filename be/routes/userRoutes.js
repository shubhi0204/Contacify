const express = require("express");
const { registerUser, loginUser, currentUser } = require("../controllers/userController"); // Ensure correct path
const validateToken = require("../middlewares/validateTokenHandler");

const router = express.Router();

// Public routes
router.post("/register", registerUser); // POST route for registration
router.post("/login", loginUser); // POST route for login

// Private route (use middleware to protect it)
router.get("/current", validateToken, currentUser); // POST route for current user

module.exports = router;
