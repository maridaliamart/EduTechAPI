import React from "react";
import { Footer } from "./Footer";

export const Main = () => (
    <div className="Main">
      <div className="intro"><p tabIndex="0">The EduTechAPI project is a comprehensive and efficient way for developers to access the most up to date data about the latest top tech courses. Built using Node.js and Express, it is designed to be easy to use and integrate into existing systems. Developers can select a tech branch of their choice, and receive a list of courses from the top 5 online education platforms. Join us in creating a powerful and user-friendly API that will make a real impact.</p></div>
      <br/>
      <h1 tabIndex="0" className="selectabranch">Select a branch</h1>
      <br/>
      <div className="mainbuttons">
      <button className="mainbutton">Web Development</button>
      <button className="mainbutton">Mobile App Development</button>
      <button className="mainbutton">Game Development</button>
      <button className="mainbutton">Database Systems</button>
      <button className="mainbutton">Cloud Computing</button>
      <br/>
      <button className="mainbutton">Artificial Intelligence</button>
      <button className="mainbutton">Machine Learning</button>
      <button className="mainbutton">Data Science</button>
      <button className="mainbutton">Computer Graphics</button>
      <button className="mainbutton">Network Security</button>
      <br/>
      <button className="mainbutton">Operating Systems</button>
      <button className="mainbutton">Distributed Systems</button>
      <button className="mainbutton">Virtual Reality</button>
      <button className="mainbutton">Internet of Things</button>
      <button className="mainbutton">Quality Assurance</button>
      <br/>
      <button className="mainbutton">Human Computer Interaction</button>
      <button className="mainbutton">Embedded Systems</button>
      <button className="mainbutton">Natural Language Processing</button>
      <button className="mainbutton">Blockchain Technology</button>
      <button className="mainbutton">Cybersecurity</button>
      <br/>
      <br/>
      <br/>
      </div>
      <div className="datadisplay">
      here is some data
      </div>
    </div>
  );