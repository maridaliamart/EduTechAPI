const { Branch } = require('./Branch')
const { Course } = require('./Course')
const { User } = require('./User')

Course.belongsTo(User)
User.hasMany(Course)

Course.belongsTo(Branch)
Branch.hasMany(Course)

module.exports = {Course, User, Branch}