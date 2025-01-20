// Import Mongoose for database modeling
const mongoose = require("mongoose");

// Define the schema for a Note
const noteSchema = new mongoose.Schema({
  title: { type: String, required: true },// The title of the note (required field)
  content: { type: String, required: true }, // The content/body of the note (required field)
  userId: { type: String, required: true }, // ID of the user who created the note 
  createdAt: { type: Date, default: Date.now }, // Automatically stores the date and time when the note is created
  updatedAt: { type: Date, default: Date.now }, // Automatically stores the date and time when the note is updated
});

// Export the Note model to use it in other parts of the application
module.exports = mongoose.model("Note", noteSchema);
