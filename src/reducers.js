// // // reducers.js
// // import {
// //     FETCH_COURSES_SUCCESS,
// //     CREATE_COURSE_SUCCESS,
// //     UPDATE_COURSE_SUCCESS,
// //     DELETE_COURSE_SUCCESS,

// //     FETCH_STUDENTS_SUCCESS,
// //     FETCH_STUDENTS_FAILURE,


// //     CREATE_TEACHER_REQUEST,
// //     CREATE_TEACHER_SUCCESS,
// //     CREATE_TEACHER_FAILURE,

// //   } from './actions.js';
  
// //   const initialState = {
// //     courses: [],
// //     error: null,
// //     students: [],
// //     loading: false,

// //     error: null,
// //     success: false,
   
// //   };
  
// //   export const courseReducer = (state = initialState, action) => {
// //     switch (action.type) {
// //       case FETCH_COURSES_SUCCESS:
// //         return { ...state, courses: action.payload };
// //       case CREATE_COURSE_SUCCESS:
// //         return { ...state, courses: [...state.courses, action.payload] };
// //       case UPDATE_COURSE_SUCCESS:
// //         return {
// //           ...state,
// //           courses: state.courses.map(course =>
// //             course.id === action.payload.id ? action.payload : course
// //           ),
// //         };
// //       case DELETE_COURSE_SUCCESS:
// //         return {
// //           ...state,
// //           courses: state.courses.filter(course => course.id !== action.payload),
// //         };
// //       default:
// //         return state;
// //     }
// //   };




// //   // Reducer function
// //   export const studentsReducer = (state = initialState, action) => {
// //     switch (action.type) {
// //       case FETCH_STUDENTS_REQUEST:
// //         return {
// //           ...state,
// //           loading: true,
// //           error: null,
// //         };
// //       case FETCH_STUDENTS_SUCCESS:
// //         return {
// //           ...state,
// //           loading: false,
// //           students: action.payload,
// //         };
// //       case FETCH_STUDENTS_FAILURE:
// //         return {
// //           ...state,
// //           loading: false,
// //           error: action.payload,
// //         };
// //       default:
// //         return state;
// //     }
// //   };


// //   /////


  
// //   // Reducer function
// //   const teacherReducer = (state = initialState, action) => {
// //     switch (action.type) {
// //       case CREATE_TEACHER_REQUEST:
// //         return {
// //           ...state,
// //           loading: true,
// //           error: null,
// //           success: false,
// //         };
// //       case CREATE_TEACHER_SUCCESS:
// //         return {
// //           ...state,
// //           loading: false,
// //           success: true,
// //         };
// //       case CREATE_TEACHER_FAILURE:
// //         return {
// //           ...state,
// //           loading: false,
// //           error: action.payload,
// //         };
// //       default:
// //         return state;
// //     }
// //   };
  









// // reducers.js
// import { 
//     FETCH_COURSES_SUCCESS, 
//     FETCH_COURSES_FAILURE, 
//     CREATE_COURSE_SUCCESS, 
//     UPDATE_COURSE_SUCCESS, 
//     DELETE_COURSE_SUCCESS
    
//     FETCH_TEACHERS_SUCCESS,
//     FETCH_TEACHERS_FAILURE,

// } from './actions';

// const initialState = {
//     courses: [],
//     error: null,
//     teachers: [],
// };

// const courseReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case FETCH_COURSES_SUCCESS:
//             return { ...state, courses: action.payload };
//         case FETCH_COURSES_FAILURE:
//             return { ...state, error: action.payload };
//         case CREATE_COURSE_SUCCESS:
//             return { ...state, courses: [...state.courses, action.payload] };
//         case UPDATE_COURSE_SUCCESS:
//             return {
//                 ...state,
//                 courses: state.courses.map(course =>
//                     course.id === action.payload.id ? action.payload : course
//                 ),
//             };
//         case DELETE_COURSE_SUCCESS:
//             return {
//                 ...state,
//                 courses: state.courses.filter(course => course.id !== action.payload),
//             };
//         default:
//             return state;
//     }
// };


// const teacherReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case FETCH_TEACHERS_SUCCESS:
//             return { ...state, teachers: action.payload };
//         case FETCH_TEACHERS_FAILURE:
//             return { ...state, error: action.payload };
//         default:
//             return state;
//     }
// };

// export default {courseReducer,teacherReducer};






