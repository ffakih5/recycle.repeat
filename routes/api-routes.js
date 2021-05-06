//const connection = require("../config/connection.js");
const Score = require("../models/score.js");

module.exports = (app) => {
    //GET
    app.get("/api/all", (req, res) => {

        Score.findAll({}).then((results) => res.json(results));
    });
    //ADD
    app.post("/api/new", (req, res) => {
        console.log("Score Data:");
        console.log(req.body);

        Score.create({
            email: req.body.email,

        }).then((results) => res.json(results));
    });
}



