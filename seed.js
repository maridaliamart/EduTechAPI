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
        courses[20],
        courses[40],
    ])
    branches[1].setCourses([
        courses[1],
        courses[21],
        courses[41],
    ])
    branches[2].setCourses([
        courses[2],
        courses[22],
        courses[42],
    ])
    branches[3].setCourses([
        courses[3],
        courses[23],
        courses[43],
    ])
    branches[4].setCourses([
        courses[4],
        courses[24],
        courses[44],
    ])
    branches[5].setCourses([
        courses[5],
        courses[25],
        courses[45],
    ])
    branches[6].setCourses([
        courses[6],
        courses[26],
        courses[46],
    ])
    branches[7].setCourses([
        courses[7],
        courses[27],
        courses[47],
    ])
    branches[8].setCourses([
        courses[8],
        courses[28],
        courses[48],
    ])
    branches[9].setCourses([
        courses[9],
        courses[29],
        courses[49],
    ])
    branches[10].setCourses([
        courses[10],
        courses[30],
        courses[50],
    ])
    branches[11].setCourses([
        courses[11],
        courses[31],
        courses[51],
    ])
    branches[12].setCourses([
        courses[12],
        courses[32],
        courses[52],
    ])
    branches[13].setCourses([
        courses[13],
        courses[33],
        courses[53],
    ])
    branches[14].setCourses([
        courses[14],
        courses[34],
        courses[54],
    ])
    branches[15].setCourses([
        courses[15],
        courses[35],
        courses[55],
    ])
    branches[16].setCourses([
        courses[16],
        courses[36],
        courses[56],
    ])
    branches[17].setCourses([
        courses[17],
        courses[37],
        courses[57],
    ])
    branches[18].setCourses([
        courses[18],
        courses[38],
        courses[58],
    ])
    branches[19].setCourses([
         courses[19],
         courses[39],
         courses[59],
    ])
    console.log("Courses, Users, and Branches have been populated into the database!")
}

//export my seed function
module.exports = seed;