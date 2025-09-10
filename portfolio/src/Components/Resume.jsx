import React from "react";
import "./Resume.css";
import { useState } from "react";


const Resume = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [head, setHead] = useState('');
  const [link, setLink] = useState('');

  const [popupContent, setPopupContent] = useState('');
  const [popupContent2, setPopupContent2] = useState('');
  const [popupContent3, setPopupContent3] = useState('');
  let project1='Implemented a Full stack Project On Cab Booking Web application ';

  const handleMoreDetails = (project) => {
    // Set the popup content based on the project
    if (project === 'Cab Booking System') {
      setHead(`Cab Booking System`);
      setPopupContent(`
        
      The Full Stack Cab Booking System is a web-based platform designed to make ride booking simple and efficient for users.
       Customers can sign up, log in, and book a cab by selecting their pickup and drop-off locations, viewing estimated fares,
        and receiving driver details instantly. The system also provides booking history, cancellation options, and 
        secure authentication for users. On the other side, drivers can manage ride requests, view customer details, and update ride statuses.
         An admin module is included to manage users, drivers, and bookings, ensuring smooth and reliable operations.
        `);
      setPopupContent2(`
        Technically, the system is implemented using a modern full stack architecture. The frontend is developed with HTML, CSS, JavaScript,
         and React, delivering a responsive and interactive user interface. The backend is powered by Java (Spring Boot)
          to handle authentication, ride management, fare calculation, and API services. Data is stored in MySQL, which manages user profiles,
           cab details, bookings, and ride transactions. Communication between frontend and backend is achieved through RESTful APIs,
            ensuring seamless data flow. This project demonstrates strong full stack skills—covering user experience, backend logic, and
             database management—making it an excellent choice for real-world application and portfolio presentation.
          `);

          setPopupContent3(`HTML , CSS , JavaScript , React Js , Java , My Sql`);
    
        } else if (project === 'PasswordManager') {
      setHead(`PasswordManager`);
      setPopupContent(`
        This project is a Java Swing-based desktop application designed as a comprehensive Password Manager, focusing on enhancing users' digital security. The primary functionalities include strong password generation, password health checks, and secure password storage. Users can generate strong, random passwords tailored to their specific requirements, significantly improving their defense against unauthorized access. The password health check feature assesses the strength of existing passwords, providing feedback and recommendations for enhancing their security based on criteria such as length and complexity.
        `);
      setPopupContent2(`
        The application employs efficient file handling techniques to securely store user passwords in an encrypted format, ensuring that sensitive information remains protected from potential threats. The intuitive graphical user interface (GUI) allows users to navigate effortlessly through the application's features, making password management simple and effective. By prioritizing data security through encryption and providing essential tools for strong password creation and assessment, this Password Manager aims to empower users to maintain better control over their digital security.
        `);
        setPopupContent3(`Java [ AWT , Swing , Oops ]`);
    
    }
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleLeetcode=()=>{
    window.open('https://leetcode.com/u/Jayalakshmi-m/','_blank');
  }
  const handleGithub=()=>{
    window.open('https://github.com/Jayalakshmi-m2905','_blank');
  }
  const handleHackerrank=()=>{
    window.open('https://www.hackerrank.com/profile/jayalakshmim2905','_blank');
  }
  return (
    <div className="resume">
      <h1>Resume</h1>
      <div className="line"></div>
      <br />
      <div className="head1">
        <h1>Education</h1>
        <img src="degree.png" alt="" className="degree" />
      </div>
      <br />

      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-content">
            <div className="box">
              <div className="t-content">
                <div className="content">
                  <div className="year">
                    <img src="calendar.png" alt="" className="calender" />
                    <h4>2022 - 2026 Batch</h4>
                  </div>
                  <h3>Bachelor's Degree</h3>
                  <p>
                    Computer Science and Engineering in Erode Sengunthar Engineering college.
                   

                  </p>
                  <p>CGPA : 8.24</p>
                </div>
              </div>

              <div className="t-content">
                <div className="content">
                  <div className="year">
                    <img src="calendar.png" alt="" className="calender" />
                    2021 - 2022 Batch
                  </div>
                  <h3>Higher Secondary 12th</h3>
                  <p>
                    Bio Maths in VVCRM Sengunthar Girls higher secondary school ,Erode.
                   
                  </p>
                  <p> Percentage : 77%</p>
                </div>
              </div>

              <div className="t-content">
                <div className="content">
                  <div className="year">
                    <img src="calendar.png" alt="" className="calender" />
                    2019 - 2020 Batch
                  </div>
                  <h3>SSLC - 10th</h3>
                  <p>
                  VVCRM Sengunthar Girls Higher Secondary School ,Erode.
                  </p>
                  <p>Percentage : 66%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="head1">
        <h1>Projects</h1>
      </div>
      <br />

      <div className="projects">
        <div className="projectCard">
          <h2>Cab Booking System</h2>
          <p>Full Stack Project</p>
          <p>[React js, JavaScript, Java , MySQL]</p>
          <button onClick={() => handleMoreDetails('Cab Booking System')}>More Details</button>
        </div>
        <div className="projectCard">
          <h2>Password Manager</h2>
          <p>Desktop Application</p>
          <p>[Java, Java Swing]</p>
          <button onClick={() => handleMoreDetails('PasswordManager')}>More Details</button>
        </div>
      </div>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={closePopup}>&times;</span>
            <h2>{head}</h2>
            <p>{popupContent}</p>
            <p>{popupContent2}</p>
            <h2>Technologies Used : <p>{popupContent3}</p></h2>
            <div className="Sc">
              <a href={link}>
            <button>GitHub
              <img src="github.png" alt=""  className="sc-icon"/>
            </button>
            </a>
            </div>
          </div>
        </div>
      )}
      <br />
      <div className="head1">
        <h1>Technical Skills</h1>
        {/* <img src="degree.png" alt="" className="degree" /> */}
      </div>
      <br />
      <div className="Tech-skills">
        <div className="skill">
          <img src="java8.png" alt="" className="skillimage" />
          <h2>Java 8</h2>
        </div>
        <div className="skill">
          <img src="nodejs.jpeg" alt="" className="skillimage" />
          <h2>Node JS</h2>
        </div>
        <div className="skill">
          <img src="react.png" alt="" className="skillimage" />
          <h2>React JS</h2>
        </div>
        <div className="skill">
          <img src="mysql.png" alt="" className="skillimage" />
          <h2>My Sql</h2>
        </div>
        <div className="skill">
          <img src="javascript.png" alt="" className="skillimage" />
          <h2>Java Script</h2>
        </div>
        <div className="skill">
          <img src="dsa.png" alt="" className="skillimage" />
          <h2>Data Structures</h2>
        </div>
      </div>
      <br />
      <div className="head1">
        <h1>Skills Achivements</h1>
        {/* <img src="degree.png" alt="" className="degree" /> */}
      </div>
      <br />
      <div className="skillsAchieved">
        <div className="sa-skills">
            <img src="leetcode.png" alt="" className="sa-skill" />
            <label htmlFor="">Leetcode</label>
            <div className="leet-level">
                <p>Problem Solving</p>
                </div>
            <button onClick={handleLeetcode}>view</button>
        </div>
        <div className="sa-skills">
            <img src="github.png" alt="" className="sa-skill" />
            <label htmlFor="">Git Hub</label>
            <div className="leet-level">
                <p>Projects Contribution</p>
                </div>
            <button onClick={handleGithub}>view</button>
        </div>
            <div className="sa-skills">
                <img src="hackerrank.png" alt="" className="sa-skill" />
                <label htmlFor="">Hackerrank</label>
                <div className="leet-level">
                    <p>Problem Solving</p>
                    </div>
                <button onClick={handleHackerrank}>view</button>
            </div>
      </div>
      <div className="download">
      <a href="Resume_.pdf" download>
          <button >Download Resume 
            <img src="download.png" alt="" className="down" />
          </button>
      </a>
      </div>
    </div>
  );
};


export default Resume;
