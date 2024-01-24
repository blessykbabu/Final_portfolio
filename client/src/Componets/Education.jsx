import {Link} from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import ed from "../images/download.png";
import "./style.css";
import ScrollTrigger from "react-scroll-trigger";

export default function Education(){
    const [animated, setAnimated] = useState(false);

    const handleEnterViewport = () => {
      setAnimated(true);
    };
  
    const handleExitViewport = () => {
      setAnimated(false);
    }
   const [animateFirst, setAnimateFirst] = useState(false);
   const [animateSecond, setAnimateSecond] = useState(false);
   const [animateThird, setAnimateThird] = useState(false);
   const [animateFourth, setAnimateFourth] = useState(false);

   useEffect(() => {
     const firstContainerTimeout = setTimeout(() => {
       setAnimateFirst(true);
     }, 1000); 
 
     const secondContainerTimeout = setTimeout(() => {
       setAnimateSecond(true);
     }, 2000); 

     const thirdContainerTimeout = setTimeout(() => {
      setAnimateThird(true);
    }, 3000); 

    const fourthContainerTimeout = setTimeout(() => {
      setAnimateFourth(true);
    }, 4000);
 
     // Clear timeouts on component unmount or cleanup
     return () => {
       clearTimeout(firstContainerTimeout);
       clearTimeout(secondContainerTimeout);
       clearTimeout(thirdContainerTimeout);

     };
   }, []);
 return(
    <>
    <ScrollTrigger onEnter={handleEnterViewport} onExit={handleExitViewport}>
      <div className={`animated-element ed mt-5 mb-5 ${animated ? 'animate' : ''}`}>
   <div className="container-fluid mt-5 ed">
   <h1 className="mb-4 m_head" style={{textAlign:"center",color:"white"}}>LEARNING JOURNEY</h1>
   
   <div className="container ">
    <div  className={`container mt-5 ${animateFirst ? 'animate__animated animate__slideInLeft' : ''}`}>
    <img src={ed} height={43}  width={60}/><h5  style={{display:"inline-block",color:"#FFBD39"}} className="mb-4 ms-2">2020 - 2022</h5>
    <h4 className="mb-4" style={{color:"gray"}}>MASTER OF COMPUTER APPLICATION</h4>
    <h6 className="mb-4" style={{color:"white"}}>APJ Abdul Kalam Technological University </h6>
    </div>

    <div className={`container mt-5 ${animateSecond ? 'animate__animated animate__slideInLeft' : ''}`}>
    <img src={ed} height={43}  width={60}/><h5  style={{display:"inline-block",color:"#FFBD39"}} className="mb-4 ms-2">2017 - 2020</h5>
    <h4 className="mb-4" style={{color:"gray"}}>BACHELOR OF COMPUTER APPLICATION</h4>
    <h6 className="mb-4" style={{color:"white"}}>Mahatma Gandhi University</h6>
    </div>

    <div className={`container mt-5 ${animateThird ? 'animate__animated animate__slideInLeft' : ''}`}>

    {/* <div className="plus border-bottom p-5"> */}
    <img src={ed} height={43}  width={60}/><h5  style={{display:"inline-block",color:"#FFBD39"}} className="mb-4 ms-2">2017</h5>
    <h4 className="mb-4" style={{color:"gray"}}> HIGHER SECONDARY EDUCATION</h4>
    <h6 className="mb-4" style={{color:"white"}}>The Directorate of Higher Secondary Education</h6>
    </div>

    <div className={`container mt-5 ${animateFourth ? 'animate__animated animate__slideInLeft' : ''}`}>
    <img src={ed} height={43}  width={60}/><h5  style={{display:"inline-block",color:"#FFBD39"}} className="mb-4 ms-2">2015</h5>
    <h4 className="mb-4" style={{color:"gray"}}>SECONDARY SCHOOL EDUCATION </h4>
    <h6 className="mb-4" style={{color:"white"}}>Kerala State Education Board </h6>
    </div>
   
   </div>

   </div>
   </div>
   </ScrollTrigger>
    </>
 )   
}