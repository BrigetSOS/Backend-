var express = require('express');
var jwt = require('jsonwebtoken');

var router = express.Router();

function midelwareTokenAuth(req, res, next){
  const token = req.headers['access-token'];
  if (token) {
    jwt.verify(token, process.env.TOKEN, function(err, decoded){
      if(err) res.json({message: "invalid-Token"});
      req.decoded = decoded;
      next();
    });
  }else{
    res.json({ message: "no-Token"});
  }
} 

router.post('/auth-token', function(req, res, next){
  const userdata  = { user: req.body.user, password: req.body.password };
  const token = jwt.sign(userdata, process.env.TOKEN , {expiresIn: 1440});
  res.json({token : token});
});

router.post('/test', midelwareTokenAuth ,function(req, res, next) {
  console.log("req");
  res.status(200).send("ok");
});

module.exports = router;
