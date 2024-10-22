,,const express = require("express");
const dotenv = require("dotenv").config();
const bodyParser = require('body-parser');
const userRoutes = require("./routes/userRoutes"); // Ensure correct path
const connectDb = require("./Config/dbConnection");

const app = express();

// Middleware to parse JSON
app.use(express.json());

connectDb()
// User routes
app.use("/api/users", userRoutes); // Ensure the correct path for routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
