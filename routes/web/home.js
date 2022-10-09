/*
Web App Dev Assignment 1
October 8, 2022
COMP 229 SEC 001
Harshpreet Kular
301235577
*/
var express = require("express");

var router = express.Router();

//index
router.get("/", function(req, res) {
 res.render("home/");
 });
 //home
 router.get("/home", function(req,res){
     res.render("home/home");
 });
//about
 router.get("/about", function(req, res){
    res.render("home/about");
 });

 //projects
 router.get("/projects", function(req, res){
    res.render("home/projects");
 });

 //services
 router.get("/services", function(req, res){
    res.render("home/services");
 });
//contact
router.get("/contact", function(req, res){
    res.render("home/contact");
 });
 module.exports = router;