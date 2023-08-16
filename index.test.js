const { sequelize } = require('./models/index'); // Import sequelize object
const { Course, Branch, User } = require('./models/index');

describe(`Course model`, () => {
  beforeAll(async () => {
    await sequelize.sync(); // Ensure the database schema is up-to-date before tests
  });

  test(`can create a course`, async () => {
    const newCourse = await Course.create({
      name: "Cyber101",
      platform: "Udemy",
      instructor: "Dave smith",
      duration: 10,
    });
    expect(newCourse.name).toEqual("Cyber101");
  });

  test(`can delete a course`, async () => {
    const allCourses = await Course.findAll();
    const newCourse = await Course.create({
      name: "Cyber001",
      platform: "Udemy",
      instructor: "Dave smith",
      duration: 12,
    });
    await newCourse.destroy(); // Destroy the course
    const allCoursesAfterDelete = await Course.findAll();

    expect(allCoursesAfterDelete.length).toEqual(allCourses.length);
  });

  test("can update a course", async () => {
    const newCourse = await Course.create({
      name: "Cyber200",
      platform: "Udemy",
      instructor: "Dave smith",
      duration: 14,
    });

    await newCourse.update({
      name: "Cyber201",
    });

    const updatedCourse = await Course.findByPk(newCourse.id);
    expect(updatedCourse.name).toBe("Cyber201");
  });
});

describe(`Users model`, () => {
  beforeAll(async () => {
    await sequelize.sync(); // Ensure the database schema is up-to-date before tests
  });

  test(`can create a user`, async () => {
    const newUser = await User.create({
      name: "Rudolph",
      email: "rudolph@gmail.com",
      roles: 1 // Assuming roles is an attribute of the User model
    });
    expect(newUser.name).toEqual("Rudolph");
    expect(newUser.email).toEqual("rudolph@gmail.com");
  });

  test(`can delete a user`, async () => {
    const allUsers = await User.findAll();
    const newUser = await User.create({
      name: "Rudolph",
      email: "rudolph@gmail.com",
    });

    await newUser.destroy(); // Destroy the user

    const allUsersAfterDelete = await User.findAll();

    expect(allUsersAfterDelete.length).toEqual(allUsers.length);
  });

  test("can update a user", async () => {
    const newUser = await User.create({
      name: "Rudolph",
      email: "rudolph@gmail.com",
    });

    await newUser.update({
      name: "Santa",
    });

    const updatedUser = await User.findByPk(newUser.id);
    expect(updatedUser.name).toBe("Santa");
  });
});