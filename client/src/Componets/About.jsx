import lap from "../images/lap.jpeg";
import "./style.css";
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
export default function About() {
  const [animated, setAnimated] = useState(false);

  const handleEnterViewport = () => {
    setAnimated(true);
  };

  const handleExitViewport = () => {
    setAnimated(false);
  };
  return (
    <>
      <ScrollTrigger onEnter={handleEnterViewport} onExit={handleExitViewport}>
        <div className={`animated-element ab ${animated ? "animate" : ""}`}>
          <div className="container-fluid">
            <h2
              className="mb-4 m_head mt-5"
              style={{ textAlign: "center", color: "white" }}
            >
              GETTING TO KNOW ME
            </h2>

            <p   className="about" style={{color:"#999999",textAlign:"justify"}}>
            Culminating my MCA journey, I delved into the dynamic world of
              software development with a focused MERN stack internship. This
              experience enriched my skills in MongoDB, Express.js, React, and
              Node.js, fostering a deeper passion for creating innovative
              solutions. As a dedicated MCA graduate, I am poised to bring my
              versatile expertise to challenging projects, combining my academic
              foundation with real-world application for impactful contributions
              to the field.My commitment to continuous learning and adaptability
              is evident through my hands-on experience in various technologies.
              Aspiring to contribute my skills and enthusiasm to impactful
              projects, I am poised for success in the dynamic realm of software
              development.
          
            </p>
            {/* <p
              className="about"
              style={{ textAlign: "justify", color: "#999999",padding:"20px"}}
            >
              Culminating my MCA journey, I delved into the dynamic world of
              software development with a focused MERN stack internship. This
              experience enriched my skills in MongoDB, Express.js, React, and
              Node.js, fostering a deeper passion for creating innovative
              solutions. As a dedicated MCA graduate, I am poised to bring my
              versatile expertise to challenging projects, combining my academic
              foundation with real-world application for impactful contributions
              to the field.My commitment to continuous learning and adaptability
              is evident through my hands-on experience in various technologies.
              Aspiring to contribute my skills and enthusiasm to impactful
              projects, I am poised for success in the dynamic realm of software
              development.
            </p> */}

            <div className="container animate__animated animate__slideInDown animate__duration-20s">
              <table className=" tab" style={{ color: "white" }}>
                <tbody>
                  <tr>
                    <td
                      style={{
                        padding: 20,
                        fontWeight: "bolder",
                        fontSize: "16px",
                      }}
                    >
                      Name
                    </td>
                    <td
                      style={{
                        padding: 20,
                        color: "#999999",
                        fontSize: "16px",
                      }}
                    >
                      Blessy K Babu
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        padding: 20,
                        fontWeight: "bolder",
                        fontSize: "16px",
                      }}
                    >
                      Date Of Birth
                    </td>
                    <td
                      style={{
                        padding: 20,
                        color: "#999999",
                        fontSize: "16px",
                      }}
                    >
                      October 11,1999
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        padding: 20,
                        fontWeight: "bolder",
                        fontSize: "16px",
                      }}
                    >
                      Address
                    </td>
                    <td
                      style={{
                        padding: 20,
                        color: "#999999",
                        fontSize: "16px",
                        verticalAlign:"top"
                      }}
                    >
                      Kaleeckal ,Elimullumplackal P O ,Avolikuzhy
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        padding: 20,
                        fontWeight: "bolder",
                        fontSize: "16px",
                      }}
                    >
                      Email
                    </td>

                    <td
                      style={{
                        padding: 20,
                        color: "#999999",
                        fontSize: "16px",
                      }}
                    >
                      blessykbabu5@gmail.com
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </ScrollTrigger>
    </>
  );
}
