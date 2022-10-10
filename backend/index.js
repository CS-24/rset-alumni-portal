const express = require("express");
const app = express();

const db = require('./models');

app.use(express.json());

// Routers
const postRouter = require('./routes/Posts');
app.use("/posts", postRouter);

db.sequelize.sync().then(() =>{
    app.listen(3001, ()=>{
        console.log("Running");
    });
});



