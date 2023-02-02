//import dependencies
const path = require('path') //helps us find our file easily
const fs = require('fs').promises //helps us get access to promises when dealing with seeding data into our database

//import our database [x]
//import the model that we are trying to import our data into [x]
const {db} = require('./db')
const { Course, User } = require('./models/index')


//write our seed function -> take our json file, create rows with our data into it
const seed = async () => {

    await db.sync({ force: true }); // clear out database + tables

    const courseSeedPath = path.join(__dirname, 'course.json'); //get the path to Course.json file
    const userSeedPath = path.join(__dirname, 'users.json')


    const buffer = await fs.readFile(courseSeedPath); //asynchronously reads the content in this file
    const userBuffer = await fs.readFile(userSeedPath);

    const {courseData} = JSON.parse(String(buffer)); // First we convert the data from buffer into a string, then we parse the JSON so it converts from string -> object
    const {usersData} = JSON.parse(String(userBuffer));


    const CoursePromises = courseData.map(course => Course.create(course)); //creates Course and puts it into our Course table
    const UserPromises = usersData.map(user => User.create(user));

    await Promise.all(CoursePromises); // The Promise.all() method takes an iterable of promises as an input, and returns a single Promise that resolves to an array of the results of the input promises.
    await Promise.all(UserPromises)

    console.log("Course and User database info populated!")
}

//export my seed function
module.exports = seed;