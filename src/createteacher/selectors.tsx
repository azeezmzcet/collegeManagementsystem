import { createSelector } from "reselect";
import {RootState} from '../store';


export const selectTeacherState = (state:RootState)=>state.teacherReducer;


export const selectTeachers = createSelector(
    [selectTeacherState],
    (teacherState)=> teacherState.teachers
    
);