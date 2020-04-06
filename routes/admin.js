let express = require('express');
AdminController = require("../controllers/AdminController");
AdminModel = require("../models/AdminModel");
let Database = require('../infrastructure/ManagerConnection').Connection;
let db = new Database();

router =  express.Router();

async function getListAdmins(){
    let result;
    try {
     result= await db.queryCommand('select * from gentem.admin;')
    console.log(result); 
    } catch (error) {
        console.log(error);
    }
    return result;
}

router.get('/list', async function(req, res){
    console.log(process.env.USERNAME);
    db.getConection();
    db.createDatabase();
    data = await getListAdmins();
    console.log("enviado");
    res.json({result: data});
});

router.post("/create", function(req, res){
    console.log("create admin");
    res.end(200);
});
router.post("/deleteAdmin", function(req, res){

});

router.post("/editAdmin", function(req, res){

});

module.exports = router;

