import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import NavBar from "./Components/NavBar";
import Resume from "./Components/Resume";
// import BubbleEffect from './Components/BubbleEffect'
import { useState, useEffect } from "react";

function App() {
  const [state, setState] = useState("About");
  const [about, setAbout] = useState(true);
  const [resume, setResume] = useState(false);
  const [contact, setContact] = useState(false);
  const handleLinkedIn = () => {
    window.open(
      "https://www.linkedin.com/in/jayalakshmim/",
      "_blank"
    );
  };
  const handleInstagram = () => {
    window.open(
      "https://www.instagram.com/jayalakshmi_muthusamy_?igsh=MWowa3hvZmh0cDVjYw==",
      "_blank"
    );
  };
  const handleGithub = () => {
    window.open("https://github.com/Jayalakshmi-m2905", "_blank");
  };
  // Use useEffect to update the state based on `state` variable changes
  useEffect(() => {
    if (state === "About") {
      setAbout(true);
      setContact(false);
      setResume(false);
    } else if (state === "Contact") {
      setAbout(false);
      setContact(true);
      setResume(false);
    } else {
      setAbout(false);
      setContact(false);
      setResume(true);
    }
  }, [state]);
  return (
    <>
      <NavBar state={state} setState={setState} />

      <div className="container">
        {!resume && (
          <div className="profile">
            <div>
            <img src="profile.jpg" alt="profile" className="DP" />
            <h3 className="myname">Jayalakshmi M</h3>
            <h2>Software Engineer</h2>
            </div>
            <div>
            <div className="location">
              <button className="pinbutton">
                <img src="pin.png" alt="pin" className="pin" />
              </button>
              <div className="title1">
                <label htmlFor="" className="holder">
                  LOCATION
                </label>
                <label htmlFor="" className="data">
                  Erode , TamilNadu
                </label>
              </div>
            </div>
            <div className="location">
              <button className="pinbutton">
                <img src="mail.png" alt="pin" className="pin" />
              </button>
              <div className="title1">
                <label htmlFor="" className="holder">
                  EMAIL
                </label>
                <label htmlFor="" className="data">
                  jayalakshmim2905@gmail.com
                </label>
              </div>
            </div>
            <div className="location">
              <button className="pinbutton">
                <img src="mobile.png" alt="pin" className="pin" />
              </button>
              <div className="title1">
                <label htmlFor="" className="holder">
                  MOBILE
                </label>
                <label htmlFor="" className="data">
                  +91 9361887769
                </label>
              </div>
            </div>
            <div className="socialmedia">
              <button onClick={handleLinkedIn}>
                <img src="linkedin.png" alt="" id="sm" />
              </button>
              <button onClick={handleInstagram}>
                <img src="instagram.png" alt="" id="sm" />
              </button>
              <button onClick={handleGithub}>
                <img src="github logo.png" alt="" id="sm" />
              </button>
            </div>
            </div>
          </div>
        )}
        <div className="pages">
          {about && <About />}
          {resume && <Resume />}
          {contact && <Contact />}
        </div>
      </div>
    </>
  );
}

export default App;
