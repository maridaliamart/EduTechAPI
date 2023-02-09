//import our db, Model, DataTypes
const { db, DataTypes } = require('../db')

//Creating a User child class from the Model parent class
const Course = db.define("course", {
    name: DataTypes.STRING,
    platform: DataTypes.STRING,
    instructor: DataTypes.STRING,
    branch: DataTypes.STRING,
    duration: DataTypes.STRING
});

//exports
module.exports = { Course }