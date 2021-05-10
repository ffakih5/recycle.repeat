//const connection = require("../config/connection.js");
//const Model = require("../config/models/model.js");
const db = require("../models");
//replace Model with db

module.exports = (app) => {
    //GET ALL SCORES
    app.get("/api/all", (req, res) => {
        Model.Score.findAll({}).then((results) => res.json(results));
    });
    // SPECIFIC SCORE
    app.get("/api/:score", (req, res) => {
        Model.Score.findAll({
            where: {
                email: req.params.score,
            },
        }).then((results) => res.json(results));
    });

    //ADD A SCORE 
    app.post("/api/score", (req, res) => {
        const score = req.body;

        db.Score.create(
            {
                email: req.body.email,

            }).then((results) => res.json(results));
    });

    app.delete("/api/score:id", (req, res) => {
        const id = req.body;

        Model.Score.destroy({
            where: {
                id: req.params.id,
            },
        }).then(() => res.end())
    });

    app.put("/api/score", (req, res) => {
        db.Score.update(
            {
                score: req.body.score,

            },
            {
                where: {
                    id: req.body.id,
                },
                //change to email as that's whats independent
            }
        ).then((dbScore) => res.json(dbScore));
    });

    //badge to be 
    // if statement for score to be checked along with existing badge//
};



