import { Link } from "react-router-dom";
import web from "../images/web.png";
import git from "../images/git.png";

export default function Bookmyshow() {
  return (
    <>
      <div className="container-fluid prj">
        <img src={web} style={{ display: "inline-block" }} />{" "}
        <h5
          style={{ textAlign: "center", display: "inline-block",color:"white" }}
          className="m-3"
        >
          Movie Hub
        </h5>
        <p  style={{ textAlign: "justify", color: "#999999"}}>
          This is an innovative platform developed using HTML, Express,
          Node.js, and MongoDB, designed to provide users with the latest
          information about recently released movies. This dynamic web
          application offers a seamless experience for users to add and discover
          new movies conveniently. The user-friendly interface allows for easy
          submission of movie details, including title, release date, genre, and
          more. </p>
          <p style={{textAlign:"justify",color:"#999999"}}>Upon visiting the home page, users can explore a curated list of
          recently released movies, each with its own dedicated page showcasing
          essential information. The platform leverages MongoDB as the backend
          database, ensuring efficient data storage and retrieval.
        </p>
       
      </div>
    </>
  );
}
