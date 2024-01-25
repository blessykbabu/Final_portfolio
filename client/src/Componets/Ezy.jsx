import { Link } from "react-router-dom";
import web from "../images/web.png";
import git from "../images/git.png"
export default function Ezy(){
    return(
        <>
          <div className="container-fluid prj">
        <img src={web} style={{display:"inline-block"}} /> <h5 style={{textAlign:"center",display:"inline-block",color:"white"}} className="m-3">E-commerce</h5>
          <p  style={{ textAlign: "justify", color: "#999999"}}>
            React E-Commerce Platform with MongoDB: Connecting Sellers and
            Buyers Seamlessly. Experience the next level of online commerce with
            our cutting-edge E-Commerce Platform built using React for dynamic
            front-end interactions and MongoDB as the robust database. This
            platform introduces a distinctive dual-role system, empowering
            sellers to showcase and sell products, while buyers enjoy a secure
            and streamlined purchasing process.
            <h6 className="m-3">Key Features:</h6>
            <ol>
              <li>
                Seller Empowerment:
                <dl>
                  Sellers gain exclusive access to create and manage product
                  listings, showcasing their offerings to potential buyers.
                </dl>
              </li>

              <li>
                Buyer-Centric Experience:
                <dl>
                  Buyers can seamlessly browse products, make secure purchases,
                  and enjoy a hassle-free shopping experience tailored to their
                  needs.
                </dl>
              </li>
              <li>
                Exclusive Buyer Purchases
                <dl>
                  Only registered buyer accounts are eligible to make purchases,
                  ensuring a dedicated marketplace for product transactions.
                </dl>
              </li>
              <li>
                Admin Oversight:
                <dl>
                  The system features an admin panel allowing oversight of the
                  entire platform. Admins can efficiently manage and maintain
                  the site, with the ability to remove products or users in case
                  of issues or violations.
                </dl>
              </li>

              <li>
                Efficient Product Management:
                <dl>
                  Sellers can easily add, update, or remove product listings,
                  while the admin maintains control over the overall product
                  catalog.
                </dl>
              </li>

              <p>
                React E-Commerce Platform is a comprehensive solution that
                bridges the gap between sellers and buyers, offering a secure,
                user-friendly, and efficient online marketplace. The admin
                system provides essential oversight, ensuring a smooth and
                trouble-free shopping experience for all users.
              </p>
            </ol>
          </p>

        </div> 


        </>
    )
}