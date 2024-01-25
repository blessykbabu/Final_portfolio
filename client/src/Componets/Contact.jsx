// import phone from "../image/phone.png";
// import ad from "../image/ad.png";
// import email from "../image/email.png";
export default function Contact() {
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

       

        <div className="container ">
          <form className="mx-auto">
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
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
