// sagas/authSaga.js

import { call, put, takeLatest } from 'redux-saga/effects';
import axios, { AxiosRequestConfig } from 'axios';
import { LOGIN_REQUEST, loginSuccess, loginFailure } from './actions';

function* loginSaga(action: { payload: { username: unknown; password: unknown; navigate: unknown; }; }) {
  const { username, password, navigate } = action.payload;
  try {
   
    const response:AxiosRequestConfig = yield call(axios.post, 'http://127.0.0.1:8000/api/login', {
      username,
      password,
    });

    const data = response.data;

    if (data.tokenName) {
      // Store token and course in localStorage
      localStorage.setItem('Token', data.tokenName);
      localStorage.setItem('course', data.course);

      // Navigate based on the user's role
      if (data.role === 'principal') {
        yield put(loginSuccess({ role: data.role, course: data.course }));

        window.location.href = '/dashboard'; // Redirect to principal's dashboard

      } else if (data.role === 'teacher') {
        localStorage.setItem('teacherCourse', data.course);
        console.log("data.course----", data.course);
        yield put(loginSuccess({ role: data.role, course: data.course }));

        // using navigate to redirect
        navigate('/studentlists');
      }
    } else {
      throw new Error('Login failed, no token returned');
    }
  } catch (error) {
    yield put(loginFailure(error.response?.data?.message || 'An error occurred, please try again'));
  }
}




// Watcher saga for login
export default function* watchLogin() {
  yield takeLatest(LOGIN_REQUEST, loginSaga);
}
