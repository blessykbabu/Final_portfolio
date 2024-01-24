import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import ed from "../images/download.png";
import "./style.css";
import ScrollTrigger from "react-scroll-trigger";

export default function Education() {
  const [animated, setAnimated] = useState(false);

  const handleEnterViewport = () => {
    setAnimated(true);
  };

  const handleExitViewport = () => {
    setAnimated(false);
  };
  const [animateFirst, setAnimateFirst] = useState(false);
  const [animateSecond, setAnimateSecond] = useState(false);
  const [animateThird, setAnimateThird] = useState(false);
  const [animateFourth, setAnimateFourth] = useState(false);

  useEffect(() => {
    const firstContainerTimeout = setTimeout(() => {
      setAnimateFirst(true);
    }, 1000);

    const secondContainerTimeout = setTimeout(() => {
      setAnimateSecond(true);
    }, 2000);

    const thirdContainerTimeout = setTimeout(() => {
      setAnimateThird(true);
    }, 3000);

    const fourthContainerTimeout = setTimeout(() => {
      setAnimateFourth(true);
    }, 4000);

    // Clear timeouts on component unmount or cleanup
    return () => {
      clearTimeout(firstContainerTimeout);
      clearTimeout(secondContainerTimeout);
      clearTimeout(thirdContainerTimeout);
    };
  }, []);
  return (
    <>
      <ScrollTrigger onEnter={handleEnterViewport} onExit={handleExitViewport}>
        <div
          className={`animated-element ed mt-5 mb-5 ${
            animated ? "animate" : ""
          }`}
        >
          <div className="container">
            <h1
              className="mb-4 m_head"
              style={{ textAlign: "center", color: "white" }}
            >
              LEARNING JOURNEY
            </h1>

            {/* 
   <main className="page-content">
  <div className="card">
    <div className="content">
      <h2 className="title" style={{color:"#ffbd39"}}>2020-2022</h2>
      <p className="copy">
      MASTER OF COMPUTER APPLICATION
      </p>
      <p>APJ Abdul Kalam Technological University </p>
    </div>
  </div>
  <div className="card">
    <div className="content">
      <h2 className="title">To The Beach</h2>
      <p className="copy">
        Plan your next beach trip with these fabulous destinations
      </p>
      <button className="btn">View Trips</button>
    </div>
  </div>
  <div className="card">
    <div className="content">
      <h2 className="title">Desert Destinations</h2>
      <p className="copy">It's the desert you've always dreamed of</p>
      <button className="btn">Book Now</button>
    </div>
  </div>
  <div className="card">
    <div className="content">
      <h2 className="title">Explore The Galaxy</h2>
      <p className="copy">
        Seriously, straight up, just blast off into outer space today
      </p>
      <button className="btn">Book Now</button>
    </div>
  </div>
</main> */}

            <div className="row mt-5">
              <div className="col-lg-6">
                <div className="card edcard m-5" style={{ width: "40rem" }}>
                  <div className="card-body">
                    <h5
                      className="card-title m-3"
                      style={{ color: "#ffbd39", textAlign: "center" }}
                    >
                      2020-2022
                    </h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">
                      MASTER OF COMPUTER APPLICATION
                    </h6>
                    <p className="card-text m-3"  style={{ color: "#999999" }}>
                      APJ Abdul Kalam Technological University
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card edcard m-5" style={{ width: "40rem" }}>
                  <div className="card-body">
                    <h5
                      className="card-title"
                      style={{ color: "#ffbd39", textAlign: "center" }}
                    >
                      2017-2020
                    </h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary m-3">
                      BACHELOR OF COMPUTER APPLICATION
                    </h6>
                    <p className="card-text m-3" style={{ color: "#999999" }}>
                      Mahatma Gandhi University
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card edcard m-5" style={{ width: "40rem" }}>
                  <div className="card-body">
                    <h5
                      className="card-title"
                      style={{ color: "#ffbd39", textAlign: "center" }}
                    >
                      2017
                    </h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary m-3 ">
                      HIGHER SECONDARY EDUCATION
                    </h6>
                    <p className="card-text m-3" style={{ color: "#999999" }}>
                      The Directorate of Higher Secondary Education
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card edcard m-5" style={{ width: "40rem" }}>
                  <div className="card-body">
                    <h5
                      className="card-title"
                      style={{ color: "#ffbd39", textAlign: "center"}}
                    >
                      2015
                    </h5>
                    <h6
                      className="card-subtitle mb-2 text-body-secondary m-3"
                      style={{ color:"white"}}
                    >
                      SECONDARY SCHOOL EDUCATION
                    </h6>
                    <p className="card-text m-3" style={{ color: "#999999" }}>
                    Kerala Board of Public Examination
                    </p>
                  </div>
                </div>
              </div>

          
            </div>
          </div>
        </div>
      </ScrollTrigger>
    </>
  );
}
