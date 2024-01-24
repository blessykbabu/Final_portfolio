import e from "../images/hr.jpg";
import s from "../images/ecom.jpg";
import c from "../images/c.jpg";
import b from "../images/b.jfif";
import { Link } from "react-router-dom";
import { useState } from "react";
import Ems from "./ems";
import Ezy from "./Ezy";
import Blog from "./Blog";
import Bookmyshow from "./Bookmyshow";
import ScrollTrigger from "react-scroll-trigger";
export default function Projects() {
    const [animated, setAnimated] = useState(false);

    const handleEnterViewport = () => {
      setAnimated(true);
    };
  
    const handleExitViewport = () => {
      setAnimated(false);
    }
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleLinkClick = (component) => {
    setSelectedComponent(null);
    setSelectedComponent(component);
  };
  return (
    <>

<ScrollTrigger onEnter={handleEnterViewport} onExit={handleExitViewport}>
      <div className={`animated-element pj mt-5 b-5 ${animated ? 'animate' : ''}`}>
      <div className="container-fluid">
     <h1 className="mb-4 m_head"
          style={{ textAlign: "center", color: "white" }}>
          Projects
        </h1>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card">
              <Link to="/projects/ems" onClick={() => handleLinkClick(<Ems />)}>
                {" "}
                <img
                  src={e}
                  height={300}
                  className="card-img-top c-img"
                  alt="..."
                />
              </Link>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <Link to="/projects/ezy" onClick={() => handleLinkClick(<Ezy />)}>
                <img
                  src={s}
                  height={300}
                  className="card-img-top c-img"
                  alt="..."
                />
              </Link>
              {/* <div className="card-body">
        <h5 className="card-title">Card title</h5>
       
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div> */}
            </div>
          </div>
          <div className="col">
            <div className="card">
              <Link
                to="/projects/blogs"
                onClick={() => handleLinkClick(<Blog />)}
              >
                {" "}
                <img
                  src={b}
                  height={300}
                  className="card-img-top c-img"
                  alt="..."
                />
              </Link>
            </div>
          </div>

          <div className="col">
            <div className="card ">
              <Link
                to="/projects/movieHub"
                onClick={() => handleLinkClick(<Bookmyshow />)}
              >
                {" "}
                <img
                  src={c}
                  height={300}
                  className="card-img-top c-img"
                  alt="..."
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="row">{selectedComponent}</div>
      </div>
      </div>
      </ScrollTrigger>
    </>
  );
}
