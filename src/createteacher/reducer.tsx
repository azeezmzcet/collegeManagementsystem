// teacherCreateReducer.ts
import {
  FETCH_TEACHER_SUCCESS,
  FETCH_TEACHER_REQUEST,
  FETCH_TEACHER_FAILURE,



  CREATE_TEACHER_REQUEST,
  CREATE_TEACHER_SUCCESS,
  CREATE_TEACHER_FAILURE,
  
} from "./actions";

interface TeacherCreateState {
  loading: boolean;
  error: string | null;
  teachers: unknown[];
}

const initialState: TeacherCreateState = {
  teachers: [],
  loading: false,
  error: null,
};

const teacherCreateReducer = (state = initialState, action: any) => {
  switch (action.type) {

    case FETCH_TEACHER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_TEACHER_SUCCESS:
      console.log("action.payload", action.payload);
      return {
        ...state,
        loading: false,
        error: null,
        teachers: action.payload.teachers, // {teacher: [.....]}
      };

      case FETCH_TEACHER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };




    case CREATE_TEACHER_REQUEST:
      console.log('create 4');
      return { ...state, loading: true, error: null };
      

    case CREATE_TEACHER_SUCCESS:
      console.log('create 5');
      return { ...state, loading: false ,createdTeacher:action.payload.teachers};
    case CREATE_TEACHER_FAILURE:
      console.log('create 6');
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default teacherCreateReducer;
