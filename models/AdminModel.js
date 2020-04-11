const Database = require('../infrastructure/ManagerConnection').Connection;

class AdminModel{
    constructor(){
        this.database = new Database();
        this.database.getConection();
        this.name = "";
        this.email = "";
    }

    async create(){
     let result = await this.database.queryCommand(`INSERT INTO gentem.admin (name, email)
        values ("${this.name}", "${this.email}")`);

        return result['affectedRows'] == 1 ? 'created' :  'not-created';
    }
    
    getDataAdmin(commandSQL){

    }

    setData(data){
        this.name = data.name;
        this.email = data.email;
    }

    getName(){
        return this.name;
    }

    getEmail(){
        return this.email;
    }


}

module.exports = {
    AdminModel :  AdminModel
}