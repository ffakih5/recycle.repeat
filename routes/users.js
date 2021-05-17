
const express = require('express');
const secured = require('../middleware/secured');
const router = express.Router();

/* GET user profile. */
router.get('/user', secured(), function (req, res, next) {
    const { _raw, _json, ...userProfile } = req.user; //get current badge above
    res.render('user', {
        userProfile: JSON.stringify(userProfile, null, 2), //current badge.
        title: 'Profile page'
    });
});

module.exports = router;