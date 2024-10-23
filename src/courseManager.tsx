
// CourseManager.tsx
import  { useEffect, useState } from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCoursesRequest,
  createCourseRequest,
  updateCourseRequest,
  deleteCourseRequest,
} from './course/actions';
import { RootState } from './store';

function CourseManager() {
  const dispatch = useDispatch();
  const { courses } = useSelector((state:RootState )=> state.courseReducer);
  const [openDialog, setOpenDialog] = useState(false);
  const [currentCourse, setCurrentCourse] = useState({ name: '', id: null });
  const [isEditing, setIsEditing] = useState(false);

  console.log('coursemanager 2');

  useEffect(() => {
    dispatch(fetchCoursesRequest());
    console.log('coursemanager 1');
    
  }, [dispatch]);

  const handleOpenDialog = (course = { name: '', id: null }, editing = false) => {
    setCurrentCourse(course);
    setIsEditing(editing);
    setOpenDialog(true);
    console.log('coursemanager 3');
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setCurrentCourse({ name: '', id: null });
    console.log('coursemanager 4');
  };

  const handleCreateCourse = () => {
    if (!currentCourse.name) return;
    dispatch(createCourseRequest(currentCourse));
    handleCloseDialog();
    console.log('coursemanager 6');
  };

  const handleUpdateCourse = () => {
    if (!currentCourse.name || !currentCourse.id) return;
    dispatch(updateCourseRequest(currentCourse));
    handleCloseDialog();
    console.log('coursemanager 123');
  };

  const handleDeleteCourse = (courseId: unknown) => {
    dispatch(deleteCourseRequest(courseId));
    console.log('coursemanager 3234');
  };

  return (
    <div>
      <h2>Course Management</h2>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Course Name</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {courses.map((course: { name: string; id: null; }) => (
            <TableRow key={course.id}>
              <TableCell>{course.name}</TableCell>
              <TableCell>
                <Button onClick={() => handleOpenDialog(course, true)}>Edit</Button>
                <Button onClick={() => handleDeleteCourse(course.id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Button onClick={() => handleOpenDialog()}>Add Course</Button>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>{isEditing ? 'Edit Course' : 'Add Course'}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Course Name"
            fullWidth
            variant="outlined"
            value={currentCourse.name}
            onChange={(e) => setCurrentCourse({ ...currentCourse, name: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={isEditing ? handleUpdateCourse : handleCreateCourse}>
            {isEditing ? 'Update' : 'Create'}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CourseManager;
