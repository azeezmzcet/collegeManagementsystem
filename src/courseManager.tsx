import React, { useState, useEffect } from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import axios from 'axios';

function CourseManager() {
  const [courses, setCourses] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [currentCourse, setCurrentCourse] = useState({ name: '' });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchCourses();
  }, []);

  // Fetch courses from the backend
  const fetchCourses = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/courses');
      setCourses(response.data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  // Open dialog for adding/editing a course
  const handleOpenDialog = (course = { name: '' }, editing = false) => {
    setCurrentCourse(course);
    setIsEditing(editing);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setCurrentCourse({ name: '' });
  };

  // Handle course creation
  const handleCreateCourse = async () => {
    if (!currentCourse.name) return;

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/courses', currentCourse);
      setCourses([...courses, response.data]);
      handleCloseDialog();
    } catch (error) {
      console.error('Error creating course:', error);
    }
  };

  // Handle course update
  const handleUpdateCourse = async () => {
    if (!currentCourse.name || !currentCourse.id) return;

    try {
      const response = await axios.put(`http://127.0.0.1:8000/api/courses/${currentCourse.id}`, currentCourse);
      setCourses(courses.map(course => (course.id === currentCourse.id ? response.data : course)));
      handleCloseDialog();
    } catch (error) {
      console.error('Error updating course:', error);
    }
  };

  // Handle course deletion
  const handleDeleteCourse = async (courseId) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/courses/${courseId}`);
      setCourses(courses.filter(course => course.id !== courseId));
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  };

  return (
    <div>
      <h2>Course Management</h2>

      {/* Course Table */}
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Course Name</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {courses.map(course => (
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

      {/* Add Course Button */}
      <Button onClick={() => handleOpenDialog()}>Add Course</Button>

      {/* Dialog for Adding/Editing Course */}
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
