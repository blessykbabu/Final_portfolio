import About from "./About";
import Education from "./Education";
import "./style.css";
import { Link as ScrollLink, Element } from "react-scroll";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
export default function Home() {
  const openResume = () => {
    const resumePath = "src/files/BLESSY K BABU.pdf";

    window.open(resumePath, "_blank");
  };
  return (
    <>
      <Element name="home">
        <div className="container-fluid home animate__animated animate__slideInDown animate__duration-20s animate__delay-1s">
        <div className="row ">
            <div className="col-lg-6 name">
              <h6>
                <span style={{ color: "#FFBD39" }}>Hello !</span>
              </h6>
              <h3>
                <span className="b" style={{ color: "white" }}>
                  {" "}
                  I'm{" "}
                </span>
                <span className="b" style={{ color: "#FFBD39" }}>
                  BLESSY K BABU
                </span>
              </h3>
              <h5 className="dev" style={{ color: "white" }}>
                FULL STACK DEVELOPER
              </h5>
              <button className="open-cv-button mb-5 " onClick={openResume}>
                Open CV <span className="arrow">&#8594;</span>
              </button>
             
            </div>
            <div className="col-lg-6 img">{/* <img src={pic} /> */}</div>
          </div>
          {/* <div className="row ">
            <p
              id="text"
              className="about"
              style={{ color: "#999999", textAlign: "justify" }}
            >
              I am a dedicated MERN stack developer with a strong foundation
              gained through a rewarding internship. My passion for software
              development drives my commitment to excellence. Proficient in
              MongoDB, Express.js, React, and Node.js, I bring hands-on
              experience and a proactive mindset to contribute effectively to
              dynamic projects.
            </p>
          </div> */}
        </div>
      </Element>
      <Element name="about">
        <About />
      </Element>

      <Element name="education">
        <Education />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="skills">
        <Skills/>
      </Element>
      <Element>
        <Contact/>
      </Element>
    </>
  );
}
