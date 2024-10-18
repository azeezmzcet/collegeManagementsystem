// import React, { useState, useEffect } from 'react';
// import {
//   Box, List, ListItemButton, ListItemText, InputLabel, MenuItem, FormControl, Select,
//   Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Table, TableHead,
//   TableBody, TableRow, TableCell
// } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import TeacherDashboard from './TeacherDashboard';

// function Dashboard() {
//   const navigate = useNavigate();
//   const [students, setStudents] = useState([]);
//   const [teachers, setTeachers] = useState([]);
//   const [courses, setCourses] = useState([]);
//   const [selectedCourse, setSelectedCourse] = useState('');
//   const [selectedIndex, setSelectedIndex] = useState(-1);
//   const [openStudentDialog, setOpenStudentDialog] = useState(false);
//   const [openCourseDialog, setOpenCourseDialog] = useState(false);
//   const [currentStudent, setCurrentStudent] = useState(null);
//   const [isEditingStudent, setIsEditingStudent] = useState(false);
//   const [currentCourse, setCurrentCourse] = useState(null);
//   const [isEditingCourse, setIsEditingCourse] = useState(false);
//   const [selectedTeacher, setSelectedTeacher] = useState(null);
//   const [teacherCourse, setTeacherCourse] = useState('');

//   // Fetch students by course
//   const handleListItemClick = async (_event, index) => {
//     setSelectedIndex(index);
//     const course = courses[index];
//     setSelectedCourse(course.name);

//     try {
//       const token = localStorage.getItem('token');
//       const response = await axios.get('http://127.0.0.1:8000/api/studentlist', {
//         params: { course: course.name },
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       setStudents(response.data);
//     } catch (error) {
//       console.error('Error fetching students:', error);
//     }
//   };

//   // Handle teacher selection change
//   const handleChange = (event) => {
//     const selectedTeacherUsername = event.target.value;
//     const teacher = teachers.find((t) => t.username === selectedTeacherUsername);
//     if (teacher) {
//       setSelectedTeacher(teacher);
//       setTeacherCourse(teacher.course);
//     } else {
//       setTeacherCourse('');
//     }
//   };

//   const fetchTeachers = async () => {
//     try {
//       const response = await axios.get('http://127.0.0.1:8000/api/teacher');
//       setTeachers(response.data.teachers);
//     } catch (error) {
//       console.error('Error fetching teachers:', error);
//     }
//   };

//   const fetchCourses = async () => {
//     try {
//       const response = await axios.get('http://127.0.0.1:8000/api/courses'); // Adjust this to your actual API
//       setCourses(response.data); // Assuming the API returns an array of courses
//     } catch (error) {
//       console.error('Error fetching courses:', error);
//     }
//   };

//   useEffect(() => {
//     fetchTeachers();
//     fetchCourses(); // Fetch courses on component mount
//   }, []);

//   const handleOpenStudentDialog = (student = null, editing = false) => {
//     setCurrentStudent(student);
//     setIsEditingStudent(editing);
//     setOpenStudentDialog(true);
//   };

//   const handleCloseStudentDialog = () => {
//     setOpenStudentDialog(false);
//     setCurrentStudent(null);
//     setIsEditingStudent(false);
//   };

//   const handleAddStudent = async () => {
//     if (!currentStudent || !currentStudent.name || !currentStudent.course) return;

//     const newStudent = { ...currentStudent, course: selectedCourse };

//     try {
//       const response = await axios.post('http://127.0.0.1:8000/api/students', newStudent);
//       setStudents([...students, response.data]);
//       handleCloseStudentDialog();
//     } catch (error) {
//       console.error('Error adding student:', error);
//     }
//   };

//   const handleEditStudent = async () => {
//     if (!currentStudent) return;

//     try {
//       await axios.put(`http://127.0.0.1:8000/api/students/${currentStudent.id}`, currentStudent);
//       setStudents(students.map((student) => (student.id === currentStudent.id ? currentStudent : student)));
//       handleCloseStudentDialog();
//     } catch (error) {
//       console.error('Error editing student:', error);
//     }
//   };

//   const handleDeleteStudent = async (studentToDelete) => {
//     try {
//       await axios.delete(`http://127.0.0.1:8000/api/students/${studentToDelete.id}`);
//       setStudents(students.filter((student) => student.id !== studentToDelete.id));
//     } catch (error) {
//       console.error('Error deleting student:', error);
//     }
//   };

//   const handleOpenCourseDialog = (course = null, editing = false) => {
//     setCurrentCourse(course);
//     setIsEditingCourse(editing);
//     setOpenCourseDialog(true);
//   };

//   const handleCloseCourseDialog = () => {
//     setOpenCourseDialog(false);
//     setCurrentCourse(null);
//     setIsEditingCourse(false);
//   };

