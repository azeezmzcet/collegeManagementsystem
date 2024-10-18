// courseReducer.ts
import {
    FETCH_COURSES_SUCCESS,
    CREATE_COURSE_SUCCESS,
    UPDATE_COURSE_SUCCESS,
    DELETE_COURSE_SUCCESS,


    
    FETCH_STUDENTS_SUCCESS,
    FETCH_STUDENTS_FAILURE,
  } from './actions';
  
  const initialState = {
    courses: [],
    students: [],
    loading: false,
    error: null,
  };
  
  const courseReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_COURSES_SUCCESS:
        return { ...state, courses: action.payload };
      case CREATE_COURSE_SUCCESS:
        return { ...state, courses: [...state.courses, action.payload] };


      case UPDATE_COURSE_SUCCESS:
        return {
          ...state,courses: state.courses.map(course => (course.id === action.payload.id ?  action.payload : course)),
        };






      case DELETE_COURSE_SUCCESS:
        return { ...state, courses: state.courses.filter(course => course.id !== action.payload) };

        case FETCH_STUDENTS_SUCCESS:
      return {
        ...state,
        students: action.payload,
      };
    case FETCH_STUDENTS_FAILURE:
      return {
        ...state,
        error: action.payload,
     
      };
     
        default:
        return state;
    }
  };
  
  export default courseReducer;
  