// teacherCreateSagas.ts
import { call, put, takeEvery } from 'redux-saga/effects';
import axios,{ AxiosRequestConfig } from 'axios';
import {
  FETCH_TEACHER_REQUEST,
  FETCH_TEACHER_SUCCESS,
  FETCH_TEACHER_FAILURE,






  CREATE_TEACHER_REQUEST,
  CREATE_TEACHER_SUCCESS,
  CREATE_TEACHER_FAILURE,
  deleteTeacherFailure,
  deleteTeacherSuccess,
  DELETE_TEACHER_REQUEST,
} from './actions';





function* fetchTeacher(){
  try {
    const response:AxiosRequestConfig = yield call(axios.get ,"http://127.0.0.1:8000/api/teacher");
    yield put ({ type: FETCH_TEACHER_SUCCESS , payload: response.data});
   // setTeachers(response.data.teachers);
  } catch (error) {
    // console.error("Error fetching teachers:", error);
    yield put ({type: FETCH_TEACHER_FAILURE ,payload: error.message});
  }
};










function* createTeacherSaga(action: any) {
  try {
   // const { username, password, course } = action.payload;
   console.log('create 7');
    const response:AxiosRequestConfig = yield call(axios.post, 'http://127.0.0.1:8000/api/teacher-register', action.payload);
    console.log('create 8');

    yield put({type: CREATE_TEACHER_SUCCESS, payload:response.data});
    console.log('create 9');

   // action.payload.navigate('/dashboard');
  } catch (error) {
    console.log('create 10');
    console.error('Error creating teacher:', error);
    console.log('create 11');
    yield put({type: CREATE_TEACHER_FAILURE, payload:error.message});
    console.log('create 12');
  }
}


function* deleteTeacherSaga(action: unknown) {
  try {
    yield call(axios.delete, `http://127.0.0.1:8000/api/teachers/${action.payload}`);
    yield put(deleteTeacherSuccess(action.payload));
  } catch (error) {
    yield put(deleteTeacherFailure((error as Error).message));
  }
}











export function* teacherSaga() {
  yield takeEvery(FETCH_TEACHER_REQUEST, fetchTeacher);
  yield takeEvery(CREATE_TEACHER_REQUEST, createTeacherSaga);
   yield takeEvery(DELETE_TEACHER_REQUEST, deleteTeacherSaga);
  
}
