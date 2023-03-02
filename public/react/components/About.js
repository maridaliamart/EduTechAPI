import React from "react";

export const About = () => (
  <div class="about">
    <h1 tabindex="0" class="aboutheader">About</h1>
    <div class="aboutpara">
    <p tabindex="0">
      The EduTech API is a tool designed to help individuals interested in
      pursuing a career in software engineering. This API provides detailed
      information about courses within specific branches of the software
      engineering track, enabling users to make informed decisions about their
      education and career paths. Whether you're a student exploring different
      academic options, a professional considering a career change, or an
      educator seeking to improve your curriculum, the EduTech API has valuable
      information that can help you achieve your goals. With this API, you can
      access details on the curriculum name, instructors, time required for
      completion, and platform. The EduTech API is easy to use and provides data
      in a standardized JSON format, making it simple to integrate into your own
      applications or tools. With the wealth of information available through
      this API, you can gain insights into the software engineering education
      landscape and make informed decisions about your academic and professional
      future.
    </p>
    </div>
    <button className='buttonBack' onClick={()=>{goBack()}}>Back</button>
  </div>
);
