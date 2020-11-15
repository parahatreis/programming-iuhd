import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import LectureContext from '../context/lectureContext' 


const LectureItem = ({lecture}) => {
   return (
      <>
         <Link to={`/lecture/${lecture.id}`} className="lecture">
            <span className="lecture-number"># {lecture.id} </span> 
            <span className="lecture-title"> {lecture.title} </span>
         </Link>
      </>
   )
}

LectureItem.propType = {
   lecture : PropTypes.object.isRequired,
}

export default LectureItem
