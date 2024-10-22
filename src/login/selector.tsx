import { createSelector } from "reselect";
import {RootState} from '../store';


export const selectloginState = (state:RootState)=>state.teacherReducer;


export const selectlogin = createSelector(
    [selectloginState],
    (loginState)=> loginState.login
    
);