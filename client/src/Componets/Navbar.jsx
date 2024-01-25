import { Link } from "react-router-dom";
import "./style.css";
import { Link as ScrollLink } from "react-scroll";
export default function Navabr(){
    return(
        <>
        <nav className="navbar navbar-expand-lg sticky">
  <div className="container-fluid ">
    <Link className="navbar-brand nv nb" >
      BLESSY
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon " />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
        <ScrollLink
        
            to="home"
            spy={true}
            smooth={true}
            offset={-70} 
            duration={500}
            className="nav-link active nv-link nvbtn"
            aria-current="page"
            style={{ color: "white" }}
          >
            Home
          </ScrollLink>
        </li>
        <li className="nav-item">
          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav-link active nvbtn"
            style={{ color: "white" }}
          >
            About
          </ScrollLink>
       
        </li>
        <li className="nav-item">
          <ScrollLink
            to="education"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav-link active nvbtn"
            style={{ color: "white" }}
          >
            Education
          </ScrollLink>
       
        </li>
        <li className="nav-item">
          <ScrollLink
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav-link active nvbtn"
            style={{ color: "white" }}
          >
            Projects
          </ScrollLink>
       
        </li>
        <li className="nav-item">
          <ScrollLink
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav-link active nvbtn"
            style={{ color: "white" }}
          >
            Skills
          </ScrollLink>
       
        </li>

        <li className="nav-item">
          <ScrollLink
            to="Contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav-link active nvbtn"
            style={{ color: "white" }}
          >
            Contact
          </ScrollLink>
       
        </li>
      </ul>
    </div>
  </div>
</nav>

        </>
    )
}