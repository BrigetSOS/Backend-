
const Admin = require('../models/AdminModel').AdminModel;

class AdminController {

    constructor(data){
        this.admin =  new Admin();
        this.admin.setData(data);
    }

    async createAdmin(){
        return await this.admin.create();
    }

    deleteAdmin(){
        return this.admin.delete();
    }

    editAdmin(){
        return this.admin.edit();
    }

    validate(){
        console.log("validate", this.admin.getName());
        if(this.admin.getName() != undefined && this.admin.getEmail() != undefined) return true;
        return false;
    }

}


module.exports = {
    AdminController: AdminController
}