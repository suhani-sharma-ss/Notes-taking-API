// Load environment variables
require("dotenv").config(); 

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// Import the note routes module
const noteRoutes = require("./routes/notes"); 

// Initialize the Express application
const app = express();

// Parse JSON requests
app.use(bodyParser.json()); 

// Connect to MongoDB Atlas
mongoose
  .connect("mongodb+srv://user1:testpassword@cluster0.2fcgv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Set up the routes
app.use("/notes", noteRoutes);

// Default route to provide a basic response
app.get("/", (req, res) => {
  res.send("Welcome to the Notes API!");
});

// Start the server and listen on the specified port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


