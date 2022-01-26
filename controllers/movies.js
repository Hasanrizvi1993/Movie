const db = require("../models/movie");

//function to grab all movies and send it the movies page
const showAllMovies = (req,res) => {
    res.render("movies", {
        movies: db.getAll(),
    })
}

const showSingleMovie = (req, res) => {
    res.render("singleMovie", {
        movie: db.getOne(req.params.id)
    })
}

const newMovie = (req,res) => {
    res.render("newMovie")
}

const createMovie = (req, res) => {
    db.create(req.body)
    res.redirect("/movies")
}

module.exports = {
    showAll: showAllMovies,
    showOne: showSingleMovie,
    new: newMovie,
    create: createMovie,
}
