// teacherCreateSagas.ts
import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
  FETCH_TEACHER_REQUEST,
  FETCH_TEACHER_SUCCESS,
  FETCH_TEACHER_FAILURE,






  CREATE_TEACHER_REQUEST,
  createTeacherSuccess,
  createTeacherFailure,
} from './actions';





function* fetchTeacher(){
  try {
    const response = yield call(axios.get ,"http://127.0.0.1:8000/api/teacher");
    yield put ({ type: FETCH_TEACHER_SUCCESS , payload: response.data});
   // setTeachers(response.data.teachers);
  } catch (error) {
    // console.error("Error fetching teachers:", error);
    yield put ({type: FETCH_TEACHER_FAILURE ,payload: error.message});
  }
};










function* createTeacherSaga(action: any) {
  try {
    const { username, password, course } = action.payload;

    const response = yield call(axios.post, 'http://127.0.0.1:8000/api/teacher-register', {
      username,
      password,
      course,
    });

    yield put(createTeacherSuccess(response.data));
    
  } catch (error) {
    console.error('Error creating teacher:', error);
    yield put(createTeacherFailure('Failed to create teacher.'));
  }
}

export function* teacherCreateSaga() {
  yield takeEvery(CREATE_TEACHER_REQUEST, createTeacherSaga);
}








export function* teacherSaga() {
  yield takeEvery(FETCH_TEACHER_REQUEST, fetchTeacher);
  
}
