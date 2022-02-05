const db = require("../models/actor");

//function to grab all movies and send it the movies page
const showAllActors = (req,res) => {
    res.render("actors", {
        actors: db.getAll(),
    })
}

const showSingleActor = (req, res) => {
    res.render("singleActor", {
        actor: db.getOne(req.params.id)
    })
}

const newActor = (req,res) => {
    res.render("newActor")
}

const createActor = (req, res) => {
    db.create(req.body)
    res.redirect("/actors")
}

module.exports = {
    showAll: showAllActors,
    showOne: showSingleActor,
    new: newActor,
    create: createActor,
}
