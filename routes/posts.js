const express = require("express");
const router = express.Router();
// TODO: Import Model and validation function for Post
// TODO: Import all controller functions from controllers/postController.js

router.get("/", async (req, res) => {
  // TODO: write route handling logic for getting all posts
});

router.get("/:id", async (req, res) => {
  // TODO: write route handling logic for getting a single post by id
});

router.post("/", async (req, res) => {
  // TODO: write route handling logic for creating a new post
});

router.put("/:id", async (req, res) => {
  // TODO: write route handling logic for updating a single post
});

router.delete("/:id", async (req, res) => {
  // TODO: write route handling logic for deleting a post
});

module.exports = router;
