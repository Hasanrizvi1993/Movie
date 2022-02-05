const express = require('express');
const router = express.Router();
// const routes = require('./routes')
const actorControl = require("../controllers/actors");

//routes
router.get("/", actorControl.showAll);
router.get("/new", actorControl.new)
router.get("/:id", actorControl.showOne)
router.post("/", actorControl.create)

module.exports = router