//   const handleAddCourse = async () => {
//     if (!currentCourse || !currentCourse.name) return;

//     try {
//       const response = await axios.post('http://127.0.0.1:8000/api/courses', { name: currentCourse.name });
//       setCourses([...courses, response.data]);

//       const token = localStorage.getItem('token');
//       const studentsResponse = await axios.get('http://127.0.0.1:8000/api/studentlist', {
//           params: { course: currentCourse.name },
//           headers: { Authorization: `Bearer ${token}` }
//       });
//       setStudents(studentsResponse.data);
//       handleCloseCourseDialog();
//     } catch (error) {
//       console.error('Error adding course:', error);
//     }
//   };

//   const handleEditCourse = async () => {
//     if (!currentCourse) return;

//     try {
//       await axios.put(`http://127.0.0.1:8000/api/courses/${currentCourse.id}`, { name: currentCourse.name });
//       setCourses(courses.map((course) => (course.id === currentCourse.id ? currentCourse : course)));
//       handleCloseCourseDialog();
//     } catch (error) {
//       console.error('Error editing course:', error);
//     }
//   };

//   const handleDeleteCourse = async (courseToDelete) => {
//     try {
//       await axios.delete(`http://127.0.0.1:8000/api/courses/${courseToDelete.id}`);
//       setCourses(courses.filter((course) => course.id !== courseToDelete.id));
//     } catch (error) {
//       console.error('Error deleting course:', error);
//     }
//   };

//   return (
//     <>
//       <div>
//         <h1>college management </h1>
//         <div>Dashboard</div>

//         {/* Course List */}
//         <Box sx={{ maxWidth: 360, bgcolor: 'background.paper', width: { xs: '90%', sm: '70%', md: '40%' }, padding: { xs: '20px', md: '40px' }, boxShadow: '0px 4px 12px rgba(0,0,0,0.1)', borderRadius: '8px', backgroundColor: '#fff' }}>
//           <List component="nav">
//             {courses.map((course, index) => (
//               <ListItemButton key={course.id} selected={selectedIndex === index} onClick={(event) => handleListItemClick(event, index)}>
//                 <ListItemText primary={course.name} />
//                 <Button onClick={() => handleOpenCourseDialog(course, true)}>Edit</Button>
//                 <Button onClick={() => handleDeleteCourse(course)}>Delete</Button>
//               </ListItemButton>
//             ))}
//           </List>
//           {/* Add Course Button */}
//          <Button onClick={() => handleOpenCourseDialog(null, false)}>Add Course</Button>
//         </Box>

//         {/* Display students based on the selected course */}
//         {selectedCourse && (
//           <div>
//             <h3>Students in {selectedCourse}</h3>
//             <Table>
//               <TableHead>
//                 <TableRow>
//                   <TableCell>Name</TableCell>
//                   <TableCell>Course</TableCell>
//                   <TableCell>Actions</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {students.length > 0 ? (
//                   students.map((student) => (
//                     <TableRow key={student.id}>
//                       <TableCell>{student.name}</TableCell>
//                       <TableCell>{student.course}</TableCell>
//                       <TableCell>
//                         <Button onClick={() => handleOpenStudentDialog(student, true)}>Edit</Button>
//                         <Button onClick={() => handleDeleteStudent(student)}>Delete</Button>
//                       </TableCell>
//                     </TableRow>
//                   ))
//                 ) : (
//                   <TableRow>
//                     <TableCell colSpan={3}>No students found for {selectedCourse}</TableCell>
//                   </TableRow>
//                 )}
//               </TableBody>
//             </Table>
//             <Button onClick={() => handleOpenStudentDialog({ name: '', course: selectedCourse }, false)}>Add Student</Button>
//           </div>
//         )}
//       </div>

//       {/* Teacher Dropdown and Teacher Dashboard */}
//       <div>
//         <Box sx={{ maxWidth: 360, bgcolor: 'background.paper', width: { xs: '90%', sm: '70%', md: '40%' }, padding: { xs: '20px', md: '40px' }, boxShadow: '0px 4px 12px rgba(0,0,0,0.1)', borderRadius: '8px', backgroundColor: '#fff' }}>
//           <FormControl fullWidth>
//             <InputLabel id="teacher-select-label">Teacher Lists</InputLabel>
//             <Select labelId="teacher-select-label" id="teacher-select" value={selectedTeacher?.username || ''} label="Teacher Lists" onChange={handleChange}>
//               {teachers.map((teacher, index) => (
//                 <MenuItem key={index} value={teacher.username}>
//                   {teacher.username}
//                 </MenuItem>
//               ))}
//             </Select>
//           </FormControl>
//           <Button onClick={() => navigate('/create-teacher')}>Create Teacher</Button>
//         </Box>

