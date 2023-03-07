var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function (req, res, next) {
  res.render('pages/home', { layout: 'layout', title: 'home' });
});


module.exports = router;
