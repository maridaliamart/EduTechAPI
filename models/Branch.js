//import our db, Model, DataTypes
const { db, DataTypes } = require('../db')

//Creating a Branch child class from the Model parent class
const Branch = db.define("branch", {
    name: DataTypes.STRING
});

//exports
module.exports = { Branch }