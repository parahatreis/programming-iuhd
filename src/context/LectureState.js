import React, { useReducer } from 'react';
import LectureContext from './lectureContext';
import LectureReducer from './LectureReducer';

const LectureState = props => {

   const initialState = {
      lectures : [
         {
            id : 1,
            title : 'Front-end Web Design',
            body : 'What is HTML?Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.',
            video : '1.mp4',
            docs: ['ParahatIljanov.docx', '2.docx', '3.docx', '4.docx', '5.docx'],
            'ppts' : ['1.pptx', '2.pptx']
         }
         
      ],
      lecture : {},
      loading : false
   }

   const [state, dispatch] = useReducer(LectureReducer, initialState);


   const getLecture = id => {

      setLoading();

      dispatch({type : 'GET_LECTURE', payload : id})
   }

   const setLoading = () => dispatch({type : 'SET_LOADING'});



   return <LectureContext.Provider
      value={{
         lectures : state.lectures,
         lecture : state.lecture,
         setLoading,
         getLecture
      }}
   >
   {props.children}
   </LectureContext.Provider>
}

export default LectureState
