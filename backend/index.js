const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require('cors');

const profileModel = require("./models/Profiles");
app.use(express.json());

mongoose.connect("mongodb+srv://admin:YzSKC1sNqGIcywtv@rset-alumni-portal.rwuhx3a.mongodb.net/test", {
    useNewUrlParser: true,
});

mongoose.connection.once("open", ()=> {
    console.log("connected");
})

const profilesRouter = require("./routes/Profiles");
app.use("/registration",profilesRouter);

app.listen("3001",()=> {
    
});



