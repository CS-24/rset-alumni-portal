const express = require("express");
const app = express();

const db = require('./models');

app.use(express.json());

// Routers
const postRouter = require('./routes/Posts');
app.use("/posts", postRouter);

// const profilesRouter = require('./routes/Profiles');
// app.use("/profiles", profilesRouter);

// const commentsRouter = require('./routes/Comments');
// app.use("/comments",commentsRouter);

const usersRouter = require('./routes/Users');
app.use("/users",usersRouter);

// const likesRouter = require('./routes/Likes');
// app.use("/likes",likesRouter);


db.sequelize.sync().then(() =>{
    app.listen(3001, ()=>{
        console.log("Running");
    });
});



