//import dependencies
const path = require('path') //helps us find our file easily
const fs = require('fs').promises //helps us get access to promises when dealing with seeding data into our database

//import our database [x]
//import the model that we are trying to import our data into [x]
const {db} = require('./db')
const { Course, User, Branch } = require('./models/index')


//write our seed function -> take our json file, create rows with our data into it
const seed = async () => {

    await db.sync({ force: true }); // clear out database + tables

    const courseSeedPath = path.join(__dirname, 'courses.json'); //get the path to Course.json file
    const userSeedPath = path.join(__dirname, 'users.json')
    const branchSeedPath = path.join(__dirname, 'branches.json')


    const buffer = await fs.readFile(courseSeedPath); //asynchronously reads the content in this file
    const userBuffer = await fs.readFile(userSeedPath);
    const branchBuffer = await fs.readFile(branchSeedPath)

    const {coursesData} = JSON.parse(String(buffer)); // First we convert the data from buffer into a string, then we parse the JSON so it converts from string -> object
    const {usersData} = JSON.parse(String(userBuffer));
    const {branchesData} = JSON.parse(String(branchBuffer))


    const CoursePromises = coursesData.map(course => Course.create(course)); //creates Course and puts it into our Course table
    const UserPromises = usersData.map(user => User.create(user));
    const BranchPromises = branchesData.map(branch => Branch.create(branch))

    const courses = await Promise.all(CoursePromises); // The Promise.all() method takes an iterable of promises as an input, and returns a single Promise that resolves to an array of the results of the input promises.
    const users = await Promise.all(UserPromises)
    const branches = await Promise.all(BranchPromises)

    branches[0].setCourses([
        courses[0],
        courses[1],
        courses[2],
        

    ])
    branches[1].setCourses([
        courses[3],
        courses[4],
        courses[5],
    ])

    console.log("Courses, Users, and Branches have been populated into the database!")
}

//export my seed function
module.exports = seed;