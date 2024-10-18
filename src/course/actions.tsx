
// courseActions.ts
export const FETCH_COURSES_REQUEST = 'FETCH_COURSES_REQUEST';
export const FETCH_COURSES_SUCCESS = 'FETCH_COURSES_SUCCESS';
export const FETCH_COURSES_FAILURE = 'FETCH_COURSES_FAILURE';
//done

export const CREATE_COURSE_REQUEST = 'CREATE_COURSE_REQUEST';
export const CREATE_COURSE_SUCCESS = 'CREATE_COURSE_SUCCESS';
export const CREATE_COURSE_FAILURE = 'CREATE_COURSE_FAILURE';
//done


export const UPDATE_COURSE_REQUEST = 'UPDATE_COURSE_REQUEST';
export const UPDATE_COURSE_SUCCESS = 'UPDATE_COURSE_SUCCESS';
export const UPDATE_COURSE_FAILURE = 'UPDATE_COURSE_FAILURE';






export const DELETE_COURSE_REQUEST = 'DELETE_COURSE_REQUEST';
export const DELETE_COURSE_SUCCESS = 'DELETE_COURSE_SUCCESS';
export const DELETE_COURSE_FAILURE = 'DELETE_COURSE_FAILURE';



// Action Creators
export const fetchCoursesRequest = () => ({ type: FETCH_COURSES_REQUEST });
export const createCourseRequest = (course: unknown) => ({ type: CREATE_COURSE_REQUEST, payload: course });
export const updateCourseRequest = (course: unknown) => ({ type: UPDATE_COURSE_REQUEST, payload: course });
export const deleteCourseRequest = (courseId: unknown) => ({ type: DELETE_COURSE_REQUEST, payload: courseId });








export const FETCH_STUDENTS_REQUEST = "FETCH_STUDENTS_REQUEST";
export const FETCH_STUDENTS_SUCCESS = "FETCH_STUDENTS_SUCCESS";
export const FETCH_STUDENTS_FAILURE = "FETCH_STUDENTS_FAILURE";





export const fetchStudentsRequest = (courseName) => ({
    type: FETCH_STUDENTS_REQUEST,
    payload: courseName,
  });
  
  export const fetchStudentsSuccess = (students) => ({
    type: FETCH_STUDENTS_SUCCESS,
    payload: students,
  });
  
  export const fetchStudentsFailure = (error) => ({
    type: FETCH_STUDENTS_FAILURE,
    payload: error,
  });