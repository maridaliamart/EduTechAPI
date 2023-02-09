require('dotenv').config('.env');
const cors = require('cors');
const express = require('express');
const app = express();
const morgan = require('morgan');
const { db } = require("./db");
const jwt = require('jsonwebtoken')
const { JWT_SECRET } = process.env;

const port = 3000;
const seed = require('./seed')

const { User, Course } = require('./models')
const userRoutes = require('./routes/UserRoutes')
const coursesRoutes = require('./routes/CourseRoutes')

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// seed()

const {
    AUTH0_SECRET,
    AUTH0_AUDIENCE = 'http://localhost:3000',
    AUTH0_CLIENT_ID,
    AUTH0_BASE_URL,
  } = process.env;
  
  const config = {
    authRequired: true, // this is different from the documentation
    auth0Logout: true,
    secret: AUTH0_SECRET,
    baseURL: AUTH0_AUDIENCE,
    clientID: AUTH0_CLIENT_ID,
    issuerBaseURL: AUTH0_BASE_URL,
  };
  
  
const { auth } = require('express-openid-connect');

app.use(auth(config))
app.use('/users', userRoutes)
app.use('/courses', coursesRoutes)

app.use(async (req, res, next) => {
    // like this
    const [user] = await User.findOrCreate({
      where: {
        // properties mentioned above
        name: `${req.oidc.user.name}`,
        email: `${req.oidc.user.email}`,
  
      }
    });
    console.log(user)
    next()
  });  

// Get request

app.get('/', (req, res) => {
    res.send(req.oidc.isAuthenticated() ? 
     `<h1>EduTech</h1>
      <h2> Welcome back ${req.oidc.user.name} </h2>
      <p>Email: ${req.oidc.user.email}</p>
      <img src=${req.oidc.user.picture}/>`
   : 'Logged out');
  });

  app.get("/me", async(req,res,next)=> {
    try{
      const user = await User.findOne({
        where: {
          email: req.oidc.user.email
        },
        raw: true,
      });
      if(user){
        const token = jwt.sign(user, JWT_SECRET, { expiresIn: '1w' });
        res.send({user, token})
      }else{
        res.status(401).send("No user");
      }
    }catch(error){
      console.error(error);
      next(error);
    }
  })

  // Courses

  app.get('/courses', async (req, res, next) => {
    try {
      const courses = await Course.findAll();
      res.send(courses);
    } catch (error) {
      console.error(error);
      next(error);
    }
  });

// Error Handling Middleware
app.use((error, req, res, next) => {
    console.error('SERVER ERROR: ', error);
    if(res.statusCode < 400) res.status(500);
    res.send({error: error.message, name: error.name, message: error.message});
  });

app.listen(port, () => {
    db.sync();
    console.log(`Server started on port ${port}`);
})