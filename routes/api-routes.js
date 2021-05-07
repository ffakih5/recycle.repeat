//const connection = require("../config/connection.js");
const Score = require("../models/score.js");

module.exports = (app) => {
    //GET
    app.get("/api/:score?", (req, res) => {
        if (req.params.score) {
            Score.findOne({
                where: {
                    score: req.params.score

                },
            }).then((result) => res.json(result));
        } else {
            Score.findAll().then((result) => res.json(result));
        }
    });


    //ADD
    app.post("/api/new", (req, res) => {
        const score = req.body;

        Score.create({
            email: req.body.email,

        }).then((results) => res.json(results));


        Score.create({
            email: score.email,
            points: score.points
        });
        res.status(200).json(score);
    });
}



