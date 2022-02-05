//External modules
const express = require('express');

//Middleware
const app = express();
app.set('view engine', 'ejs')
// Specifies the location of the static assets folder
app.use(express.static('static'));
app.use(express.json());
// Sets up body-parser for parsing form data
app.use(express.urlencoded({ extended: false }));
// sets up public folder for style assets
app.use("/public", express.static(__dirname + '/public'))




//instanced modules
//to create the express app
// const routes = routes();
//PORT
const PORT = 4000;

//Routes
app.get("/", function(req,res){
    res.render("home");
});

app.use("/movies", require("./routes/movies"));

app.use("/actors", require("./routes/actors"));


//404 routes
app.get((req,res)=>{
    res.send("404, error!")
});


//server listener

app.listen(PORT);


