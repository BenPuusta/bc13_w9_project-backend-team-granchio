// router on the line below isn't being used anywhere - this is so minor but I guess if there was time just delete that word
import express, { Router } from "express";
import { createPost } from "../Models/post.js";
import getAllPostsandComments from "../Models/post.js";
export const postsRouter = express.Router();

postsRouter.get("/", async function (req, res) {
  const PostsCommentsArray = await getAllPostsandComments();
  res.json({ success: true, payload: PostsCommentsArray });
});

// get single post by ID, and all comments
// postsRouter.get("/:id", async function (req, res) {
//   const post = await getPost(req);
//   res.json({ success: true, payload: post });
// });

// //post a post.
postsRouter.post("/", async function (req, res) {
  console.log(req.body);
  const data = req.body;
  const newPost = await createPost(data);
  res.json({ success: true, payload: newPost });
});

// //patch a post by ID.
// postsRouter.patch("/:id", async function (req, res) {
//   const data = req.body;
//   const updatedPost = await updatePost(data);
//   res.json({ success: true, payload: updatedPost });
// });

// //delete a post by ID.
// postsRouter.delete("/:id", async function (req, res) {
//   const deletedPost = await deletePost(req);
//   res.json({ success: true, payload: deletedPost });
// });

// //getposts by title search VERSION 2
// //

//easy to follow, clear and well indented
//could the commented out parts be removed or do you want them for editing in future sprints? add comment if for future use