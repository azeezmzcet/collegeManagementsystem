// teacherCreateActions.ts
export const CREATE_TEACHER_REQUEST = 'CREATE_TEACHER_REQUEST';
export const CREATE_TEACHER_SUCCESS = 'CREATE_TEACHER_SUCCESS';
export const CREATE_TEACHER_FAILURE = 'CREATE_TEACHER_FAILURE';







export const FETCH_TEACHER_REQUEST = 'FETCH_TEACHERS_REQUEST';
export const FETCH_TEACHER_SUCCESS = 'FETCH_TEACHERS_SUCCESS';
export const FETCH_TEACHER_FAILURE = 'FETCH_TEACHERS_FAILURE';



export const DELETE_TEACHER_REQUEST = "DELETE_TEACHER_REQUEST";
export const DELETE_TEACHER_SUCCESS = "DELETE_TEACHER_SUCCESS";
export const DELETE_TEACHER_FAILURE = "DELETE_TEACHER_FAILURE";


export const fetchTeachersRequest = () => ({ type: FETCH_TEACHER_REQUEST });

export const fetchTeachersSuccess = (teachers: unknown) => ({
  type: FETCH_TEACHER_SUCCESS,
  payload: teachers,
});

export const fetchTeachersFailure = (error: string) => ({
  type: FETCH_TEACHER_FAILURE,
  payload: error,
})





// teacherCreateActions.ts
export const createTeacherRequest = (teacherData: { username: string; password: string; course: string }) => ({
  
  
    type: CREATE_TEACHER_REQUEST,
    payload: teacherData,
  });
  
  export const createTeacherSuccess = (teacher: unknown) => ({
    
    type: CREATE_TEACHER_SUCCESS,
    payload: teacher,
  });
  
  export const createTeacherFailure = (error: string) => ({
   
    type: CREATE_TEACHER_FAILURE,
    payload: error,
  });




  export const deleteTeacherRequest = (teacherId: number | string) => ({
    type: DELETE_TEACHER_REQUEST,
    payload: teacherId,
  });
  
  export const deleteTeacherSuccess = (teacherId: number | string) => ({
    type: DELETE_TEACHER_SUCCESS,
    payload: teacherId,
  });
  
  export const deleteTeacherFailure = (error: string) => ({
    type: DELETE_TEACHER_FAILURE,
    payload: error,
  });
  