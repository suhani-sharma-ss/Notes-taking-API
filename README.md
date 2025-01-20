# Notes API Project
This project is a simple Notes API built using Node.js, Express, and MongoDB. It allows users to create, retrieve, update, and delete notes linked to a specific user.

## Features
- Create, read, update, and delete notes.
- Error handling for invalid operations.

## Technologies
- Node.js, Express.js
- MongoDB, Mongoose

## Setup
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>

2. Install dependencies:
   npm install

3. Configure .env:
   MONGODB_URI=<your-mongodb-connection-string>
   PORT=3000

4. Start the server:
   node server.js

## Endpoints
- POST /notes - Create a note.
- GET /notes?userId=<userId> - Get all notes for a user.
- GET /notes/:id - Get a specific note by ID.
- PUT /notes/:id - Update a note.
- DELETE /notes/:id - Delete a note.

## Testing
Use Postman or cURL to test the API.
