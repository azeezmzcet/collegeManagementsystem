
// courseActions.ts
export const FETCH_COURSES_REQUEST = 'FETCH_COURSES_REQUEST';
export const FETCH_COURSES_SUCCESS = 'FETCH_COURSES_SUCCESS';
export const FETCH_COURSES_FAILURE = 'FETCH_COURSES_FAILURE';


export const CREATE_COURSE_REQUEST = 'CREATE_COURSE_REQUEST';
export const CREATE_COURSE_SUCCESS = 'CREATE_COURSE_SUCCESS';
export const CREATE_COURSE_FAILURE = 'CREATE_COURSE_FAILURE';



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
//done
export const CREATE_STUDENTS_REQUEST = "CREATE_STUDENTS_REQUEST";
export const CREATE_STUDENTS_SUCCESS = "CREATE_STUDENTS_SUCCESS";
export const CREATE_STUDENTS_FAILURE = "CREATE_STUDENTS_FAILURE";
//done


export const UPDATE_STUDENTS_REQUEST = "UPDATE_STUDENTS_REQUEST";
export const UPDATE_STUDENTS_SUCCESS = "UPDATE_STUDENTS_SUCCESS";
export const UPDATE_STUDENTS_FAILURE = "UPDATE_STUDENTS_FAILURE";
//done
export const DELETE_STUDENTS_REQUEST = "DELETE_STUDENTS_REQUEST";
export const DELETE_STUDENTS_SUCCESS = "DELETE_STUDENTS_SUCCESS";
export const DELETE_STUDENTS_FAILURE = "DELETE_STUDENTS_FAILURE";
//..


interface Student {
  id: string | number; // Define the type according to your implementation
  name: string;
  course: string;
}



export const fetchStudentsRequest = (course: { course: string | null; }) => ({
    type: FETCH_STUDENTS_REQUEST,
    payload: course,
  });
  
  export const fetchStudentsSuccess = (students: unknown) => ({
    type: FETCH_STUDENTS_SUCCESS,
    payload: students,
  });
  
  export const fetchStudentsFailure = (error: unknown) => ({
    type: FETCH_STUDENTS_FAILURE,
    payload: error,
  });




  export const addStudentRequest = (student: { course: string; }) => ({
    type: CREATE_STUDENTS_REQUEST,
    payload: student,
  });
  
  export const addStudentSuccess = (student: unknown) => ({
    type: CREATE_STUDENTS_SUCCESS,
    payload: student,
  });
  
  export const addStudentFailure = (error: unknown) => ({
    type: CREATE_STUDENTS_FAILURE,
    payload: error,
  });



  export const editStudentRequest = (student:unknown) => ({
    type: UPDATE_STUDENTS_REQUEST,
    payload: student,
  });
  
  export const editStudentSuccess = (student: Student) => ({
    type: UPDATE_STUDENTS_SUCCESS,
    payload: student,
  });
  


  
  export const editStudentFailure = (error:unknown) => ({
    type: UPDATE_STUDENTS_FAILURE,
    payload: error,
  });


  export const deleteStudentRequest = (studentId: unknown) => ({
    type: DELETE_STUDENTS_REQUEST,
    payload: studentId,
  });
  
  // export const deleteStudentSuccess = (studentId: unknown) => ({
  //   type: DELETE_STUDENTS_SUCCESS,
  //   payload: studentId,
  // });


export const deleteStudentsSuccess = (id: string | number) => ({
  type: DELETE_STUDENTS_SUCCESS,
  payload: id, // Ensure this is just the ID
});
  
  export const deleteStudentFailure = (error: unknown) => ({
    type: DELETE_STUDENTS_FAILURE,
    payload: error,
  });