// courseSagas.ts
import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
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
  FETCH_STUDENTS_FAILURE
} from './actions';

 

function* fetchCourses() {
  try {
    const response = yield call(axios.get, 'http://127.0.0.1:8000/api/courses');
    yield put({ type: FETCH_COURSES_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: FETCH_COURSES_FAILURE, payload: error.message });
  }
}





///////////
// Function to call the API for adding the course
function addCourseAPI(course) {
  return axios.post("http://127.0.0.1:8000/api/courses", { name: course.name });
}

// Function to call the API for fetching students by course
function fetchStudents(courseName, token) {
  return axios.get("http://127.0.0.1:8000/api/studentlist", {
    params: { course: courseName },
    headers: { Authorization: `Bearer ${token}`},
  });
};



function* createCourse(action) {
  try {{
    const response = yield call(addCourseAPI,action.payload);
    yield put({ type: CREATE_COURSE_SUCCESS, payload: response.data });}
  


    const token = localStorage.getItem("token");

      yield call(fetchStudents)
      // const response =yield call (fetchStudents, action.payload.name, token);
      yield put ({type:FETCH_STUDENTS_SUCCESS,payload: response.data  });
    
  } catch (error) {
    yield put({ type: CREATE_COURSE_FAILURE, payload: error.message });
    yield put({ type: FETCH_STUDENTS_FAILURE, payload: error.message });
  }
}



function* updateCourse(action) {
  try {
    console.log("action----", action);
    const response = yield call(axios.put, `http://127.0.0.1:8000/api/courses/${action.payload.id}`, { name: action.payload.name});
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

export function* courseSaga() {
  yield takeEvery(FETCH_COURSES_REQUEST, fetchCourses);
  yield takeEvery(CREATE_COURSE_REQUEST, createCourse);
  yield takeEvery(UPDATE_COURSE_REQUEST, updateCourse);
  yield takeEvery(DELETE_COURSE_REQUEST, deleteCourse);

  yield takeEvery(FETCH_STUDENTS_REQUEST,fetchStudents);
}
