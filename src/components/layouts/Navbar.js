import React from 'react';
import { Link } from 'react-router-dom';

import Logo1 from '../../sources/images/IUHD-LOGO-WHITE-01.png';
import Logo2 from '../../sources/images/IUHD-LOGO.png';

const Navbar = (props) => {
   return (
      <div className="container">
         <nav>
            <div className="logo">
               <img src={`${props.aboutPage ? Logo2 : Logo1}` } alt="logo" />
            </div>
            <ul>
               <li>
                  <Link to="/" style={{color : `${props.aboutPage ? 'black' : 'white'}` }} >Lectures</Link>
               </li>
               <li>
                  <Link to="/about" style={{color : `${props.aboutPage ? 'black' : 'white'}` }} >About</Link>
               </li>
            </ul>
         </nav>
      </div>
   )
}

export default Navbar
