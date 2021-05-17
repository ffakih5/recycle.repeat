
const express = require('express');
const secured = require('../middleware/secured');
const router = express.Router();
const path = require('path');

/* GET user profile. */
// send react 
router.get('/user', secured(), function (req, res, next) {
    const { _raw, _json, ...userProfile } = req.user; //get current badge above
    /*res.render('user', {
        userProfile: JSON.stringify(userProfile, null, 2), //current badge.
        title: 'Profile page'
    });*/

    res.sendFile(path.join(__dirname, "../client/public/index.html"));

    router.get('/user', (req, res) => {
        res.send(req.user)
    });
    console.log(req.user);
});

module.exports = router;