import React from "react";
import { useState } from "react";
import "./style.css";
import "./skills.css";
import Loader from "./Loader";
import ScrollTrigger from "react-scroll-trigger";

export default function Skills() {
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
        <div
          className={`animated-element sk mt-5 b-5 ${
            animated ? "animate" : ""
          }`}
        >
          <div className="container">
            <h2
              className=" m_head"
              style={{ textAlign: "center", color: "white" }}
            >
              SKILLS 
            </h2>

            <div className="container">
              {/* <div className="panel">
                <div className="ring">
                  <div className="card card1 scard" />
                  <div className="border">
                    <p className="title">Brazil</p>
                    <div className="slide">
                      <Loader targetPercentage={50} />
                    </div>
                  </div>
                </div>
              </div> */}
                 <div className="row s-row">
                    <div className="col-lg-4 mb-3 s">
                 
              <div className="panel">
                <div className="ring">
                  <div className="card scard card1" />
                  <div className="border">
                    {/* <p className="title">Brazil</p> */}
                    <div className="slide">
                      {/* <h6 className="para">Latest Deals from Heathrow</h6> */}
                      <div className="line">
                        <h6 className="para">95%</h6>{" "}
                        <i className="fa fa-plane" aria-hidden="true" />
                        {/* <h6 className="para">£849</h6> */}
                      </div>
                      {/* <div className="line">
                        <h6 className="para">RTN</h6>{" "}
                        <i className="fa fa-plane" aria-hidden="true" />
                        <h6 className="para">£659</h6>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              </div>

               <div className="col-lg-4 mb-3">
              <div className="panel">
                <div className="ring">
                  <div className="card  scard card2" />
                  <div className="border">
                    {/* <p className="title">Belize</p> */}
                    <div className="slide">
                      {/* <h6 className="para">Latest Deals from Heathrow</h6> */}
                      <div className="line">
                        <h6 className="para">90%</h6>{" "}
                        <i className="fa fa-plane" aria-hidden="true" />
                        {/* <h6 className="para">£999</h6> */}
                      </div>
                      {/* <div className="line">
                        <h6 className="para">RTN</h6>{" "}
                        <i className="fa fa-plane" aria-hidden="true" />
                        <h6 className="para">£745</h6>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              </div>
              <div className="col-lg-4 mb-3">
              <div className="panel">
                <div className="ring">
                  <div className="card card3 scard" />
                  <div className="border">
                    <div className="slide">
                      <div className="line">
                        <h6 className="para">85%</h6>{" "}
                        <i className="fa fa-plane" aria-hidden="true" />
                      </div>
                    
                    </div>
                  </div>
                </div>
              </div>
              </div>
              </div>


             <div className="row">
                <div className="col-lg-4 mt-3">
              <div className="panel">
                <div className="ring">
                  <div className="card  scard card4" />
                  <div className="border">
                    {/* <p className="title">Belize</p> */}
                    <div className="slide">
                      {/* <h6 className="para">Latest Deals from Heathrow</h6> */}
                      <div className="line">
                        <h6 className="para">80%</h6>{" "}
                        <i className="fa fa-plane" aria-hidden="true" />
                        {/* <h6 className="para">£999</h6> */}
                      </div>
                      {/* <div className="line">
                        <h6 className="para">RTN</h6>{" "}
                        <i className="fa fa-plane" aria-hidden="true" />
                        <h6 className="para">£745</h6>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              </div>
                <div className="col-lg-4 mt-3">
              <div className="panel">
                <div className="ring">
                  <div className="card  scard card5" />
                  <div className="border">
                    {/* <p className="title">Belize</p> */}
                    <div className="slide">
                      {/* <h6 className="para">Latest Deals from Heathrow</h6> */}
                      <div className="line">
                        <h6 className="para">80%</h6>{" "}
                        <i className="fa fa-plane" aria-hidden="true" />
                        {/* <h6 className="para">£999</h6> */}
                      </div>
                      {/* <div className="line">
                        <h6 className="para">RTN</h6>{" "}
                        <i className="fa fa-plane" aria-hidden="true" />
                        <h6 className="para">£745</h6>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              </div>

              <div className="col-lg-4 mb-3 mt-3">
              <div className="panel">
                <div className="ring">
                  <div className="card card6 scard" />
                  <div className="border">
                    <div className="slide">
                      <div className="line">
                        <h6 className="para">80%</h6>{" "}
                        <i className="fa fa-plane" aria-hidden="true" />
                      </div>
                    
                    </div>
                  </div>
                </div>
              </div>
              </div>

             </div>




             <div className="row">
                <div className="col-lg-4 mt-3">
              <div className="panel">
                <div className="ring">
                  <div className="card  scard card7" />
                  <div className="border">
                    {/* <p className="title">Belize</p> */}
                    <div className="slide">
                      {/* <h6 className="para">Latest Deals from Heathrow</h6> */}
                      <div className="line">
                        <h6 className="para">90%</h6>{" "}
                        <i className="fa fa-plane" aria-hidden="true" />
                        {/* <h6 className="para">£999</h6> */}
                      </div>
                      {/* <div className="line">
                        <h6 className="para">RTN</h6>{" "}
                        <i className="fa fa-plane" aria-hidden="true" />
                        <h6 className="para">£745</h6>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              </div>
                <div className="col-lg-4 mt-3">
              <div className="panel">
                <div className="ring">
                  <div className="card  scard card8" />
                  <div className="border">
                    {/* <p className="title">Belize</p> */}
                    <div className="slide">
                      {/* <h6 className="para">Latest Deals from Heathrow</h6> */}
                      <div className="line">
                        <h6 className="para">75%</h6>{" "}
                        <i className="fa fa-plane" aria-hidden="true" />
                        {/* <h6 className="para">£999</h6> */}
                      </div>
                      {/* <div className="line">
                        <h6 className="para">RTN</h6>{" "}
                        <i className="fa fa-plane" aria-hidden="true" />
                        <h6 className="para">£745</h6>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              </div>

              <div className="col-lg-4 mb-3 mt-3">
              <div className="panel">
                <div className="ring">
                  <div className="card card9 scard" />
                  <div className="border">
                    <div className="slide">
                      <div className="line">
                        <h6 className="para">90%</h6>{" "}
                        <i className="fa fa-plane" aria-hidden="true" />
                      </div>
                    
                    </div>
                  </div>
                </div>
              </div>
              </div>

             </div>




             <div className="row">
                <div className="col-lg-4 mt-3">
              <div className="panel">
                <div className="ring">
                  <div className="card  scard card10" />
                  <div className="border">
                    {/* <p className="title">Belize</p> */}
                    <div className="slide">
                      {/* <h6 className="para">Latest Deals from Heathrow</h6> */}
                      <div className="line">
                        <h6 className="para">85%</h6>{" "}
                        <i className="fa fa-plane" aria-hidden="true" />
                        {/* <h6 className="para">£999</h6> */}
                      </div>
                      {/* <div className="line">
                        <h6 className="para">RTN</h6>{" "}
                        <i className="fa fa-plane" aria-hidden="true" />
                        <h6 className="para">£745</h6>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              </div>

              <div className="col-lg-4 mt-3">
              <div className="panel">
                <div className="ring">
                  <div className="card card11 scard" />
                  <div className="border">
                    <div className="slide">
                      <div className="line">
                        <h6 className="para">95%</h6>{" "}
                        <i className="fa fa-plane" aria-hidden="true" />
                      </div>
                    
                    </div>
                  </div>
                </div>
              </div>
              </div>
             

             </div>



            </div>
            {/* <div className="skills-container">
              {skillsData.map((skill, index) => (
                <div className="skill" key={index}>
                  <div className="skill-name">{skill.name}</div>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{ width: `${skill.percent}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </ScrollTrigger>
    </>
  );
}
