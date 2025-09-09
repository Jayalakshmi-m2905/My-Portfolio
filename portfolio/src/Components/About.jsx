import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="about">
      <h1>About Me</h1>
      <div className="line"></div>
      <p>
      I am currently pursuing a Bachelor of Engineering in Computer Science, with a focus on Full Stack Development, Enterprise Java, Data Structures, and Web Technologies.
      My academic journey has equipped me with a strong foundation in both frontend and backend technologies, allowing me to build scalable, responsive web applications.
      </p>
      <p>
      I have a deep understanding of modern software development practices, including enterprise-level solutions, optimized algorithms, and data management techniques. 
      </p>
      <p>
      I am also passionate about creating professional portfolios that highlight my technical skills, innovative projects, and personal achievements. Through hands-on experience and project-based learning,
       I continuously work to enhance my expertise in the ever-evolving field of software development
      </p>

      <h2>Actions I'm Taking</h2>
      <div className="actions">
        <div className="card">
        <img src="ps.png" alt="" className="image"/>
        <div className="caption">
          <h3>Problem Solving</h3>
          <label htmlFor="">Challenging the Problem in coding platforms</label>
        </div>
        </div>
        <div className="card">
        <img src="coding.png" alt="" className="image"/>
        <div className="caption">
          <h3>Web Development</h3>
          <label htmlFor="">Developing the high quality web sites with the professional level</label>
        </div>
        </div>
        
      </div>
      <div className="actions">
      <div className="card">
        <img src="inno.png" alt="" className="image"/>
        <div className="caption">
          <h3>Innovative thing</h3>
          <label htmlFor="">Challenging and Enhancing the Innovative Development in Tech Stack</label>
        </div>
        </div>
        <div className="card">
        <img src="fire.png" alt="" className="image"/>
        <div className="caption">
          <h3>Video Game</h3>
          <label htmlFor="">Engage in fast-paced survival battles, scavenge weapons, strategize, and outlast enemies to achieve victory</label>
        </div>
        </div>
        
      </div>
      
    </div>
  );
};

export default About;
