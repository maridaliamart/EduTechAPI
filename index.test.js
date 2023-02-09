// const { DESCRIBE } = require('sequelize/types/query-types')
const { sequelize } = require("./models/index");
const { Course, Branch, User} = require("./models/index");

describe(`Course model`, () => {
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
    const allcourses = await Course.findAll();
    const newCourse = await Course.create({
      name: "Cyber001",
      platform: "Udemy",
      instructor: "Dave smith",
      duration: 12,
    });
    newCourse.destroy({
      where: {
        name: "Cyber001",
      },
    });
    const allcoursesAfterDelete = await Course.findAll();

    expect(allcoursesAfterDelete.length).toEqual(allcourses.length);
  });

  test("can update an course", async () => {
    const newCourse = await Course.create({
      name: "Cyber200",
      platform: "Udemy",
      instructor: "Dave smith",
      duration: 14,
    });

    await newCourse.update({
      name: "Cyber201",
    });
    expect(newCourse.name).toBe("Cyber201");
  });
});
