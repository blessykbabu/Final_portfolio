// import e from "../images/hr.jpg";
// import s from "../images/ecom.jpg";
// import c from "../images/c.jpg";
// import b from "../images/b.jfif";
// import git from "../images/git.png";
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import Ems from "./ems";
// import Ezy from "./Ezy";
// import Blog from "./Blog";
// import Bookmyshow from "./Bookmyshow";
// import ScrollTrigger from "react-scroll-trigger";
// export default function Projects() {
//   const [animated, setAnimated] = useState(false);

//   const handleEnterViewport = () => {
//     setAnimated(true);
//   };

//   const handleExitViewport = () => {
//     setAnimated(false);
//   };
//   const [selectedComponent, setSelectedComponent] = useState(null);
//   const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
//   const handleLinkClick = (component) => {
//     setSelectedComponent(null);
//     setSelectedComponent(component);
//   };
  
//   return (
//     <>
//       <ScrollTrigger onEnter={handleEnterViewport} onExit={handleExitViewport}>
//         <div
//           className={`animated-element pj mt-5 b-5 ${
//             animated ? "animate" : ""
//           }`}
//         >
//           <div className="container-fluid">
//             <h1
//               className="mb-4 m_head"
//               style={{ textAlign: "center", color: "white" }}
//             >
//               PROJECTS
//             </h1>
//             <div className="container">
//             <main className="page-content">
              
//               <div className="card pcard">
//                 <div className="content">
//                   <h4 className="copy">HrWise</h4>
//                   <div className="d-flex ">
//                     <button className="btn">
//                       <Link to="https://github.com/blessykbabu/ems_production">
//                         {" "}
//                         <img src={git} />
//                       </Link>
//                     </button>
//                     <button className="btn ms-2">
//                       <Link
//                         to="/projects/ems"
//                         onClick={() => handleLinkClick(<Ems />)}
//                         style={{ color: "white", textDecoration: "none" }}
//                       >
//                         Read
//                       </Link>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//               <div className="card pcard">
//                 <div className="content">
//                   <h4 className="copy">E-Commerce</h4>
//                   {/* <p className="copy title">
//         Plan your next beach trip with these fabulous destinations
//       </p> */}
//                   <div className="d-flex">
//                     <button className="btn">
//                       <Link to="https://github.com/blessykbabu/e-prjct">
//                         <img src={git} />
//                       </Link>
//                     </button>
//                     <button className="btn ms-2">
//                       <Link
//                         to="/projects/ezy"
//                         onClick={() => handleLinkClick(<Ezy />)}
//                         style={{ color: "white", textDecoration: "none" }}
//                       >
//                         Read
//                       </Link>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//               <div className="card pcard">
//                 <div className="content">
//                   <h4 className="copy">Blog</h4>
//                   <div className="d-flex">
//                     <button className="btn">
//                       <Link to="https://github.com/blessykbabu/bloger">
//                         {" "}
//                         <img src={git} />
//                       </Link>
//                     </button>
//                     <button className="btn ms-2">
//                       <Link
//                         to="/projects/blogs"
//                         onClick={() => handleLinkClick(<Blog />)}
//                         style={{ color: "white", textDecoration: "none" }}
//                       >
//                         Read
//                       </Link>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//               <div className="card pcard">
//                 <div className="content">
//                   <h4 className="copy">Movie Hub</h4>
//                   <div className="d-flex">
//                     <button className="btn">
//                       <Link to="https://github.com/blessykbabu/bookmyshow">
//                         {" "}
//                         <img src={git} />
//                       </Link>
//                     </button>
//                     <button className="btn ms-2">
//                       <Link
//                         to="/projects/movieHub"
//                         onClick={() => handleLinkClick(<Bookmyshow />)}
//                         style={{ color: "white", textDecoration: "none" }}
//                       >
//                         {" "}
//                         Read
//                       </Link>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </main>
//             </div>

//           </div>
//           <div className="row">{selectedComponent}</div>

//         </div>

//       </ScrollTrigger>
//     </>
//   );
// }


import React, { useState } from "react";
import Slider from "react-slick";
import git from "../images/git.png";
import Ems from "./ems";
import Ezy from "./Ezy";
import Blog from "./Blog";
import Bookmyshow from "./Bookmyshow";
import ScrollTrigger from "react-scroll-trigger";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Projects() {
  const [animated, setAnimated] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleEnterViewport = () => {
    setAnimated(true);
  };

  const handleExitViewport = () => {
    setAnimated(false);
  };

  const projectsData = [
    { name: "HrWise",image:"https://i.pinimg.com/564x/c9/e3/a0/c9e3a0019bd2e2ab03178b6abdf5dd81.jpg"
    , component: <Ems />, link: "https://github.com/blessykbabu/ems_production" },
    { name: "E-Commerce",image:"https://i.pinimg.com/564x/92/e7/c3/92e7c3fb03b219f3ac28ed08bdc3f3f9.jpg",component: <Ezy />, link: "https://github.com/blessykbabu/ecommerce" },
    { name: "Blog",image:"https://i.pinimg.com/564x/a3/e6/82/a3e6828eca570fbb9c0c56be8950a062.jpg", component: <Blog />, link: "https://github.com/blessykbabu/bloger" },
    { name: "Movie Hub",image:"https://i.pinimg.com/564x/c5/92/a1/c592a1f0d8de48c90266755226557263.jpg", component: <Bookmyshow />, link: "https://github.com/blessykbabu/bookmyshow" },
  ];

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  const handleLinkClick = (project) => {
    setSelectedComponent(project.component);
  };

  return (
    <>
      <ScrollTrigger onEnter={handleEnterViewport} onExit={handleExitViewport}>
        <div className={`animated-element pj mt-5 b-5 ${animated ? "animate" : ""}`}>
          <div className="container-fluid">
            <h2 className="mb-4 m_head" style={{ textAlign: "center", color: "white" }}>
              PROJECTS
            </h2>
            <div className="container">
              <Slider {...settings}>
                {projectsData.map((project, index) => (
                  
                  <div key={index}>
                    <div className="card pcard"style={{ backgroundImage: `url(${project.image})` ,height:"300px"}}>
                      <div className="content">
                        <h4 className="copy">{project.name}</h4>
                        <div className="d-flex ">
                          <button className="btn">
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                              <img src={git} alt="GitHub" />
                            </a>
                          </button>
                          <button className="btn ms-2" onClick={() => handleLinkClick(project)}>
                            Read
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          {selectedComponent}
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
