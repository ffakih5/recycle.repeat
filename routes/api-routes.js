//const connection = require("../config/connection.js");
const Model = require("../models/model.js");
const express = require("express");
const fs = require("fs");
const db = require("../models/model");
const router = express.Router();

//GET ALL SCORES
router.get("/api/all", (req, res) => {
    res.status(200).json({
        message: "handling GET request to /api-routes"
    })
    db.Score.findAll({}).then((dbScore) => res.json(dbScore));
});
// SPECIFIC SCORE

router.get('/api/:score', (req, res) => {
    db.Score.findAll({
        where: {
            email: req.params.score,
        },
    }).then((dbScore) => res.json(dbScore));
});

//ADD A SCORE 
router.post('/api/score', (req, res) => {
    const score = req.body;

    db.Score.create(
        {
            email: req.body.email,
            score: req.body.score,
            current_badge: req.body.current_badge

        }).then((results) => res.json(results));
});

router.delete('/api/score:id', (req, res) => {
    const id = req.body;

    db.Score.destroy({
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

//let piecesCollected;
//let score;
//let badge;
//score = piecesCollected;
//badge = score/10; // for every score of 10 , 1 bade, score = 25 will result in 2 badges

/*const scoreBadge(){

scoreList = []
for (i = 0; i < scoreList; i++);
const badge = {
    'goldfish',
    'octopus',
    'seahorse',
    'whale',
}
return badge;

if (score >= 50,
    badge = goldfish)
else if (score >= 100, badge = octopus);
else if (score >= 150. badge = seahorse);
else (score >= 200, badge = whale);

if*/


router.get('/api/badge', (req, res) => {
    console.log("somestring");
    // findAll returns all entries for a table when used with no options
    db.Badge.findAll({}).then((dbBadge) => res.json(dbBadge));
});

router.post('/api/badge', (req, res) => {
    const badge = req.body;
    db.Badge.create({
        badge_name: req.body.badge_name,
        score: req.body.score,
        image: req.body.score
    }).then((dbBadge) => res.json(dbBadge));
});

router.delete('/api/badge/:id', (req, res) => {
    // We just have to specify which todo we want to destroy with "where"
    db.Badge.destroy({
        where: {
            id: req.params.id,
        },
    }).then((dbBadge) => res.json(dbBadge));
});

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
//replace Model with db
/*

/

router.get('/api/badge', (req, res) => {
    console.log("somestring");
    // findAll returns all entries for a table when used with no options
    db.Badge.findAll({}).then((dbBadge) => res.json(dbBadge));
});

// POST route for saving a new todo

// DELETE route for deleting todos using the ID (req.params.id)


// PUT route for updating todos. We can get the updated todo data from req.body



//const Image = db.badge;
//const db = require("../models");
// force: true will drop the table if it already exists
/*db.sequelize.sync({ force: true }).then(() => {
    //Give any image name here.
    const imageUrl = fs.readFileSync(__dirname + '/assets/images/goldfish.png');
    Image.create({
        type: 'png',
        name: 'JSA Banner',
        data: imageUrl
    }).then(image => {
        try {
            fs.writeFileSync(__dirname + '/assets/images/goldfish.png', image.data);

            // exit node.js app
            process.exit(0);
        } catch (e) {
            console.log(e);
        }
    })
});
*/

//badge to be 
// if statement for score to be checked along with existing badge//

module.exports = router;

