const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/input', function (req, res, next) {
    res.render('input');
});

module.exports = router;