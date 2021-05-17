const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Recycle Repeat', img: 'client/src/assets/image/recycle.png' });
});

module.exports = router;