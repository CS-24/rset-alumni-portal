const router = require("express").Router();
const userModel = require("../models/Users");
const bcrypt = require("bcrypt");

router.post("/register",async (req,res)=> {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);

      const newUser = new userModel({
        fname: req.body.fname,
        lname: req.body.lname,
        uid: req.body.uid,
        email: req.body.email,
        password: hashedPassword,
        branch: req.body.branch,
        year: req.body.year
    });
      const User = await newUser.save();
      res.status(200).json(User);
 }
    catch(error) {
      console.log(error);
    }
});

router.post("/login",async (req,res)=> {
  try{
    const user = await userModel.findOne({ uid: req.body.uid });
    !user && res.status(404).json("user not found");

    const validPassword = await bcrypt.compare(req.body.password, user.password)
    !validPassword && res.status(400).json("wrong password")

    res.status(200).json(user)
  } 
  catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;