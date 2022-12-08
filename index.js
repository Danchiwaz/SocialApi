import express  from "express";
import authRouter from "./routes/auth.js";
import commentRouter from "./routes/comments.js";
import likesRouter from "./routes/likes.js";
import postsRouter from "./routes/posts.js";
import userRouter from "./routes/users.js";


const app = express();
app.use(express.json());

// dealing with routes 
app.use('/api/users', userRouter)
app.use('/api/posts', postsRouter);
app.use('/api/comments', commentRouter);
app.use('/api/likes', likesRouter);
app.use('/api/auth', authRouter);

// end of dealing with routes 




// server plus assigning the port number 
app.listen(8800, () =>{
    console.log("server is listening on port 8800");
})

// ens of server plus assigning the port number 