// import { call, put, takeLatest } from 'redux-saga/effects';
// import axios from 'axios';
// import {FETCH_STUDENTS_REQUEST,FETCH_STUDENTS_SUCCESS, FETCH_STUDENTS_FAILURE, FETCH_TEACHERS_SUCCESS, FETCH_TEACHERS_FAILURE, FETCH_TEACHERS_REQUEST  , FETCH_COURSES_REQUEST,
//     FETCH_COURSES_SUCCESS,
//     FETCH_COURSES_FAILURE,ADD_STUDENT_REQUEST,
//     ADD_STUDENT_SUCCESS,
//     ADD_STUDENT_FAILURE,EDIT_STUDENT_REQUEST,
//     EDIT_STUDENT_SUCCESS,
//     EDIT_STUDENT_FAILURE, DELETE_STUDENT_REQUEST,
//     DELETE_STUDENT_SUCCESS,
//     DELETE_STUDENT_FAILURE, ADD_COURSE_REQUEST,
//     ADD_COURSE_SUCCESS,
//     ADD_COURSE_FAILURE, EDIT_COURSE_REQUEST,
//     EDIT_COURSE_SUCCESS,
//     EDIT_COURSE_FAILURE,DELETE_COURSE_REQUEST,
//     DELETE_COURSE_SUCCESS,
//     DELETE_COURSE_FAILURE,} from './actions';



//  function* fetchStudents(index: string | number) {

//     const course = courses [index];

//     try {
//      const token = localStorage.getItem('token');
//       const response = yield call(axios.get, 'http://127.0.0.1:8000/api/studentlist', {
//         params: { course: course.name }, 
//         headers: { Authorization: `Bearer ${token}` } 
//       });
//       yield put({ type: FETCH_STUDENTS_SUCCESS, payload: response.data });
//     } catch (error) {
//       yield put({ type: FETCH_STUDENTS_FAILURE, error });
//     }
//   }


//   // Fetch Teachers Saga
// function* fetchTeachers() {
//     try {
//       const response = yield call(axios.get, 'http://127.0.0.1:8000/api/teacher');
//       yield put({ type: FETCH_TEACHERS_SUCCESS, payload: response.data.teachers });
//     } catch (error) {
//       yield put({ type: FETCH_TEACHERS_FAILURE, error });
//     }
//   }


//   // Fetch Courses Saga
// function* fetchCourses() {
//     try {
//       const response = yield call(axios.get, 'http://127.0.0.1:8000/api/courses');
//       yield put({ type: FETCH_COURSES_SUCCESS, payload: response.data });
//     } catch (error) {
//       yield put({ type: FETCH_COURSES_FAILURE, error });
//     }
//   }



//   // Add Student Saga
// function* addStudent(action) {
//     try {
//       const response = yield call(axios.post, 'http://127.0.0.1:8000/api/students',  newStudent);
//       yield put({ type: ADD_STUDENT_SUCCESS, payload: response.data });
//     } catch (error) {
//       yield put({ type: ADD_STUDENT_FAILURE, error });
//     }
//   }



//   function* editStudent(action) {
//     try {
//       const response = yield call(axios.put, `http://127.0.0.1:8000/api/students/${currentStudent.id}`, currentStudent);
//       yield put({ type: EDIT_STUDENT_SUCCESS, payload: response.data });
//     } catch (error) {
//       yield put({ type: EDIT_STUDENT_FAILURE, error });
//     }
//   }



//   function* deleteStudent(_action) {
//     try {
//       yield call(axios.delete, `http://127.0.0.1:8000/api/students/${studentToDelete.id}`);
//       yield put({ type: DELETE_STUDENT_SUCCESS, payload: studentToDelete.id });
//     } catch (error) {
//       yield put({ type: DELETE_STUDENT_FAILURE, error });
//     }
//   }



//   function* addCourse(action) {
    
//     try {
//       const response = yield call(axios.post, 'http://127.0.0.1:8000/api/courses', { name: currentCourse.name });
//       yield put({ type: ADD_COURSE_SUCCESS, payload: response.data });
//       yield put({ type: FETCH_STUDENTS_REQUEST, payload: response.data.name });

//       const token = localStorage.getItem('token');
//     //   const response = yield call(axios.post, 'http://127.0.0.1:8000/api/courses', { name: currentCourse.name });
//     const studentsResponse = await axios.get('http://127.0.0.1:8000/api/studentlist', {
//                   params: { course: currentCourse.name },
//                   headers: { Authorization: `Bearer ${token}` } });
//     } catch (error) {
//       yield put({ type: ADD_COURSE_FAILURE, error });
//     }
//   }




// // Edit Course Saga
// function* editCourse(action) {
//     try {
//       const response = yield call(axios.put, `http://127.0.0.1:8000/api/courses/${action.payload.id}`, { name: action.payload.name });
//       yield put({ type: EDIT_COURSE_SUCCESS, payload: response.data });
//     } catch (error) {
//       yield put({ type: EDIT_COURSE_FAILURE, error });
//     }
//   }





//   function* deleteCourse(action) {
//     try {
//       yield call(axios.delete, `http://127.0.0.1:8000/api/courses/${action.payload}`);
//       yield put({ type: DELETE_COURSE_SUCCESS, payload: action.payload });
//     } catch (error) {
//       yield put({ type: DELETE_COURSE_FAILURE, error });
//     }
//   }










//   export default function* rootSaga(){

//     yield takeLatest(FETCH_STUDENTS_REQUEST, fetchStudents);

//     yield takeLatest(FETCH_TEACHERS_REQUEST, fetchTeachers);

//     yield takeLatest(FETCH_COURSES_REQUEST, fetchCourses);

//     yield takeLatest(ADD_STUDENT_REQUEST, addStudent);

//     yield takeLatest(EDIT_STUDENT_REQUEST, addStudent);

//     yield takeLatest(DELETE_STUDENT_REQUEST, deleteStudent);

//     yield takeLatest(ADD_COURSE_REQUEST, addCourse);

//     yield takeLatest(EDIT_COURSE_REQUEST, editCourse);

//     yield takeLatest(DELETE_COURSE_REQUEST, deleteCourse);

//   }







