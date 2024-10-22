import { createSelector } from 'reselect';
import { RootState } from '../store'; // Adjust the path as per your project

// Base selector to get the course state
export const selectCourseState = (state: RootState) => state.courseReducer;

// Selector to get all courses
export const selectCourses = createSelector(
  [selectCourseState],
  (courseState) => courseState.courses
);

export const selectStudents = createSelector(
  [selectCourseState],
  (courseState) => courseState.students
);