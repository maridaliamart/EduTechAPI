

const express = require("express");
const app = express();
const { db } = require("./db");

const port = 3000;
const seed = require('./seed')

const userRoutes = require('./routes/UserRoutes')
const coursesRoutes = require('./routes/CourseRoutes')

// seed()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get('/', (req,res) => res.json({message: 'Server works'}))

app.use('/users', userRoutes)
app.use('/courses', coursesRoutes)

app.listen(port, () => {
    db.sync();
    console.log(`Server started on port ${port}`);
})