//         {/* Conditionally render TeacherDashboard only if teacherCourse is available */}
//         {teacherCourse ? <TeacherDashboard course={teacherCourse} /> : <p>Please select a teacher to see their course's student list.</p>}
//       </div>

//       {/* Dialog for Adding/Editing Student */}
//       <Dialog open={openStudentDialog} onClose={handleCloseStudentDialog}>
//         <DialogTitle>{isEditingStudent ? 'Edit Student' : 'Add Student'}</DialogTitle>
//         <DialogContent>
//           <TextField autoFocus margin="dense" label="Student Name" fullWidth variant="outlined" value={currentStudent ? currentStudent.name : ''} onChange={(e) => setCurrentStudent({ ...currentStudent, name: e.target.value })} />
//           <TextField margin="dense" label="Course" fullWidth variant="outlined" value={currentStudent ? currentStudent.course : ''} onChange={(e) => setCurrentStudent({ ...currentStudent, course: e.target.value })} />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseStudentDialog}>Cancel</Button>
//           <Button onClick={isEditingStudent ? handleEditStudent : handleAddStudent}>{isEditingStudent ? 'Update' : 'Add'}</Button>
//         </DialogActions>
//       </Dialog>

//       {/* Dialog for Adding/Editing Course */}
//       <Dialog open={openCourseDialog} onClose={handleCloseCourseDialog}>
//         <DialogTitle>{isEditingCourse ? 'Edit Course' : 'Add Course'}</DialogTitle>
//         <DialogContent>
//           <TextField
//             autoFocus
//             margin="dense"
//             label="Course Name"
//             fullWidth
//             variant="outlined"
//             value={currentCourse ? currentCourse.name : ''}
//             onChange={(e) => setCurrentCourse({ ...currentCourse, name: e.target.value })}
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseCourseDialog}>Cancel</Button>
//           <Button onClick={isEditingCourse ? handleEditCourse : handleAddCourse}>{isEditingCourse ? 'Update' : 'Add'}</Button>
//         </DialogActions>
//       </Dialog>
//     </>
//   );
// }

// export default Dashboard;























