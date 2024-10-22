// teacherCreateActions.ts
export const CREATE_TEACHER_REQUEST = 'CREATE_TEACHER_REQUEST';
export const CREATE_TEACHER_SUCCESS = 'CREATE_TEACHER_SUCCESS';
export const CREATE_TEACHER_FAILURE = 'CREATE_TEACHER_FAILURE';







export const FETCH_TEACHER_REQUEST = 'FETCH_TEACHERS_REQUEST';
export const FETCH_TEACHER_SUCCESS = 'FETCH_TEACHERS_SUCCESS';
export const FETCH_TEACHER_FAILURE = 'FETCH_TEACHERS_FAILURE';

export const fetchTeachersRequest = () => ({ type: FETCH_TEACHER_REQUEST });

export const fetchTeachersSuccess = (teachers: any) => ({
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
  
  export const createTeacherSuccess = (teacher: any) => ({
    
    type: CREATE_TEACHER_SUCCESS,
    payload: teacher,
  });
  
  export const createTeacherFailure = (error: string) => ({
   
    type: CREATE_TEACHER_FAILURE,
    payload: error,
  });
  