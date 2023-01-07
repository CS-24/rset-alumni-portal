const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const app = express();
const cors = require('cors');

mongoose.connect("mongodb+srv://admin:YzSKC1sNqGIcywtv@rset-alumni-portal.rwuhx3a.mongodb.net/test", {
    useNewUrlParser: true,
});

mongoose.connection.once("open", ()=> {
    console.log("connected");
})

//middlewares
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

const authRouter = require("./routes/auth");
const userRouter = require("./routes/Users");
const postRouter = require("./routes/Posts");

app.use("/auth",authRouter);
app.use("/users",userRouter);
app.use("/posts",postRouter);

app.listen("3001",()=> {
    
});



