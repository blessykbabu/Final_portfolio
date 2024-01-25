
import { Link } from "react-router-dom";
import web from "../images/web.png";
import git from "../images/git.png";
export default function Blog(){
    return(
        <>
            <div className="container-fluid prj">
        <img src={web} style={{display:"inline-block"}} /> <h5 style={{textAlign:"center",display:"inline-block",color:"white"}} className="m-3">Blogs</h5>
          <p style={{color:"#999999",textAlign:"justify"}}>
         This is a dynamic and immersive blogging platform designed to elevate the art of sharing stories and ideas. This web application, built with HTML, Express.js, Node.js, and MongoDB, offers a seamless experience for both content creators and readers.
            <h6 className="m-3">Key Features:</h6>
            <ol>
              <li>
              User-Friendly Interface:
                <dl>
                Navigate through a clean and intuitive interface that puts the focus on content. Whether you're a seasoned blogger or a first-time visitor, the user-friendly design ensures a delightful experience.
                </dl>
              </li>

              <li>
              Content Creation:
                <dl>
                As a content creator, easily compose your blog posts using the powerful editor. Take advantage of formatting options, image embedding, and more to bring your ideas to life.
                </dl>
              </li>
              <li>
              Secure User Authentication:
                <dl>
                Create a personalized account and log in securely to access additional features. Enjoy a personalized dashboard to manage your blog posts, settings, and interactions.
                </dl>
              </li>
             

            

             
            </ol>
          </p>

        </div> 
        
        </>
    )
}