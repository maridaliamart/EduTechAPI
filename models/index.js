const { Course } = require('./Course')
const { User } = require('./User')

Course.belongsTo(User)
User.hasMany(Course)

module.exports = {Course, User}