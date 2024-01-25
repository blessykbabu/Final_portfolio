// import e from "../images/hr.jpg";
// import s from "../images/ecom.jpg";
// import c from "../images/c.jpg";
// import b from "../images/b.jfif";
import git from "../images/git.png";
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
  };
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleLinkClick = (component) => {
    setSelectedComponent(null);
    setSelectedComponent(component);
  };
  return (
    <>
      <ScrollTrigger onEnter={handleEnterViewport} onExit={handleExitViewport}>
        <div
          className={`animated-element pj mt-5 b-5 ${
            animated ? "animate" : ""
          }`}
        >
          <div className="container-fluid">
            <h1
              className="mb-4 m_head"
              style={{ textAlign: "center", color: "white" }}
            >
              Projects
            </h1>
            <div className="container">
            <main className="page-content">
              
              <div className="card pcard">
                <div className="content">
                  <h4 className="copy">HrWise</h4>
                  <div className="d-flex ">
                    <button className="btn">
                      <Link to="https://github.com/blessykbabu/ems_production">
                        {" "}
                        <img src={git} />
                      </Link>
                    </button>
                    <button className="btn ms-2">
                      <Link
                        to="/projects/ems"
                        onClick={() => handleLinkClick(<Ems />)}
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        Read
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
              <div className="card pcard">
                <div className="content">
                  <h4 className="copy">E-Commerce</h4>
                  {/* <p className="copy title">
        Plan your next beach trip with these fabulous destinations
      </p> */}
                  <div className="d-flex">
                    <button className="btn">
                      <Link to="https://github.com/blessykbabu/e-prjct">
                        <img src={git} />
                      </Link>
                    </button>
                    <button className="btn ms-2">
                      <Link
                        to="/projects/ezy"
                        onClick={() => handleLinkClick(<Ezy />)}
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        Read
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
              <div className="card pcard">
                <div className="content">
                  <h4 className="copy">Blog</h4>
                  <div className="d-flex">
                    <button className="btn">
                      <Link to="https://github.com/blessykbabu/bloger">
                        {" "}
                        <img src={git} />
                      </Link>
                    </button>
                    <button className="btn ms-2">
                      <Link
                        to="/projects/blogs"
                        onClick={() => handleLinkClick(<Blog />)}
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        Read
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
              <div className="card pcard">
                <div className="content">
                  <h4 className="copy">Movie Hub</h4>
                  <div className="d-flex">
                    <button className="btn">
                      <Link to="https://github.com/blessykbabu/bookmyshow">
                        {" "}
                        <img src={git} />
                      </Link>
                    </button>
                    <button className="btn ms-2">
                      <Link
                        to="/projects/movieHub"
                        onClick={() => handleLinkClick(<Bookmyshow />)}
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        {" "}
                        Read
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </main>
            </div>

          </div>
          <div className="row">{selectedComponent}</div>

        </div>

      </ScrollTrigger>
    </>
  );
}

// <div className="row row-cols-1 row-cols-md-3 g-4">
// <div className="col">
//   <div className="card">
// <Link to="/projects/ems" onClick={() => handleLinkClick(<Ems />)}>
//       {" "}
//       <img
//         src={e}
//         height={300}
//         className="card-img-top c-img"
//         alt="..."
//       />
//     </Link>
//   </div>
// </div>

// <div className="col">
//   <div className="card">
//     <Link to="/projects/ezy" onClick={() => handleLinkClick(<Ezy />)}>
//       <img
//         src={s}
//         height={300}
//         className="card-img-top c-img"
//         alt="..."
//       />
//     </Link>
//     <div className="card-body">
// <h5 className="card-title">Card title</h5>

// </div>
// <div className="card-footer">
// <small className="text-muted">Last updated 3 mins ago</small>
// </div>
//   </div>
// </div>
// <div className="col">
//   <div className="card">
//     <Link
//       to="/projects/blogs"
//       onClick={() => handleLinkClick(<Blog />)}
//     >
//       {" "}
//       <img
//         src={b}
//         height={300}
//         className="card-img-top c-img"
//         alt="..."
//       />
//     </Link>
//   </div>
// </div>

// <div className="col">
//   <div className="card ">
//     <Link
//       to="/projects/movieHub"
//       onClick={() => handleLinkClick(<Bookmyshow />)}
//     >
//       {" "}
//       <img
//         src={c}
//         height={300}
//         className="card-img-top c-img"
//         alt="..."
//       />
//     </Link>
//   </div>
// </div>
// </div>
