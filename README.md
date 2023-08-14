# EduTechAPI


The EduTechAPI project is a comprehensive and efficient way for developers to access the most up to date data about the latest top tech courses. Built using Node.js and Express, it is designed to be easy to use and integrate into existing systems. Developers can select a tech branch of their choice, and receive a list of courses from the top 5 online education platforms. Join us in creating a powerful and user-friendly API that will make a real impact.

![Screenshot 2023-03-02 2 25 00 PM](https://github.com/EduTechAPI/EduTechAPI/assets/109438051/71600580-7e4e-4a1a-afbc-ccc2e3faa30c)


## Collaborators


[Shir](https://github.com/shirkocurek)\
[Brynner](https://github.com/Brynner03)\
[Maridalia](https://github.com/maridaliamart)


### Tier 1 — MVP Application - CRUD and REST ✔️

-As a User, I want to read entries from the database

-As a User, I want to add entries to the database

-As a User, I want to delete entries from the database

-As a User, I want to edit entries in the database

-As a User, I expect to do all of the above by accessing RESTful routes

-As a User, I want to log in to a deployed app. Reference the Deployment section for instructions.


### Tier 2 - Login, Hashing ✔️

-As a User, I want to be able to log in to my API

-As a User, I want any passwords saved to be hashed and salted before saved to the database (note: If you use OAuth, you    might not even store passwords at all!)


### Tier 3 - Register ✔️

-As a potential User, I want to be able to sign up for the API

-As a signed-up User, I want to be granted authorization to access the API


### Tier 4 - Authorization ✔️

-As a User, I want my API protected from unauthorized Users

-As an unauthorized User, I want a helpful message telling me I do not have access to the API

-(optional, but recommended): As a user, I want to receive a helpful error message anytime there is a problem with the   request (i.e. error handling middleware)

-As a User, I expect not to be able to create new entities without first logging in / authenticating in some way (token/session)

-As a User, I want my data to only be accessible by myself

-As a User, I want my data to only be editable/deletable by myself


### Tier 5 - Associated Data ✔️

In addition to the Tier 1 MVP criteria…

-As a User, I want to be able to read a single entry

-As a User requesting a single entry, I want to see the associated user info and other associated data. For example, if your API is a concert, instead of just the concert, I want to see who created the concert entry, as well as the associated location data, artist info, and attendees coming to the event.


### Tier 6 - Admin vs User ✔️

-As an Admin, I want to have a special super-user account type that allows access to content Users don’t have access to

-As a basic User, when requesting a list of all entries, I expect to only see my own entries (not entries of other users)

-As an Admin, when requesting a list of all entries, I expect to be able to see all entries, regardless of user/owner

-As an Admin, I want to be able to edit other users’ information via the API

-As an Admin, I want to be able to delete or edit any entity, regardless of user/owner


### Bonus Goal 1: Front End Login ✔️

-As a User, I want to be able to use a client-side form to Log in/out of my application.

-As a User, I want to be able to sign up using a client-side form.

-This could be via a traditional web form, or more preferably, with a React app.


### Bonus Goal 2: Seed ✔️

-As a Developer cloning the repo for the first time, I want to be able to run a seed command and have the database populated with data.

-As a Developer, I want multiple users to be seeded to the database.


### Bonus Goal 3: Testing ✔️

-As a Developer, I want to be able to run a test commend (such as npm test or the command specific to your technology/project) and have all my tests run.

-As a Developer, I want to know if my new code has broken anything (passing tests means it theoretically didn’t).


### Bonus Goal 7: Front End Application ✔️

-As a User, I want to access, create, edit, and delete my data all from a front-end GUI application.

-As a returning user, I want to be automatically logged in, instead of having to enter my credentials each time I revisit the application.

-As a User, I want my app to be visually stunning.




## Installation

Run the following commands in order to seed your data and start your server.

```bash
npm install
npm run seed
npm run server-dev
```

In a separate terminal, run the following command in order to bring up the front-end.

```bash
npm run client-dev
```

## Technologies Used

[Sequelize](https://sequelize.org/) - An Object Relational Mapping that was used to manipulate or add data as well as define Models.

[ExpressJS](https://expressjs.com/) - Framework for Node.js that was used to build our server

[Jest](https://jestjs.io/) - Testing framework that was used to test our models, database modifications and methods.

[NodeJS](https://nodejs.org/en/) -Javascript Runtime Environment

[Github](https://github.com/) - For version control

[Postman](https://www.postman.com/) - Testing API calls for our DELETE, PUT, POST and GET.

