// sagas/authSaga.js

import { call, put, takeLatest } from 'redux-saga/effects';
import axios, {  AxiosError, AxiosRequestConfig } from 'axios';
import { LOGIN_REQUEST, loginSuccess, loginFailure } from './actions';
import { NavigateFunction } from 'react-router-dom';



interface ErrorResponse {
  message: string; // Adjust this based on your API's actual error response structure
}



interface LoginRequestPayload {
  username: string;
  password: string;
  navigate: NavigateFunction;
}



function* loginSaga(action: { payload: LoginRequestPayload }) {
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

        window.location.replace('/dashboard'); // Redirect to principal's dashboard

      } else if (data.role === 'teacher') {
        localStorage.setItem('teacherCourse', data.course);
        console.log("data.course----", data.course);
        yield put(loginSuccess({ role: data.role, course: data.course }));

        // using navigate to redirect
        // navigate('/studentlists');
        window.location.replace('/studentlists');
      }
    } else {
      throw new Error('Login failed, no token returned');
    }
  } catch (error) {
    const axiosError = error as AxiosError<ErrorResponse>;
    const errorMessage = axiosError.response?.data?.message || 'An error occurred, please try again';
    yield put(loginFailure(errorMessage));
  }
}




// Watcher saga for login
export default function* watchLogin() {
  yield takeLatest(LOGIN_REQUEST, loginSaga);
}
