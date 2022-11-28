import express from "express";
import createComment from "../Models/comments.js";

export const commentsRouter = express.Router();

//nice comment on the line below - clear and concise 
// post a comment.
commentsRouter.post("/", async function (req, res) {
  const data = req.body;
  const newComment = await createComment(data);
  res.json({ success: true, payload: newComment });
});

// //patch a post by ID.
// commentsRouter.patch("/:id", async function (req, res) {
//   const data = req.body;
//   const updatedComment = await updatedComment(data);
//   res.json({ success: true, payload: updatedComment });
// });

// //delete a comment by ID.
// commentsRouter.delete("/:id", async function (req, res) {
//   const deletedComment = await deleteComment(req);
//   res.json({ success: true, payload: deletedComment });
// });

//again I'm thinking the commented out parts are probably things you wanted to complete in the next sprint?