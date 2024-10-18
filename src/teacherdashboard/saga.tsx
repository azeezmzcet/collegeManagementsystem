// // teacherSagas.ts
// import { call, put, takeEvery } from 'redux-saga/effects';
// import axios from 'axios';
// import {
//   FETCH_STUDENTS_REQUEST,
//   fetchStudentsSuccess,
//   fetchStudentsFailure,
// } from './actions';

// function* fetchStudentsSaga(action: any) {
//   try {
//     const token = localStorage.getItem('Token');

//     const response = yield call(axios.get, 'http://127.0.0.1:8000/api/studentlist', {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//       params: { course: course }, // Send the course as a query parameter
//     });

//     yield put(fetchStudentsSuccess(response.data));
//   } catch (error) {
//     console.error('Error fetching students:', error);
//     yield put(fetchStudentsFailure('Failed to fetch students.'));
//   }
// }

// export function* teacherSaga() {
//   yield takeEvery(FETCH_STUDENTS_REQUEST, fetchStudentsSaga);
// }
