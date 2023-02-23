import React from "react";
const course = {
    "name": "HTML, CSS, and Javascript for Web Developers",
    "platform": "Coursera",
    "instructor": "Yaakov Chaikin",
    "duration": "40 hours"
  }

export const Documentation = () => (
    <div class="documentation">
        <h1 tabIndex={0}>Documentation</h1>
        <br/>
        <h2 tabIndex={0}>Overview</h2>
        <h3 tabIndex={0}>This API allows users to retrieve information about software engineering courses. The API returns data in JSON format.</h3>
        <br/>
        <h1 tabIndex={0}>Endpoints</h1>
        <br/>
        <h3 tabIndex={0}>Courses</h3>
        <h5 tabIndex={0}>`GET /courses`: Retrieve a list of all software engineering courses.</h5>
        <h5 tabIndex={0}>`GET /courses/course_id`: Retrieve details for a specific course, including information on the course name, instructor, and duration.</h5>
        <h5 tabIndex={0}>`program_id`: Filters the list of courses by the program id.</h5>
        <br/>
        <h3 tabIndex={0}>Branches</h3>
        <h5 tabIndex={0}>`GET /branches`: Retrieve a list of all software engineering branches. </h5>
        <br/>
        <h3 tabIndex={0}>Users</h3>
        <h5 tabIndex={0}>`GET /branches`: Retrieve a list of all users. </h5>
        <br/>
        <h1 tabIndex={0}>Data Models</h1>
        <h3 tabIndex={0}>Course</h3>
        <div class="data models">
       <p tabIndex={0} class="jsondata"> &#123;
        <br/>
        "Name": {course.name},
        <br/>
        "PLATFORM": {course.platform}
        <br/>
        &#125;</p>
        </div>
    </div>
);