// // sagas.js
// import { call, put, takeEvery } from 'redux-saga/effects';
// import axios from 'axios';
// import {
//   FETCH_COURSES,
//   FETCH_COURSES_SUCCESS,
//   FETCH_COURSES_FAILURE,
//   CREATE_COURSE,
//   CREATE_COURSE_SUCCESS,
//   CREATE_COURSE_FAILURE,
//   UPDATE_COURSE,
//   UPDATE_COURSE_SUCCESS,
//   UPDATE_COURSE_FAILURE,
//   DELETE_COURSE,
//   DELETE_COURSE_SUCCESS,
//   DELETE_COURSE_FAILURE,

//   FETCH_STUDENTS_REQUEST,
//   fetchStudentsSuccess,
//   fetchStudentsFailure,


//   CREATE_TEACHER_REQUEST,
//   createTeacherSuccess,
//   createTeacherFailure,
// } from './actions';

// // API calls
// const api = 'http://127.0.0.1:8000/api/courses';

// function* fetchCourses() {
//   try {
//     const response = yield call(axios.get, api);
//     yield put({ type: FETCH_COURSES_SUCCESS, payload: response.data });
//   } catch (error) {
//     yield put({ type: FETCH_COURSES_FAILURE, error });
//   }
// }

// function* createCourse(action) {
//   try {
//     const response = yield call(axios.post, api, action.payload);
//     yield put({ type: CREATE_COURSE_SUCCESS, payload: response.data });
//   } catch (error) {
//     yield put({ type: CREATE_COURSE_FAILURE, error });
//   }
// }

// function* updateCourse(action) {
//   try {
//     const response = yield call(axios.put, `${api}/${action.payload.id}`, action.payload);
//     yield put({ type: UPDATE_COURSE_SUCCESS, payload: response.data });
//   } catch (error) {
//     yield put({ type: UPDATE_COURSE_FAILURE, error });
//   }
// }

// function* deleteCourse(action) {
//   try {
//     yield call(axios.delete, `${api}/${action.payload}`);
//     yield put({ type: DELETE_COURSE_SUCCESS, payload: action.payload });
//   } catch (error) {
//     yield put({ type: DELETE_COURSE_FAILURE, error });
//   }
// }



// ///////

// function* fetchStudents(action) {
//     try {
//       const token = localStorage.getItem('Token');
//       const response = yield call(axios.get, 'http://127.0.0.1:8000/api/studentlist', {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//         params: { course: action.payload },
//       });
      
//       yield put(fetchStudentsSuccess(response.data));
//     } catch (error) {
//       console.error('Error fetching students:', error);
//       yield put(fetchStudentsFailure('Failed to fetch students.'));
//     }
//   }


//   //////////

//   function* createTeacher(action) {
//     try {
//       const response = yield call(axios.post, 'http://127.0.0.1:8000/api/teacher-register', action.payload);
      
//       yield put(createTeacherSuccess(response.data));
//     } catch (error) {
//       console.error('Error creating teacher:', error);
//       yield put(createTeacherFailure('Failed to create teacher.'));
//     }
//   }
  
  




// // Watcher saga
// export default function* rootSaga() {
//   yield takeEvery(FETCH_COURSES, fetchCourses);
//   yield takeEvery(CREATE_COURSE, createCourse);
//   yield takeEvery(UPDATE_COURSE, updateCourse);
//   yield takeEvery(DELETE_COURSE, deleteCourse);

//   yield takeLatest(FETCH_STUDENTS_REQUEST, fetchStudents);

//   yield takeLatest(CREATE_TEACHER_REQUEST, createTeacher);
// }

// // export default function* watchFetchStudents() {
// //     yield takeLatest(FETCH_STUDENTS_REQUEST, fetchStudents);
// //   }

// // function* watchCreateTeacher() {
// //     yield takeLatest(CREATE_TEACHER_REQUEST, createTeacher);
// //   }
  
// //   export default watchCreateTeacher;













// sagas.js
import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import {
    FETCH_COURSES,
    FETCH_COURSES_SUCCESS,
    FETCH_COURSES_FAILURE,
    CREATE_COURSE,
    CREATE_COURSE_SUCCESS,
    CREATE_COURSE_FAILURE,
    UPDATE_COURSE,
    UPDATE_COURSE_SUCCESS,
    UPDATE_COURSE_FAILURE,
    DELETE_COURSE,
    DELETE_COURSE_SUCCESS,
    DELETE_COURSE_FAILURE,




    FETCH_TEACHERS,
    FETCH_TEACHERS_SUCCESS,
    FETCH_TEACHERS_FAILURE,
} from './actions';

function* fetchCoursesSaga() {
    try {
        const response = yield call(axios.get, 'http://127.0.0.1:8000/api/courses');
        yield put({ type: FETCH_COURSES_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: FETCH_COURSES_FAILURE, payload: error.message });
    }
}

function* createCourseSaga(action) {
    try {
        const response = yield call(axios.post, 'http://127.0.0.1:8000/api/courses', action.payload);
        yield put({ type: CREATE_COURSE_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: CREATE_COURSE_FAILURE, payload: error.message });
    }
}

function* updateCourseSaga(action) {
    try {
        const response = yield call(axios.put, `http://127.0.0.1:8000/api/courses/${action.payload.id}`, action.payload);
        yield put({ type: UPDATE_COURSE_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: UPDATE_COURSE_FAILURE, payload: error.message });
    }
}

function* deleteCourseSaga(action) {
    try {
        yield call(axios.delete, `http://127.0.0.1:8000/api/courses/${action.payload}`);
        yield put({ type: DELETE_COURSE_SUCCESS, payload: action.payload });
    } catch (error) {
        yield put({ type: DELETE_COURSE_FAILURE, payload: error.message });
    }
}









function* fetchTeachersSaga() {
    try {
        const response = yield call(axios.get, 'http://127.0.0.1:8000/api/teachers');
        yield put({ type: FETCH_TEACHERS_SUCCESS, payload: response.data });
        navigate('/dashboard');
    } catch (error) {
        yield put({ type: FETCH_TEACHERS_FAILURE, payload: error.message });
    }
}



export default function* rootSaga() {
    yield takeEvery(FETCH_COURSES, fetchCoursesSaga);
    yield takeEvery(CREATE_COURSE, createCourseSaga);
    yield takeEvery(UPDATE_COURSE, updateCourseSaga);
    yield takeEvery(DELETE_COURSE, deleteCourseSaga);
    yield takeEvery(FETCH_TEACHERS, fetchTeachersSaga);
}

