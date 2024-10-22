import { NavigateFunction } from "react-router-dom";

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';





export const loginRequest = (username: string, password: string, navigate: NavigateFunction) => ({
    type: LOGIN_REQUEST,
    payload: { username, password, navigate },
  });
  
  export const loginSuccess = (userData: { role: unknown; course: unknown; }) => ({
    type: LOGIN_SUCCESS,
    payload: userData,
  });
  
  export const loginFailure = (error: unknown) => ({
    type: LOGIN_FAILURE,
    payload: error,
  });