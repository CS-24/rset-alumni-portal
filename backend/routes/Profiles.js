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
        branch: req.body.branch,
        year: req.body.year
    };
    const newProfile = new profileModel(profile);
    await newProfile.save();
})

module.exports = router;