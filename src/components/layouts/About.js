import React from 'react';
import Navbar from './Navbar';
import IuhdLogo from "../../sources/images/IUHD-LOGO-02.png";
import ClubLogo from "../../sources/images/en-club.png";


const About = () => {
   return (
      <div>
         <Navbar aboutPage={true} />
         <div className="container">
            <div className="about">
               <div className="item">
                  International University for the Humanities and Development.
                  <div>
                     <img src={IuhdLogo} alt="IUHD" />
                  </div>
               </div>
               <div className="item">
                  Engineers' Club | Information Technologies Faculty.
                  <div>
                     <img src={ClubLogo} alt="Club" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default About
