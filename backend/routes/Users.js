const { application } = require('express');
const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");

const { Users } = require("../models");

router.get("/", async (req, res) => {
  const userList = await Users.findAll();
  res.json(userList);
});

router.get("/byId/:id", async (req, res) => {
    const id = req.params.id;
    const user = await Users.findByPk(id);
    res.json(user);
});

router.post("/", async (req, res) => {
    const {password,mobile,email} = req.body;
    //email validation
    bcrypt.hash(password, 10).then((hash) => {
      Users.create({
        email: email,
        password: hash,
        mobile:mobile
      });
      res.json("Successfully Registered!");
    });
  });

module.exports = router;

/*
{
	"password": "123shiva",
	"mobile": "8089715069",
  "email": "shivasundar911@gmail.com",
}
*/