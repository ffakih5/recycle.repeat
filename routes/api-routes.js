//const connection = require("../config/connection.js");
const Score = require("../models/score.js");

const { Op } = require('sequelize');

module.exports = (app) => {
    //GET ALL SCORES
    app.get("/api/all", (req, res) => {
        Score.findAll({}).then((results) => res.json(results));
    });
    // SPECIFIC SCORE
    app.get("/api/:score", (req, res) => {
        Score.findAll({
            where: {
                email: req.params.score,
            },
        }).then((results) => res.json(results));
    });

    //ADD A SCORE 
    app.post("/api/new", (req, res) => {
        const score = req.body;

        Score.create({
            email: req.body.email,

        }).then((results) => res.json(results));
    });

    app.delete("/api/book:id", (req, res) => {
        const id = req.body;

        Score.destroy({
            where: {
                id: req.params.id,
            },
        }).then(() => res.end())
    });
};



