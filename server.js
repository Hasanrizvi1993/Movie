//External modules
const express = require('express');
const mongoose = require('mongoose');

//internal
const routes = require('./routes');

//instanced modules
//to create the express app
const app = express();

//PORT
const PORT = 4000;

//configuration-view engine
app.set("view engine", "ejs");

//Routes
app.get("/", function(req,res){
    res.send("I am your new project");
});

//404 routes
app.get((req,res)=>{
    res.send("404, error!")
});


//server listener

app.listen(PORT);


