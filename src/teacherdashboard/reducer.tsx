// // teacherReducer.ts
// import {
//     FETCH_STUDENTS_REQUEST,
//     FETCH_STUDENTS_SUCCESS,
//     FETCH_STUDENTS_FAILURE,
//   } from './actions';
  
//   interface TeacherState {
//     students: Student[];
//     loading: boolean;
//     error: string | null;
//   }
  
//   const initialState: TeacherState = {
//     students: [],
//     loading: false,
//     error: null,
//   };
  
//   const teacherReducer = (state = initialState, action: any) => {
//     switch (action.type) {
//       case FETCH_STUDENTS_REQUEST:
//         return { ...state, loading: true, error: null };
//       case FETCH_STUDENTS_SUCCESS:
//         return { ...state, loading: false, students: action.payload };
//       case FETCH_STUDENTS_FAILURE:
//         return { ...state, loading: false, error: action.payload };
//       default:
//         return state;
//     }
//   };
  
//   export default teacherReducer;
  