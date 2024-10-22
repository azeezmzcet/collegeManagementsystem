import React, { useState, useEffect } from "react";
import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
  Container,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TeacherDashboard from "./TeacherDashboard";
import { useDispatch, useSelector } from "react-redux";
import {
  createCourseRequest,
  fetchCoursesRequest,
  updateCourseRequest,
  deleteCourseRequest,
  addStudentRequest,
  editStudentRequest,
  deleteStudentRequest,
} from "./course/actions";
import { selectCourses } from "./course/selectors";
import { selectTeachers } from "./createteacher/selectors";
import { fetchTeachersRequest } from "./createteacher/actions";
import CancelIcon from "@mui/icons-material/Cancel";
import'./index.css';

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const courses = useSelector(selectCourses);
  const teachers = useSelector(selectTeachers);
  const [students, setStudents] = useState<unknown[]>([]);
  const [selectedCourse, setSelectedCourse] = useState<string>("");
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const [openStudentDialog, setOpenStudentDialog] = useState(false);
  const [openCourseDialog, setOpenCourseDialog] = useState(false);
  const [currentStudent, setCurrentStudent] = useState<unknown>(null);
  const [isEditingStudent, setIsEditingStudent] = useState(false);
  const [currentCourse, setCurrentCourse] = useState<unknown>(null);
  const [isEditingCourse, setIsEditingCourse] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState<unknown>("");
  const [teacherCourse, setTeacherCourse] = useState<string>("");

  useEffect(() => {
    dispatch(fetchTeachersRequest());
    dispatch(fetchCoursesRequest());
  }, [dispatch]);

  const handleListItemClick = async (
    _event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
    const course = courses[index];
    setSelectedCourse(course.name);

    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        "http://127.0.0.1:8000/api/studentlist",
        {
          params: { course: course.name },
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const handleChange = (event: { target: { value: unknown } }) => {
    const selectedTeacherUsername = event.target.value;
    const teacher = teachers.find(
      (t: { username: string }) => t.username === selectedTeacherUsername
    );
    if (teacher) {
      setSelectedTeacher(teacher);
      setTeacherCourse(teacher.course);
    } else {
      setTeacherCourse("");
    }
  };

  const handleOpenStudentDialog = (student = null, editing = false) => {
    setCurrentStudent(student);
    setIsEditingStudent(editing);
    setOpenStudentDialog(true);
  };

  const handleCloseStudentDialog = () => {
    setOpenStudentDialog(false);
    setCurrentStudent(null);
    setIsEditingStudent(false);
  };

  const handleAddStudent = async () => {
    if (!currentStudent || !currentStudent.name || !currentStudent.course)
      return;
    const newStudent = { ...currentStudent, course: selectedCourse };

    dispatch(addStudentRequest(newStudent));
    handleCloseStudentDialog();
  };

  const handleEditStudent = async () => {
    if (!currentStudent) return;
    dispatch(editStudentRequest(currentStudent));
    handleCloseStudentDialog();
  };

  const handleDeleteStudent = async (studentToDelete: { id: unknown }) => {
    dispatch(deleteStudentRequest(studentToDelete.id));
  };

  const handleOpenCourseDialog = (course = null, editing = false) => {
    setCurrentCourse(course);
    setIsEditingCourse(editing);
    setOpenCourseDialog(true);
  };

  const handleCloseCourseDialog = () => {
    setOpenCourseDialog(false);
    setCurrentCourse(null);
    setIsEditingCourse(false);
  };

  const handleAddCourse = async () => {
    if (!currentCourse || !currentCourse.name) return;
    dispatch(createCourseRequest({ name: currentCourse.name }));
    handleCloseCourseDialog();
  };

  const handleEditCourse = async () => {
    if (!currentCourse) return;
    dispatch(updateCourseRequest(currentCourse));
    handleCloseCourseDialog();
  };

  const handleDeleteCourse = async (courseToDelete: { id: unknown }) => {
    dispatch(deleteCourseRequest(courseToDelete.id));
  };

  const handelcancel = () => {
    setSelectedCourse("");
  };

  //  const handelteachecnacel=()=>{
  //   setSelectedTeacher();
  //  }



  const handlelogout=()=>{
    navigate('/')
    localStorage.clear();
    console.log('sotrgae clear');
    
  }

  console.log("teacherCourse-state--", teacherCourse);

  return (
    <>
    
      <div>
        <header  id="header"><h1>College Management</h1>
       <Button onClick={handlelogout} variant="contained" style={{position:"absolute", top:'67px', right:'70px'}}>LOGOUT</Button></header>
        <div style={{color:'black', position:"absolute", top:'150px' }}>Dashboard</div>

        <Box
          sx={{
            maxWidth: 360,
            padding: "20px",
            boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
            borderRadius: "8px",
            backgroundColor: "#D3D3D3",
            marginTop:'50px'
          }}
        >
          <List component="nav">
            {courses.map((course: any, index: number) => (
              <ListItemButton
                key={course.id}
                selected={selectedIndex === index}
                onClick={(event) => handleListItemClick(event, index)}
              >
                <ListItemText primary={course.name} />
                <Button onClick={() => handleOpenCourseDialog(course, true)}>
                  Edit
                </Button>
                <Button onClick={() => handleDeleteCourse(course)}>
                  Delete
                </Button>
              </ListItemButton>
            ))}
          </List>
          <Button onClick={() => handleOpenCourseDialog(null, false)}>
            Add Course
          </Button>
        </Box>

        {selectedCourse && (
          <div>
            <h3>Students in {selectedCourse}</h3>
            <CancelIcon
              onClick={handelcancel}
              style={{
                cursor: "pointer",
                position: "absolute",
                right: "100px",
                top: "510px",
                color: "red",
              }}
            ></CancelIcon>
            <TableContainer component={Paper} sx={{ maxHeight: 400 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <b>Name</b>
                    </TableCell>
                    <TableCell>
                      <b>Course</b>
                    </TableCell>
                    <TableCell>
                      <b>Actions</b>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {students.length > 0 ? (
                    students.map((student) => (
                      <TableRow key={student.id}>
                        <TableCell>{student.name}</TableCell>
                        <TableCell>{student.course}</TableCell>
                        <TableCell>
                          <Button
                            onClick={() =>
                              handleOpenStudentDialog(student, true)
                            }
                          >
                            Edit
                          </Button>
                          <Button onClick={() => handleDeleteStudent(student)}>
                            Delete
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={3}>
                        No students found for {selectedCourse}
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
            <Button
              onClick={() =>
                handleOpenStudentDialog(
                  { name: "", course: selectedCourse },
                  false
                )
              }
            >
              Add Student
            </Button>
          </div>
        )}
      </div>

      <div>
        <Box
          sx={{
            maxWidth: 360,
            padding: "20px",
            boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
            borderRadius: "8px",
            backgroundColor: "#DCDCDC	",
            marginTop:'20px',
            
          }}
        >
          <FormControl fullWidth>
            <InputLabel id="teacher-select-label">Teacher Lists</InputLabel>
            <Select
              labelId="teacher-select-label"
              id="teacher-select"
              value={selectedTeacher?.username || ""}
              label="Teacher Lists"
              onChange={handleChange}
            >
              {teachers.map((teacher: id | string | number) => (
                <MenuItem key={teacher.id} value={teacher.username}>
                  {teacher.username}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button onClick={() => navigate("/create-teacher")}>
            Create Teacher
          </Button>
        </Box>

        {teacherCourse ? (
          <TeacherDashboard course={teacherCourse} />
        ) : (
          <p>Please select a teacher to see their course's student list.</p>
        )}
      </div>

      <Dialog open={openStudentDialog} onClose={handleCloseStudentDialog}>
        <DialogTitle>
          {isEditingStudent ? "Edit Student" : "Add Student"}
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Student Name"
            fullWidth
            variant="outlined"
            value={currentStudent ? currentStudent.name : ""}
            onChange={(e) =>
              setCurrentStudent({ ...currentStudent, name: e.target.value })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseStudentDialog}>Cancel</Button>
          <Button
            onClick={isEditingStudent ? handleEditStudent : handleAddStudent}
          >
            {isEditingStudent ? "Save" : "Add"}
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openCourseDialog} onClose={handleCloseCourseDialog}>
        <DialogTitle>
          {isEditingCourse ? "Edit Course" : "Add Course"}
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Course Name"
            fullWidth
            variant="outlined"
            value={currentCourse ? currentCourse.name : ""}
            onChange={(e) =>
              setCurrentCourse({ ...currentCourse, name: e.target.value })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseCourseDialog}>Cancel</Button>
          <Button
            onClick={isEditingCourse ? handleEditCourse : handleAddCourse}
          >
            {isEditingCourse ? "Save" : "ADD"}
          </Button>
        </DialogActions>
      </Dialog>
     
    </>
  );
}

export default Dashboard;
