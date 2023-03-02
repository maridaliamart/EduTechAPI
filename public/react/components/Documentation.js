import React from "react";
import { useNavigate } from "react-router-dom";

const course = {
  name: "HTML, CSS, and Javascript for Web Developers",
  platform: "Coursera",
  instructor: "Yaakov Chaikin",
  duration: "40 hours",
};

const branch = {
  name: "Cloud Computing",
};

const user = {
    name: "testUser",
    email: "testUser@gmail.com",
    password: "ThisIsA",
    roles: "User"
    
};

export const Documentation = () => {
  const navigate = useNavigate();

  const goBack = async () => {
    navigate("/");
  };

  return (
    <div className="documentation">
      <div className="docchild">
        <h1 className="documentheader" tabIndex={0}>
          Documentation
        </h1>
        <br />
        <h1 tabIndex={0}>Overview</h1>
        <h3 tabIndex={0}>
          This API allows users to retrieve information about software
          engineering courses. The API returns data in JSON format.
        </h3>
        <br />
        <h1 tabIndex={0}>Endpoints</h1>
        <h3 tabIndex={0}>Courses</h3>
        <h5 tabIndex={0}>
          `GET /courses`: Retrieve a list of all software engineering courses.
        </h5>
        <h5 tabIndex={0}>
          `GET /courses/course_id`: Retrieve details for a specific course,
          including information on the course name, instructor, and duration.
        </h5>
        <br />
        <h3 tabIndex={0}>Branches</h3>
        <h5 tabIndex={0}>
          `GET /branches`: Retrieve a list of all software engineering branches.{" "}
        </h5>
        <br />
        <h3 tabIndex={0}>Users</h3>
        <h5 tabIndex={0}>`GET /branches`: Retrieve a list of all users. </h5>
        <br />
        <h1 tabIndex={0}>Data Models</h1>
        <h3 tabIndex={0}>Course</h3>
        <div className="data models">
          <p tabIndex={0} className="jsondata">
            &#123;
            <br />
            "id": "1",
            <br />
            "name": "{course.name}",
            <br />
            "platform": "{course.platform}",
            <br />
            "instructor": "{course.instructor}",
            <br />
            "duration": "{course.duration}"
            <br />
            &#125;
          </p>

          <br />
          <h3 tabIndex={0}>Branch</h3>
          <p tabIndex={0} className="jsondata">
            &#123;
            <br />
            "id": "1",
            <br />
            "name": "{branch.name}"
            <br />
            &#125;
          </p>
          <br />
          <h3 tabIndex={0}>User</h3>
          <p tabIndex={0} className="jsondata">
            &#123;
            <br />
            "id": "1",
            <br />
            "name": "{user.name}"
            <br />
            "email": "{user.email}"
            <br/>
            "password": "{user.password}"
            <br/>
            "roles": "{user.roles}"
            <br/>
            &#125;
          </p>
        </div>
        <button
          className="buttonBack"
          onClick={() => {
            goBack();
          }}
        >
          Back
        </button>
      </div>
    </div>
  );
};
