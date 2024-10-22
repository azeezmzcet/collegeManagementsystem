// courseReducer.ts
import {
    FETCH_COURSES_SUCCESS,

    CREATE_COURSE_SUCCESS,
    UPDATE_COURSE_SUCCESS,

    DELETE_COURSE_SUCCESS,


    
    FETCH_STUDENTS_SUCCESS,
    FETCH_STUDENTS_FAILURE,


    CREATE_STUDENTS_SUCCESS, 
    UPDATE_STUDENTS_SUCCESS,
    DELETE_STUDENTS_SUCCESS,
    FETCH_STUDENTS_REQUEST

    
  } from './actions';
  
  const initialState = {
    courses: [],
    students: [],
    loading: false,
    error: null,
  };
  
  const courseReducer = (state = initialState, action: { type: unknown; payload: { id: unknown; }; }) => {
    switch (action.type) {
      case FETCH_COURSES_SUCCESS:
        return { ...state, courses: action.payload };
      case CREATE_COURSE_SUCCESS:
        return { ...state, courses: [...state.courses, action.payload],error:null };
        


      case UPDATE_COURSE_SUCCESS:
        return {
          ...state,courses: state.courses.map(course => (course.id === action.payload.id ?  action.payload : course)),
        };






      case DELETE_COURSE_SUCCESS:
        return { ...state,loading: false, courses: state.courses.filter((course) => course.id !== action.payload ) };


//////////////////////// student

case FETCH_STUDENTS_REQUEST:
  return {
    ...state,
    loading: true,
    error: null,
  };

        case FETCH_STUDENTS_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        students: action.payload,
      };
      
    

    case FETCH_STUDENTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
     
      };


      case CREATE_STUDENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        students: [...state.students, action.payload], 
      };


      case UPDATE_STUDENTS_SUCCESS:
        return {
          ...state,
          loading: false,
          students: state.students.map((student) =>
            student.id === action.payload.id ? action.payload : student
          ), 
        };

        case DELETE_STUDENTS_SUCCESS:
          return {
            ...state,
            loading: false,
            students: state.students.filter(
              (student) => student.id !== action.payload
            ), 
          };









     
        default:
        return state;
    }
  };


  
  export default courseReducer;
  