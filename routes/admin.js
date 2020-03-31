let express = require('express');
AdminController = require("../controllers/AdminController");
AdminModel = require("../models/AdminModel");

router =  express.Router();

router.post("/create", function(req, res){
    console.log("create admin");
    res.end(200);
});
router.post("/deleteAdmin", function(req, res){

});

router.post("/editAdmin", function(req, res){

});

module.exports = router;

