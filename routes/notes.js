// Import Express framework
const express = require("express");
// Create a router instance for handling note routes
const router = express.Router();
// Import the Note model
const Note = require("../models/Note");

// Create a new note
router.post("/", async (req, res) => {
  try {
    const { title, content, userId } = req.body; // Extract note details from the request body
    const newNote = new Note({
      title,
      content,
      userId,
    }); // Create a new Note instance
    await newNote.save(); // Save the note to the database
    res.status(201).json(newNote); // Respond with the created note
  } catch (error) {
    res.status(400).json({ error: error.message }); // Handle validation or input errors
  }
});

// Retrieve all notes for a user
router.get("/", async (req, res) => {
  try {
    const { userId } = req.query; // Extract userId from query parameters
    const notes = await Note.find({ userId }); // Find notes that match the userId
    res.status(200).json(notes); // Respond with the list of notes
  } catch (error) {
    res.status(500).json({ error: error.message }); // Handle server errors
  }
});

// Retrieve a specific note by ID
router.get("/:id", async (req, res) => {
  try {
    const note = await Note.findById(req.params.id); // Find the note by its ID
    if (!note) {
      return res.status(404).json({ error: "Note not found" }); // Return 404 if note doesn't exist
    }
    res.status(200).json(note); // Respond with the found note
  } catch (error) {
    res.status(500).json({ error: error.message }); // Handle server errors
  }
});

// Update a note
router.put("/:id", async (req, res) => {
  try {
    const { title, content } = req.body; // Extract updated note details
    const note = await Note.findByIdAndUpdate(
      req.params.id, // Note ID to update
      { title, content, updatedAt: Date.now() }, // Update fields and set updatedAt timestamp
      { new: true } // Return the updated note
    );
    if (!note) {
      return res.status(404).json({ error: "Note not found" }); // Return 404 if note doesn't exist
    }
    res.status(200).json(note); // Respond with the updated note
  } catch (error) {
    res.status(400).json({ error: error.message }); // Handle input or update errors
  }
});

// Delete a note
router.delete("/:id", async (req, res) => {
  try {
    const note = await Note.findByIdAndDelete(req.params.id); // Find and delete the note by its ID
    if (!note) {
      return res.status(404).json({ error: "Note not found" }); // Return 404 if note doesn't exist
    }
    res.status(200).json({ message: "Note deleted successfully" }); // Respond with a success message
  } catch (error) {
    res.status(500).json({ error: error.message }); // Handle server errors
  }
});

// Export the router to use in the main server file
module.exports = router;