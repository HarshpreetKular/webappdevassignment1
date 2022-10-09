/*
Web App Dev Assignment 1
October 8, 2022
COMP 229 SEC 001
Harshpreet Kular
301235577
*/
//imports
var express = require("express");
var router = express.Router();

router.get("/",function(req,res){
    //console.log("Hello I'm on the start page")
    //render index page
    res.render("index");
});

module.exports = router;