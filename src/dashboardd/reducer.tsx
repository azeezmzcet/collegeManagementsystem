// import { FETCH_STUDENTS_SUCCESS , FETCH_TEACHERS_SUCCESS, FETCH_COURSES_SUCCESS ,ADD_STUDENT_SUCCESS, EDIT_STUDENT_SUCCESS,
//     DELETE_STUDENT_SUCCESS,ADD_COURSE_SUCCESS, EDIT_COURSE_SUCCESS,DELETE_COURSE_SUCCESS,
//  } from './actions';

// const initialState ={
//     students: [],
//   teachers: [],
//   courses: [],
// };


// export const rootReducer = (state = initialState, action) => {
//     switch (action.type){

//         case FETCH_STUDENTS_SUCCESS:
//       return { ...state, students: action.payload };

//       case FETCH_TEACHERS_SUCCESS:
//       return { ...state, teachers: action.payload };


//       case FETCH_COURSES_SUCCESS:
//         return { ...state, courses: action.payload };


//         case ADD_STUDENT_SUCCESS:
//             return { ...state, students: [...state.students, action.payload] };

//             case EDIT_STUDENT_SUCCESS:
//       return {
//         ...state,
//         students: state.students.map((student) =>
//           student.id === action.payload.id ? action.payload : student
//         ),
//       };




//       case DELETE_STUDENT_SUCCESS:
//         return {
//           ...state,
//           students: state.students.filter((student) => student.id !== action.payload),
//         };

//         case ADD_COURSE_SUCCESS:
//             return { ...state, courses: [...state.courses, action.payload] };

            

//             case EDIT_COURSE_SUCCESS:
//                 return {
//                   ...state,
//                   courses: state.courses.map((course) =>
//                     course.id === action.payload.id ? action.payload : course
//                   ),
//                 };

//                 case DELETE_COURSE_SUCCESS:
//       return {
//         ...state,
//         courses: state.courses.filter((course) => course.id !== action.payload),
//       };

//        default:
//       return state;

//     }


// }