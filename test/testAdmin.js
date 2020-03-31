let chai = require('chai');
let clientChaiHtpp = require("chai-http");
const expect = require('chai').expect;

chai.use(clientChaiHtpp);
const url = `http://localhost:3000`;

describe('create a admin', function(){
    it('Should create a admin', function(done){
        chai.request(url).post("/users/test")
        .send({id: 0})
        .end(function(err, res){
            expect(res).to.have.status(200);
            done();
        });
    });
});