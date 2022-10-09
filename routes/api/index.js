/*
Web App Dev Assignment 1
October 8, 2022
COMP 229 SEC 001
Harshpreet Kular
301235577
*/
var express = require("express");

var router = express.Router();

router.use("/users", require("./users"));

module.exports = router;