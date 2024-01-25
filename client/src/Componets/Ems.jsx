import { Link } from "react-router-dom";
import web from "../images/web.png";
import git from "../images/git.png";
import "./style.css";
export default function Ems() {
  return (
    <>
      <div className="container-fluid prj ">
        <img src={web} style={{ display: "inline-block" }} />{" "}
        <h5
          style={{ textAlign: "center", display: "inline-block",color:"white" }}
          className="m-3"
        >
          Employee Mnagement system
        </h5>
        <p style={{color:"#999999",textAlign:"justify"}}>
          Introducing an Employee Management System built with React, Express,
          Node, and MongoDB. This project facilitates easy employee
          administration, allowing admins to create, edit, and delete employee
          profiles. The system ensures security with one-time password emails,
          and both front-end and back-end validations. This Employee Management
          System is a testament to our commitment to providing businesses with a
          flexible, secure, and user-centric solution for effective employee
          administration.
        </p>
        <h6 className="m-3">Key Features</h6>
        <ol>
          <li>
            User-Friendly Interface:
            <dl>
              Navigate effortlessly through a sleek and intuitive user interface
              designed with React, ensuring a smooth user experience.
            </dl>
          </li>

          <li>
            Admin Empowerment:
            <dl>
              Admins can effortlessly create new employees, triggering an
              automated email with a one-time password for a secure onboarding
              process.
            </dl>
          </li>
          <li>
            Enhanced Security:
            <dl>
              The system incorporates stringent validation at both the front end
              and back end, ensuring data integrity and minimizing
              vulnerabilities.
            </dl>
          </li>

          <li>
            Employee Self-Service:
            <dl>
              Empower employees to manage their profiles by securely logging in,
              changing passwords, and accessing relevant information.
            </dl>
          </li>
          <li>
            Dynamic Updates:
            <dl>
              Admins have the flexibility to edit employee details, adapt to
              changes, and efficiently handle employee records.
            </dl>
          </li>
          <li>
            Efficient Deletion:
            <dl>
              Admins can securely delete employee profiles when needed,
              maintaining data hygiene and compliance. Enhance workforce
              management with Employee Management System, featuring soft
              deletion for secure record-keeping and streamlined employee
              lifecycle management.
            </dl>
          </li>
        </ol>
      </div>
    </>
  );
}
