const movieDb = require("../data/movies")

const getAll = () => {
    return movieDb.movies;
}

const getOne = (idx) => {
    return movieDb.movies[idx]
}

const create = (movie) => {
    movieDb.movies.push(movie);
}



module.exports = {
    getAll,
    getOne,
    create
}