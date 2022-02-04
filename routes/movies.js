const express = require('express');
const router = express.Router();
// const routes = require('./routes')
const movieControl = require("../controllers/movies");

//routes
router.get("/", movieControl.showAll);
router.get("/new", movieControl.new)
router.get("/:id", movieControl.showOne)
router.post("/", movieControl.create)

module.exports = router

