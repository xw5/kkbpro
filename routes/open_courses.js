var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.locals.gender = "男";
  res.render('open_courses',{name:'xw'});
});

module.exports = router;
