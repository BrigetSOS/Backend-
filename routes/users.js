var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/test', function(req, res, next) {
  console.log("req");
  res.status(200).send("ok");
});

module.exports = router;
