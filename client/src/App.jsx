import {BrowserRouter as Router,Route,Routes,Link} from "react-router-dom"
import Navabr from "./Componets/Navbar"
import Home from "./Componets/Home"
import About from "./Componets/About"
import Education from "./Componets/Education"
import Projects from "./Componets/Projects"
import Ems from "./Componets/ems"
function App() {

  return (
    <>
     {/* <Router>
    <Navabr/>
    <Home/>
    <About/>
    <Education/> */}
    {/* <Routes>
  
    </Routes> */}
     {/* </Router> */}
     <Router>
   <Navabr/>
  
   
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/education" element={<Education/>}/>
    <Route path="/projects/*" element={<Projects/>}/>



   </Routes>
   </Router>
    
    </>
  )
}

export default App
