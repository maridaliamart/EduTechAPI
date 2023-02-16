//import our db, Model, DataTypes
const { db, DataTypes } = require('../db')

//Creating a User child class from the Model parent class
const User = db.define("user", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    roles: DataTypes.NUMBER
});

//exports
module.exports = { User }