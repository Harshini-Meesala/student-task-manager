require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

console.log(process.env.MONGO_URI);

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
    res.send("🚀 Student Task Manager Backend is Running!");
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});