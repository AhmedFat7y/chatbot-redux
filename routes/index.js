var express = require('express');
var router = express.Router();

/* GET /webhook/ page. */
router.get('/', function(req, res, next) {
  res.send('helloworld');
});

router.post('/', function(req, res, next) {
  res.send('helloworld');
});

module.exports = router;
