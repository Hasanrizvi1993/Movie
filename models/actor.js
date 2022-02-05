const actorDb = require("../data/actors")

const getAll = () => {
    return actorDb.actors;
}

const getOne = (idx) => {
    return actorDb.actors[idx]
}

const create = (actor) => {
    actorDb.actors.push(actor);
}



module.exports = {
    getAll,
    getOne,
    create
}