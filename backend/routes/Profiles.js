const router = require("express").Router();
let profileModel = require("../models/Profiles");

router.route("/").post(async (req,res)=> {
    console.log("got it");
    const profile = {
        fname: req.body.fname,
        lname: req.body.lname,
        uid: req.body.uid,
        email: req.body.email,
        password: req.body.password,
        year: req.body.year,
        branch: req.body.branch
    };
    const newProfile = new profileModel(profile);

    try {
        await newProfile.save().then(console.log("added"));
    }
    catch(err) {
        console.log(err);
    }
})

module.exports = router;