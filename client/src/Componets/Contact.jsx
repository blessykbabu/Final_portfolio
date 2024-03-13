// import phone from "../image/phone.png";
// import ad from "../image/ad.png";
// import email from "../image/email.png";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import phn from "../images/phn.png";
import loc from "../images/location.png";
import em from "../images/em.png";
export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_kf4zhds",
      "template_ffkodkc",
      form.current,
      "R4GOnZ1Nmg7KO4hqT"
    );
    e.target.reset();
  };

  return (
    <>
      <div className="container-fluid">
        <h2 style={{ textAlign: "center", color: "white" }} className="m_head">
          contact me
        </h2>

        <p
          style={{ textAlign: "justify", color: "#999999" }}
          className="contact"
        >
          Thank you for visiting! Your thoughts and inquiries are important to
          me. Please feel free to send me a message, and I'll get back to you as
          soon as possible. Let's connect and explore new possibilities
          together.
        </p>

        <div className="container mt-4">
          <div className="row">
            <div className="col mt-2">
              <div className="card ad" style={{ width: "18rem" }}>
                <img src={loc} className="m-3"   height={30} width={30} alt="..." />
                <div className="card-body">
                  <p style={{color:"white"}} className="card-text">
                   Kaleeckal,Elimullumplackal P O,Avolikuzhy
                  </p>
                </div>
              </div>
            </div>
            <div className="col mt-2">
              <div className="card ad" style={{ width: "18rem" }}>
                <img src={phn} className="m-3" height={30} width={30} alt="..." />
                <div className="card-body">
                  <p  style={{color:"white"}} className="card-text">
                    +91790230156
                  </p>
                </div>
              </div>
            </div>
            <div className="col mt-2">
              <div className="card ad" style={{ width: "18rem" }}>
                <img src={em} className="m-3"  height={30} width={30} alt="..." />
                <div className="card-body">
                  <p  style={{color:"white"}}className="card-text">
                   blessykbabu5@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-4 ">
          <form ref={form} onSubmit={sendEmail} className="mx-auto">
            <div className="mb-3 ">
              <input
                type="password"
                className="form-control "
                id="exampleInputPassword1"
                placeholder="Name"
                style={{ width: 300 }}
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email Address"
                style={{ width: 300 }}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Subject"
                style={{ width: 300 }}
              />
            </div>
            <div className="mb-3">
              <textarea
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Mesaage"
                rows={10}
                cols={20}
                style={{ width: 300 }}
              />
            </div>
            <button type="submit" className="btn send mb-5">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
