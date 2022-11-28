import express from "express";
// import morgan from "morgan";
import { commentsRouter } from "./Routes/comments.js";
import { postsRouter } from "./Routes/posts.js";
import cors from "cors";

const app = express();
const PORT = process.env.port || 3000;

// app.use(express.static("public")); not needed???
app.use(cors());
app.use(express.json());

app.use("/api/posts", postsRouter);
app.use("/api/comments", commentsRouter);

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});

//this document is all pretty clear
//I like the gaps between separate sections of the code - helps readability