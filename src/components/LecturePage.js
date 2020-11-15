import React, {useContext, useEffect} from 'react';
import PropTypes from 'prop-types';
import Navbar from './layouts/Navbar';
import LectureContext from '../context/lectureContext'
// 
import PptImg from '../sources/images/ppt.png';
import DocImg from '../sources/images/doc.png';

const LecturePage = ({match}) => {


   const lectureContext = useContext(LectureContext);

   const { lecture, getLecture } = lectureContext;


   useEffect(() => {

      getLecture(match.params.id);
      // eslint-disable-next-line
   }, [])


   const {
      id,
      title,
      body,
      docs,
      ppts
   } = lecture;



   const urlDoc = '/assets/doc/';
   const urlPpt = '/assets/ppt/';
   let docArray = [];
   let pptArray = [];
   if (docs) docArray = docs;
   if(ppts) pptArray = ppts

   return (
      <>
      <Navbar aboutPage={true} />
      <div className="container">
         <article data-row={id}>
         {/* LECTURE TITLE */}
            <h1>
               {title}
            </h1>
            {/* LECTURE BODY */}
            <div>
               <p className="lecture-body">
                  {body}
               </p>
            </div>
            {/* DOC PPT FILES */}
            <div className="download">
               You can download .ppt or .docx files of "{title}" lecture :
            </div>
               <div className="row">
               {pptArray.map((ppt,index) => (
                  <a href={urlPpt + ppt} key={index} className="icons" download >
                     <img src={PptImg} alt="ppt" />
                     <p> {ppt} </p>
                  </a>
               ))}
               {docArray.map((doc,index) => (
                  <a href={urlDoc+doc} key={index} className="icons" download >
                     <img src={DocImg} alt="ppt" />
                     <p> {doc} </p>
                  </a>
               ))}
            </div>
         </article>
      </div>
      </>
   )
}

LecturePage.propType = {
   lecture : PropTypes.object.isRequired,
}

export default LecturePage
