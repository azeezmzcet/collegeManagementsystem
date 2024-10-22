// courseSagas.ts
import { call, put, takeEvery } from 'redux-saga/effects';
import axios, { AxiosRequestConfig } from 'axios';
import {
  FETCH_COURSES_REQUEST,
  FETCH_COURSES_SUCCESS,
  FETCH_COURSES_FAILURE,

  CREATE_COURSE_REQUEST,
  CREATE_COURSE_SUCCESS,
  CREATE_COURSE_FAILURE,

  UPDATE_COURSE_REQUEST,
  UPDATE_COURSE_SUCCESS,
  UPDATE_COURSE_FAILURE,

  DELETE_COURSE_REQUEST,
  DELETE_COURSE_SUCCESS,
  DELETE_COURSE_FAILURE,


  FETCH_STUDENTS_REQUEST,
  FETCH_STUDENTS_SUCCESS,
  FETCH_STUDENTS_FAILURE,

  CREATE_STUDENTS_FAILURE,
  CREATE_STUDENTS_REQUEST,
  CREATE_STUDENTS_SUCCESS,

  UPDATE_STUDENTS_FAILURE,
  UPDATE_STUDENTS_REQUEST,
  UPDATE_STUDENTS_SUCCESS,

  DELETE_STUDENTS_FAILURE,
  DELETE_STUDENTS_REQUEST,
  DELETE_STUDENTS_SUCCESS


 
} from './actions';

 

function* fetchCourses() {
  try {
    const response:AxiosRequestConfig = yield call(axios.get, 'http://127.0.0.1:8000/api/courses');
    yield put({ type: FETCH_COURSES_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: FETCH_COURSES_FAILURE, payload: error.message });
  }
}





// ///////////



function* createCourse(action){
  try {
    // Create a new course
    const courseResponse:AxiosRequestConfig = yield call(axios.post, 'http://127.0.0.1:8000/api/courses', { name: action.payload.name });
    yield put({type:CREATE_COURSE_SUCCESS,payload:courseResponse.data});
  

  }catch (error) {
   
    yield put({type: CREATE_COURSE_FAILURE, payload:error.message});
  }
}















function* updateCourse(action) {
  try {
    console.log("action----", action);
    const response:AxiosRequestConfig = yield call(axios.put, `http://127.0.0.1:8000/api/courses/${action.payload.id}`, { name: action.payload.name});
    console.log("response----", response);

    yield put({ type: UPDATE_COURSE_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: UPDATE_COURSE_FAILURE, payload: error.message });
  }
}










function* deleteCourse(action) {
  try {
    yield call(axios.delete, `http://127.0.0.1:8000/api/courses/${action.payload}`);
    yield put({ type: DELETE_COURSE_SUCCESS, payload: action.payload });
  } catch (error) {
    yield put({ type: DELETE_COURSE_FAILURE, payload: error.message });
  }
}





////////////// students


function* fetchstudentsaga(action){
  try{
    
    console.log("action.payload----", action.payload);
    const token = localStorage.getItem('Token');
    const { course } = action.payload;
    

    const options = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: { course }, 
      };
   // const token = localStorage.getItem('token');
   const response:AxiosRequestConfig = yield call(axios.get, 'http://127.0.0.1:8000/api/studentlist', options);
   
   
    yield put({type:FETCH_STUDENTS_SUCCESS, payload: response.data});
}catch (error) {
  
  
  yield put({type:FETCH_STUDENTS_FAILURE,payload:error.message});
}
}



/////////////






function* createstudents(action){
  try {
    
    const response:AxiosRequestConfig = yield call(axios.post, 'http://127.0.0.1:8000/api/students', action.payload);
    
   
    yield put({type: CREATE_STUDENTS_SUCCESS, payload: response.data});
  } catch (error) {
    
    yield put({type :CREATE_STUDENTS_FAILURE, payload:error.message});
  }
}




function* editStudentSaga(action) {
  try {
   
    const response = yield call(axios.put, `http://127.0.0.1:8000/api/students/${action.payload.id}`, action.payload);
    
   
    yield put({type :UPDATE_STUDENTS_SUCCESS, payload: response.data});
  } catch (error) {
   
    yield put({ type: UPDATE_STUDENTS_FAILURE, payload: error.message});
  }
}


function* deleteStudentSaga(action) {
  try {
    
    yield call(axios.delete, `http://127.0.0.1:8000/api/students/${action.payload}`);
    
   
    yield put({type: DELETE_STUDENTS_SUCCESS,payload:action.payload});
  } catch (error) {
    
    yield put({type: DELETE_STUDENTS_FAILURE,payload: error.message});
  }
}













export function* courseSaga() {
  yield takeEvery(FETCH_COURSES_REQUEST, fetchCourses);
  yield takeEvery(CREATE_COURSE_REQUEST, createCourse);
  yield takeEvery(UPDATE_COURSE_REQUEST, updateCourse);
  yield takeEvery(DELETE_COURSE_REQUEST, deleteCourse);

  yield takeEvery(FETCH_STUDENTS_REQUEST,fetchstudentsaga);
  yield takeEvery(CREATE_STUDENTS_REQUEST,createstudents);
  yield takeEvery(UPDATE_STUDENTS_REQUEST,editStudentSaga);
  yield takeEvery(DELETE_STUDENTS_REQUEST,deleteStudentSaga);
}