// with redux

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
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TeacherDashboard from "./TeacherDashboard";
import { useDispatch, useSelector } from "react-redux";
import { createCourseRequest, fetchCoursesRequest, updateCourseRequest } from "./course/actions";
import { selectCourses } from "./course/selectors";
import { selectTeachers } from "./createteacher/selectors";
import { fetchTeachersRequest } from "./createteacher/actions";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const courses =  useSelector(selectCourses); 
  const teachers =  useSelector(selectTeachers); 
  const [students, setStudents] = useState([]);
  //const [teachers, setTeachers] = useState([]);
  // const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [openStudentDialog, setOpenStudentDialog] = useState(false);
  const [openCourseDialog, setOpenCourseDialog] = useState(false);
  const [currentStudent, setCurrentStudent] = useState(null);
  const [isEditingStudent, setIsEditingStudent] = useState(false);
  const [currentCourse, setCurrentCourse] = useState(null);
  const [isEditingCourse, setIsEditingCourse] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [teacherCourse, setTeacherCourse] = useState("");
  console.log("coursescoursescourses", courses)
  console.log('sdvsdsverg  TEACHER', typeof(teachers), teachers); 

  // Fetch students by course
  const handleListItemClick = async (_event, index) => {
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




  // Handle teacher selection change
  const handleChange = (event) => {
    const selectedTeacherUsername = event.target.value;
    const teacher = teachers.find(
      (t) => t.username === selectedTeacherUsername
    );
    if (teacher) {
      setSelectedTeacher(teacher);
      setTeacherCourse(teacher.course);
    } else {
      setTeacherCourse("");
    }
  };



  // const fetchTeachers = async () => {
  //   try {
  //     const response = await axios.get("http://127.0.0.1:8000/api/teacher");
  //     setTeachers(response.data.teachers);
  //   } catch (error) {
  //     console.error("Error fetching teachers:", error);
  //   }
  // };


  // const fetchCourses = async () => {
  //   try {
  //     const response = await axios.get("http://127.0.0.1:8000/api/courses"); // Adjust this to your actual API
  //     setCourses(response.data); // Assuming the API returns an array of courses
  //   } catch (error) {
  //     console.error("Error fetching courses:", error);
  //   }
  // };

  useEffect(() => {
    dispatch(fetchTeachersRequest());
    dispatch(fetchCoursesRequest());
  }, []);



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

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/students",
        newStudent
      );
      setStudents([...students, response.data]);
      handleCloseStudentDialog();
    } catch (error) {
      console.error("Error adding student:", error);
    }
  
  };


  const handleEditStudent = async () => {
    if (!currentStudent) return;

    try {
      await axios.put(
        `http://127.0.0.1:8000/api/students/${currentStudent.id}`,
        currentStudent
      );
      setStudents(
        students.map((student) =>
          student.id === currentStudent.id ? currentStudent : student
        )
      );
      handleCloseStudentDialog();
    } catch (error) {
      console.error("Error editing student:", error);
    }
  };

  const handleDeleteStudent = async (studentToDelete) => {
    try {
      await axios.delete(
        `http://127.0.0.1:8000/api/students/${studentToDelete.id}`
      );
      setStudents(
        students.filter((student) => student.id !== studentToDelete.id)
      );
    } catch (error) {
      console.error("Error deleting student:", error);
    }
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
////////////////////////////////////////////////////////////////////////////



  const handleAddCourse = async () => {
    if (!currentCourse || !currentCourse.name) return;

    dispatch(createCourseRequest(currentCourse));
    console.log('create course request',currentCourse );
    
    handleCloseCourseDialog();
    console.log('create course request' )


    // try {
    //   const response = await axios.post("http://127.0.0.1:8000/api/courses", {
    //     name: currentCourse.name,
    //   });
    //   console.log('create a course request 11111');
    //    setCourses([...courses, response.data]);
    //   const token = localStorage.getItem("token");
    //   console.log('create a course request 22222');


    //   const studentsResponse = await axios.get(
    //     "http://127.0.0.1:8000/api/studentlist",
    //     {
    //       params: { course: currentCourse.name },
    //       headers: { Authorization: `Bearer ${token}` },
    //     }
    //   );
    //   setStudents(studentsResponse.data);
    //   handleCloseCourseDialog();
    // } catch (error) {
    //   console.error("Error adding course:", error);
    // }
  };


////////////////////////////////////////////////////////////////////////////////////////////////////
  const handleEditCourse = async () => {
    if (!currentCourse) return;
     dispatch(updateCourseRequest(currentCourse));
     handleCloseCourseDialog();
     console.log('handlee edit cooruseeeeeeeeeee');
     
    // try {
    //   await axios.put(`http://127.0.0.1:8000/api/courses/${currentCourse.id}`, {
    //     name: currentCourse.name,
    //   });
    //   // setCourses(
    //   //   courses.map((course) =>
    //   //     course.id === currentCourse.id ? currentCourse : course
    //   //   )
    //   // );
    // handleCloseCourseDialog();
    // } catch (error) {
    //   console.error("Error editing course:", error);
    // }
  };

  const handleDeleteCourse = async (courseToDelete) => {
    try {
      await axios.delete(
        `http://127.0.0.1:8000/api/courses/${courseToDelete.id}`
      );
      setCourses(courses.filter((course) => course.id !== courseToDelete.id));
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  return (
    <>
      <div>
        <h1>college management </h1>
        <div>Dashboard</div>

        {/* Course List */}
        <Box
          sx={{
            maxWidth: 360,
            bgcolor: "background.paper",
            width: { xs: "90%", sm: "70%", md: "40%" },
            padding: { xs: "20px", md: "40px" },
            boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
            borderRadius: "8px",
            backgroundColor: "#fff",
          }}
        >
          <List component="nav">
            {courses.map((course, index) => (
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
          {/* Add Course Button */}
          <Button onClick={() => handleOpenCourseDialog(null, false)}>
            Add Course
          </Button>
        </Box>

        {/* Display students based on the selected course */}
        {selectedCourse && (
          <div>
            <h3>Students in {selectedCourse}</h3>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Course</TableCell>
                  <TableCell>Actions</TableCell>
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
                          onClick={() => handleOpenStudentDialog(student, true)}
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

      {/* Teacher Dropdown and Teacher Dashboard */}
      <div>
        <Box
          sx={{
            maxWidth: 360,
            bgcolor: "background.paper",
            width: { xs: "90%", sm: "70%", md: "40%" },
            padding: { xs: "20px", md: "40px" },
            boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
            borderRadius: "8px",
            backgroundColor: "#fff",
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
              {teachers.map((teacher) => (
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

        {/* Conditionally render TeacherDashboard only if teacherCourse is available */}
        {teacherCourse ? (
          <TeacherDashboard course={teacherCourse} />
        ) : (
          <p>Please select a teacher to see their course's student list.</p>
        )}
      </div>

      {/* Dialog for Adding/Editing Student */}
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
          <TextField
            margin="dense"
            label="Course"
            fullWidth
            variant="outlined"
            value={currentStudent ? currentStudent.course : ""}
            onChange={(e) =>
              setCurrentStudent({ ...currentStudent, course: e.target.value })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseStudentDialog}>Cancel</Button>
          <Button
            onClick={isEditingStudent ? handleEditStudent : handleAddStudent}
          >
            {isEditingStudent ? "Update" : "Add"}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Dialog for Adding/Editing Course */}
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
            {isEditingCourse ? "Update" : "Add"}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Dashboard;
