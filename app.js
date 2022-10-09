/*
Web App Dev Assignment 1
October 8, 2022
COMP 229 SEC 001
Harshpreet Kular
301235577
*/
//imports
var express = require("express");
var path = require("path");
var routes= require("./routes")

var app=express();
//set port to 3000
app.set("port", process.env.PORT || 3000)

//tell node js where views are
app.set("views", path.join(__dirname, "views"));
//tell node js which view engine we are using
app.set("view engine", "ejs");

//Use routes
app.use(routes);

var HOST = 'localhost'
var PORT = 3000

app.listen(PORT); 

console.log(`Server running at http://${HOST}:${PORT}/`); 
module.exports = app; 