var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Intro' });
});
/* map page. */
router.get('/map', function(req, res, next) {
  res.render('map', { title: 'TravelMap' });
});
/* practice page. */
router.get('/viewpictures', function(req, res, next) {
  res.render('viewpictures', { title: 'viewPictures' });
});

// router.get('/test/:contentId', function(req, res, next) {
//   res.render('test', { title: 'test' });
// });
module.exports = router;
