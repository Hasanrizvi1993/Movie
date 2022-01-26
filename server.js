//External modules
const express = require('express');
const mongoose = require('mongoose');

//internal


//instanced modules
//to create the express app
const app = express();
// const routes = routes();
//PORT
const PORT = 4000;

//configuration-view engine
app.set("view engine", "ejs");

//Routes
app.get("/", function(req,res){
    res.render("home");
});

app.use("/movies", require("./routes/movies"));


//404 routes
app.get((req,res)=>{
    res.send("404, error!")
});


//server listener

app.listen(PORT);


