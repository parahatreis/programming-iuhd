import React, { useReducer } from 'react';
import LectureContext from './lectureContext';
import LectureReducer from './LectureReducer';

const LectureState = props => {

   const initialState = {
      lectures : [
         {
            id : 1,
            title: 'Introduction to Programming Python',
            docs: null,
            'ppts': ['_1_1_Introduction to Programming_Python.pptx']
         },
         {
            id: 2,
            title: 'Variables(Üýtgeýijiler)',
            docs: null,
            'ppts': ['_2_1_Variables(Üýtgeýijiler).pptx', '_2_2_input()_str()_int()_float() functions.pptx']
         },
         {
            id: 3,
            title: 'Parameters of print function',
            docs: null,
            'ppts': ['_3_1_Solution of Problems.pptx', '_3_1_Solution of Problems.pptx', '_3_3_Solution of Problems.pptx']
         },
         {
            id: 4,
            title: 'Solution of Problems',
            docs: null,
            'ppts': ['_4_1_Solution of Problems.pptx', '_4_2_Lecture_Solution of Problems.pptx', '_4_3_Solution of Problems.pptx']
         }, {
            id: 5,
            title: 'Boolean if/else',
            docs: null,
            'ppts': ['_5_1_Solution of Problems.pptx', '_5_2_Lecture_ Boolean_if_else.pptx', '_5_3_Solution of Problems.pptx']
         }, {
            id: 6,
            title: 'Elif , nested If',
            docs: null,
            'ppts': ['_6_1_Solution of Problems.pptx', '_6_2_Lecture_elif_nested if.pptx', '_6_3_Solution of Problems.pptx']
         },
         {
            id: 7,
            title: 'While statement',
            docs: null,
            'ppts': ['_7_1_Solution of Problems.pptx', '_7_2_Lecture_while statement.pptx', '_7_3_Solution of Problems.pptx']
         }, {
            id: 8,
            title: 'Solution of Problems',
            docs: null,
            'ppts': ['_8_1_Solution of Problems.pptx', '_8_2_Lecture_Solution of Problems.pptx', '_8_3_Solution of Problems.pptx']
         }, {
            id: 9,
            title: 'Solution of Problems',
            docs: null,
            'ppts': ['_9_1_Lecture_Solution of Problems.pptx']
         },
         {
            id: 10,
            title: 'Practice for Midterm exam in Python',
            docs: ['Practice for Midterm exam in Python.docx'],
            'ppts': null
         },
         
         
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
