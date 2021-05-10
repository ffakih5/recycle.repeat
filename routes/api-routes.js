//const connection = require("../config/connection.js");
//const Model = require("../config/models/model.js");
const express = require("express");
const db = require("../models");
const router = express.Router();
//replace Model with db

module.exports = (app) => {
    //GET ALL SCORES
    router.get("/api/all", (req, res) => {
        res.status(200).json({
            message: "handling GET request to /api-routes"
        })
        db.Score.findAll({}).then((results) => res.json(results));
    });
    // SPECIFIC SCORE
    router.get("/api/:score", (req, res) => {
        Model.Score.findAll({
            where: {
                email: req.params.score,
            },
        }).then((results) => res.json(results));
    });

    //ADD A SCORE 
    router.post("/api/score", (req, res) => {
        const score = req.body;

        db.Score.create(
            {
                email: req.body.email,
                score: req.body.score,
                current_badge: req.body.current_badge

            }).then((results) => res.json(results));
    });

    router.delete("/api/score:id", (req, res) => {
        const id = req.body;

        Model.Score.destroy({
            where: {
                id: req.params.id,
            },
        }).then(() => res.end())
    });

    router.put("/api/score", (req, res) => {
        db.Score.update(
            {
                score: req.body.score,

            },
            {
                where: {
                    email: req.body.email,
                },
                //change to email as that's whats independent
            }
        ).then((dbScore) => res.json(dbScore));
    });


    router.get('/api/badge', (req, res) => {
        // findAll returns all entries for a table when used with no options
        db.Badge.findAll({}).then((dbBadge) => res.json(dbBadge));
    });

    // POST route for saving a new todo
    router.post('/api/badge', (req, res) => {
        const badge = req.body;
        db.Badge.create({
            badge_name: req.body.badge_name,
            score: req.body.score,
            image: req.body.score
        }).then((dbBadge) => res.json(dbBadge));
    });

    // DELETE route for deleting todos using the ID (req.params.id)
    router.delete('/api/badge/:id', (req, res) => {
        // We just have to specify which todo we want to destroy with "where"
        db.Badge.destroy({
            where: {
                id: req.params.id,
            },
        }).then((dbBadge) => res.json(dbBadge));
    });

    // PUT route for updating todos. We can get the updated todo data from req.body
    router.put('/api/badge', (req, res) => {
        db.Badge.update(
            {
                badge_name: req.body.badge_name,
                score: req.body.score,
                image: req.body.score
            },
            {
                where: {
                    id: req.body.id,
                },
            }
        ).then((dbBadge) => res.json(dbBadge));
    });


    //badge to be 
    // if statement for score to be checked along with existing badge//
};

module.exports = router;

