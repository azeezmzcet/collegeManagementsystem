// import Box from '@mui/material/Box';
// import List from '@mui/material/List';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
// import axios from 'axios';

// function Dashboard() {
//   const navigate = useNavigate();
//   const [name, setName] = useState('');
//   const [students, setStudents] = useState([]);
//   const [teachers, setTeachers] = useState([]);
//   const [selectedCourse, setSelectedCourse] = useState('');
//   const [selectedIndex, setSelectedIndex] = useState(-1);
//   const [courses, setCourses] = useState(['BBA', 'B.Sc', 'B.Com', 'B.Tech', 'MBA']);
//   const [openCourseDialog, setOpenCourseDialog] = useState(false);
//   const [openStudentDialog, setOpenStudentDialog] = useState(false);
//   const [currentCourse, setCurrentCourse] = useState('');
//   const [isEditingCourse, setIsEditingCourse] = useState(false);
//   const [currentStudent, setCurrentStudent] = useState(null);
//   const [isEditingStudent, setIsEditingStudent] = useState(false);

  

//   // Fetch students by course
//   const handleListItemClick = async (_event, index) => {
//     setSelectedIndex(index);
//     const course = courses[index];
//     setSelectedCourse(course);
//     console.log('Fetching students for course 0000:', course);

//     try {
//       const token = localStorage.getItem('token');
//       const response = await axios.get('http://127.0.0.1:8000/api/studentlist', { params: { course },headers: {
//         Authorization: `Bearer ${token}`,} });
//       console.log('Students fetched 111:',response.data);
//       setStudents(response.data);
//     } catch (error) {
//       console.error('Error fetching students 222:', error);
//     }
//   };




//   // Handle teacher selection change
//   const handleChange = (event) => {
//     setName(event.target.value);
//   };



//   // Handle creating a new teacher
//   const handleteacher = () => {
//     navigate('/create-teacher');
//   };

//   // Open dialog for adding/editing courses
//   // const handleOpenCourseDialog = (course = '', editing = false) => {
//   //   setCurrentCourse(course);
//   //   setIsEditingCourse(editing);
//   //   setOpenCourseDialog(true);
//   // };

//   // Open dialog for adding/editing students
//   const handleOpenStudentDialog = (student = null, editing = false) => {
//     setCurrentStudent(student);
//     setIsEditingStudent(editing);
//     setOpenStudentDialog(true);
//   };

//   // Close course dialog
//   const handleCloseCourseDialog = () => {
//     setOpenCourseDialog(false);
//     setCurrentCourse('');
//     setIsEditingCourse(false);
//   };

//   // Close student dialog
//   const handleCloseStudentDialog = () => {
//     setOpenStudentDialog(false);
//     setCurrentStudent(null);
//     setIsEditingStudent(false);
//   };

//   // Add a new course
//   const handleAddCourse = async () => {
//     if (!currentCourse) return;
    
//     try {
//       await axios.post('http://127.0.0.1:8000/api/courses');
//       setCourses([...courses, currentCourse]);
//       handleCloseCourseDialog();
//     } catch (error) {
//       console.error('Error adding course:', error);
//     }
//   };

//   // Add a new student
//   const handleAddStudent = async () => {
//     if (!currentStudent || !currentStudent.name || !currentStudent.course) return;

//     try {
//       const response = await axios.post('http://127.0.0.1:8000/api/students', currentStudent);
//       setStudents([...students, response.data]);
//       handleCloseStudentDialog();
//     } catch (error) {
//       console.error('Error adding student:', error);
//     }
//   };

//   // Edit a course
//   // const handleEditCourse = async () => {
//   //   if (!currentCourse) return;

//   //   try {
//   //     await axios.put(`http://127.0.0.1:8000/api/courses/${currentCourse}`, { name: currentCourse });
//   //     setCourses(courses.map((course) => (course === currentCourse ? currentCourse : course)));
//   //     handleCloseCourseDialog();
//   //   } catch (error) {
//   //     console.error('Error editing course:', error);
//   //   }
//   // };

//   // Edit a student
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

//   // Delete a course
//   // const handleDeleteCourse = async (courseToDelete) => {
//   //   try {
//   //     await axios.delete(`http://127.0.0.1:8000/api/courses/${courseToDelete}`);
//   //     setCourses(courses.filter((course) => course !== courseToDelete));
//   //   } catch (error) {
//   //     console.error('Error deleting course:', error);
//   //   }
//   // };

//   // Delete a student
//   const handleDeleteStudent = async (studentToDelete) => {
//     try {
//       await axios.delete(`http://127.0.0.1:8000/api/students/${studentToDelete.id}`);
//       setStudents(students.filter((student) => student.id !== studentToDelete.id));
//     } catch (error) {
//       console.error('Error deleting student:', error);
//     }
//   };

  

//   return (
//     <>
//       <div>
//         <h1>Mount Zion College of Engineering and Technology</h1>
//         <div>Dashboard</div>

//         {/* Course List */}
//         <Box sx={{ maxWidth: 360, bgcolor: 'background.paper', width: { xs: '90%', sm: '70', md: '40%' }, padding: { xs: '20px', md: '40px' }, boxShadow: '0px 4px 12px rgba(0,0,0,0.1)', borderRadius: '8px', backgroundColor: '#fff' }}>
//           <List component="nav">
//             {courses.map((course, index) => (
//               <ListItemButton
//                 key={course}
//                 selected={selectedIndex === index}
//                 onClick={(event) => handleListItemClick(event, index)}
//               >
//                 <ListItemText primary={course} />
//                 {/* <Button onClick={() => handleOpenCourseDialog(course, true)}>Edit</Button>
//                 <Button onClick={() => handleDeleteCourse(course)}>Delete</Button> */}
//               </ListItemButton>
//             ))}
//           </List>
//           {/* <Button onClick={() => handleOpenCourseDialog()}>Add Course</Button> */}
//         </Box>

//         {/* Display students based on the selected course */}
//         {selectedCourse && (
//           <div>
//             <h3>Students in {selectedCourse}</h3>
//             <ul>
//               {students.length > 0 ? (
//                 students.map((student) => (
//                   <li key={student.id}>
//                     {student.name} - {student.course}
//                     <Button onClick={() => handleOpenStudentDialog(student, true)}>Edit</Button>
//                     <Button onClick={() => handleDeleteStudent(student)}>Delete</Button>
//                   </li>
//                 ))
//               ) : (
//                 <p>No students found for {selectedCourse}</p>
//               )}
//             </ul>
//             <Button onClick={() => handleOpenStudentDialog({ name: '', course: selectedCourse }, false)}>Add Student</Button>
//           </div>
//         )}
//       </div>

//       {/* Teacher List and Add New Teacher */}
//       <div>
//         <Box sx={{ maxWidth: 360, bgcolor: 'background.paper', width: { xs: '90%', sm: '70', md: '40%' }, padding: { xs: '20px', md: '40px' }, boxShadow: '0px 4px 12px rgba(0,0,0,0.1)', borderRadius: '8px', backgroundColor: '#fff' }}>
//           <FormControl fullWidth>
//             <InputLabel id="teacher-select-label">Teacher Lists</InputLabel>
//             <Select labelId="teacher-select-label" id="teacher-select" value={name} label="Teacher Lists" onChange={handleChange}>
//               {teachers.map((teacher, index) => (
//                 <MenuItem key={index} value={teacher}>
//                   {teacher}
//                 </MenuItem>
//               ))}
//             </Select>
//           </FormControl>
//           <Button onClick={handleteacher}>Create Teacher</Button>
//         </Box>
//       </div>

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
//             value={currentCourse}
//             onChange={(e) => setCurrentCourse(e.target.value)}
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseCourseDialog}>Cancel</Button>
//           <Button onClick={isEditingCourse ? handleEditCourse : handleAddCourse}>{isEditingCourse ? 'Update' : 'Add'}</Button>
//         </DialogActions>
//       </Dialog>

//       {/* Dialog for Adding/Editing Student */}
//       <Dialog open={openStudentDialog} onClose={handleCloseStudentDialog}>
//         <DialogTitle>{isEditingStudent ? 'Edit Student' : 'Add Student'}</DialogTitle>
//         <DialogContent>
//           <TextField
//             autoFocus
//             margin="dense"
//             label="Student Name"
//             fullWidth
//             variant="outlined"
//             value={currentStudent ? currentStudent.name : ''}
//             onChange={(e) => setCurrentStudent({ ...currentStudent, name: e.target.value })}
//           />
//           <TextField
//             margin="dense"
//             label="Course"
//             fullWidth
//             variant="outlined"
//             value={currentStudent ? currentStudent.course : ''}
//             onChange={(e) => setCurrentStudent({ ...currentStudent, course: e.target.value })}
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseStudentDialog}>Cancel</Button>
//           <Button onClick={isEditingStudent ? handleEditStudent : handleAddStudent}>{isEditingStudent ? 'Update' : 'Add'}</Button>
//         </DialogActions>
//       </Dialog>
//     </>
//   );
// }

// export default Dashboard;





















// import React, { useState, useEffect } from 'react';
// import Box from '@mui/material/Box';
// import List from '@mui/material/List';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import TeacherDashboard from './TeacherDashboard';

// function Dashboard() {
//   const navigate = useNavigate();
//   const [name, setName] = useState('');
//   const [students, setStudents] = useState([]);
//   const [teachers, setTeachers] = useState([]); // Teacher state moved from TeacherDropdown
//   const [selectedTeacher, setSelectedTeacher] = useState(null); // Selected teacher object moved from TeacherDropdown
//   const [teacherCourse, setTeacherCourse] = useState(''); // Selected teacher's course moved from TeacherDropdown
//   const [selectedCourse, setSelectedCourse] = useState('');
//   const [selectedIndex, setSelectedIndex] = useState(-1);
//   const [courses, setCourses] = useState(['BBA', 'B.Sc', 'B.Com', 'B.Tech', 'MBA']);
//   const [openCourseDialog, setOpenCourseDialog] = useState(false);
//   const [openStudentDialog, setOpenStudentDialog] = useState(false);
//   const [currentCourse, setCurrentCourse] = useState('');
//   const [currentStudent, setCurrentStudent] = useState(null);
//   const [isEditingStudent, setIsEditingStudent] = useState(false);

//   // Fetch students by course
//   const handleListItemClick = async (_event, index) => {
//     setSelectedIndex(index);
//     const course = courses[index];
//     setSelectedCourse(course);

//     try {
//       const token = localStorage.getItem('token');
//       const response = await axios.get('http://127.0.0.1:8000/api/studentlist', {
//         params: { course },
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setStudents(response.data);
//     } catch (error) {
//       console.error('Error fetching students:', error);
//     }
//   };

//   // Teacher Dropdown logic (previously in TeacherDropdown component)
//   useEffect(() => {
//     const fetchTeachers = async () => {
//       try {
//         const response = await axios.get('http://127.0.0.1:8000/api/teacher');
//         setTeachers(response.data.teachers);
//       } catch (error) {
//         console.error('Error fetching teachers:', error);
//       }
//     };

//     fetchTeachers();
//   }, []);

//   const handleTeacherChange = (event) => {
//     const selectedTeacherUsername = event.target.value;
//     const teacher = teachers.find(t => t.username === selectedTeacherUsername);
//     setSelectedTeacher(teacher);
//     setTeacherCourse(teacher.course);
//   };

//   // Add a new student
//   const handleAddStudent = async () => {
//     if (!currentStudent || !currentStudent.name || !currentStudent.course) return;

//     try {
//       const response = await axios.post('http://127.0.0.1:8000/api/students', currentStudent);
//       setStudents([...students, response.data]);
//       handleCloseStudentDialog();
//     } catch (error) {
//       console.error('Error adding student:', error);
//     }
//   };

//   // Dialog handling and other student/course management logic remains unchanged.

//   return (
//     <>
//       <div>
//         <h1>Mount Zion College of Engineering and Technology</h1>
//         <div>Dashboard</div>

//         {/* Course List */}
//         <Box
//           sx={{
//             maxWidth: 360,
//             bgcolor: 'background.paper',
//             width: { xs: '90%', sm: '70', md: '40%' },
//             padding: { xs: '20px', md: '40px' },
//             boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
//             borderRadius: '8px',
//             backgroundColor: '#fff',
//           }}
//         >
//           <List component="nav">
//             {courses.map((course, index) => (
//               <ListItemButton
//                 key={course}
//                 selected={selectedIndex === index}
//                 onClick={(event) => handleListItemClick(event, index)}
//               >
//                 <ListItemText primary={course} />
//               </ListItemButton>
//             ))}
//           </List>
//         </Box>

//         {/* Student List */}
//         {selectedCourse && (
//           <div>
//             <h3>Students in {selectedCourse}</h3>
//             <ul>
//               {students.length > 0 ? (
//                 students.map((student) => (
//                   <li key={student.id}>
//                     {student.name} - {student.course}
//                   </li>
//                 ))
//               ) : (
//                 <p>No students found for {selectedCourse}</p>
//               )}
//             </ul>
//             <Button onClick={() => handleOpenStudentDialog({ name: '', course: selectedCourse }, false)}>Add Student</Button>
//           </div>
//         )}

//         {/* Teacher Dropdown */}
//         <Box
//           sx={{
//             maxWidth: 360,
//             bgcolor: 'background.paper',
//             width: { xs: '90%', sm: '70%', md: '40%' },
//             padding: { xs: '20px', md: '40px' },
//             boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
//             borderRadius: '8px',
//             backgroundColor: '#fff',
//           }}
//         >
//           <FormControl fullWidth>
//             <InputLabel id="teacher-select-label">Teacher Lists</InputLabel>
//             <Select
//               labelId="teacher-select-label"
//               id="teacher-select"
//               value={selectedTeacher?.username || ''}
//               label="Teacher Lists"
//               onChange={handleTeacherChange}
//             >
//               {teachers.map((teacher, index) => (
//                 <MenuItem key={index} value={teacher.username}>
//                   {teacher.username}
//                 </MenuItem>
//               ))}
//             </Select>
//           </FormControl>
//         </Box>

//         {/* Render TeacherDashboard if teacherCourse is selected */}
//         {teacherCourse ? (
//           <TeacherDashboard course={teacherCourse} key={teacherCourse} />
//         ) : (
//           <p>Please select a teacher to see their course's student list.</p>
//         )}
//       </div>
//     </>
//   );
// }

// export default Dashboard;





// import React, { useState, useEffect } from 'react';
// import { Box, List, ListItemButton, ListItemText, InputLabel, MenuItem, FormControl, Select, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import TeacherDashboard from './TeacherDashboard'; // Import TeacherDashboard

// function Dashboard() {
//   const navigate = useNavigate();
//   const [name, setName] = useState('');
//   const [students, setStudents] = useState([]);
//   const [teachers, setTeachers] = useState([]);
//   const [selectedCourse, setSelectedCourse] = useState('');
//   const [selectedIndex, setSelectedIndex] = useState(-1);
//   const [courses, setCourses] = useState(['BBA', 'B.Sc', 'B.Com', 'B.Tech', 'MBA']);
//   const [openCourseDialog, setOpenCourseDialog] = useState(false);
//   const [openStudentDialog, setOpenStudentDialog] = useState(false);
//   const [currentCourse, setCurrentCourse] = useState('');
//   const [isEditingCourse, setIsEditingCourse] = useState(false);
//   const [currentStudent, setCurrentStudent] = useState(null);
//   const [isEditingStudent, setIsEditingStudent] = useState(false);
//   const [selectedTeacher, setSelectedTeacher] = useState(null);
//   const [teacherCourse, setTeacherCourse] = useState('');

//   // Fetch students by course
//   const handleListItemClick = async (_event, index) => {
//     setSelectedIndex(index);
//     const course = courses[index];
//     setSelectedCourse(course);
//     console.log('Fetching students for course:', course);

//     try {
//       const token = localStorage.getItem('token');
//       const response = await axios.get('http://127.0.0.1:8000/api/studentlist', {  params: { course } , headers: { Authorization: `Bearer ${token}` } });
//       console.log('Students fetched:', response.data);
//       setStudents(response.data);
//     } catch (error) {
//       console.error('Error fetching students:', error);
//     }
//   };

//   // Handle teacher selection change
//   const handleChange = (event) => {
//     const selectedTeacherUsername = event.target.value;

//     // Find the selected teacher object from the teachers array
//     const teacher = teachers.find((t) => t.username === selectedTeacherUsername);

//     // Set the selected teacher and their course
//     if (teacher) {
//       setSelectedTeacher(teacher);
//       setTeacherCourse(teacher.course); // This should now be the correct course for the selected teacher

//       console.log("Selected Teacher:", teacher);
//       console.log("Selected Teacher Course:", teacher.course);
//   } else {
//       setTeacherCourse(''); // Reset if no teacher is found
//   }

//     console.log("Selected Teacher:", teacher);
//     console.log("Selected Teacher Course:", teacher?.course);
//   };

//   const fetchTeachers = async () => {
//     try {
//       const response = await axios.get('http://127.0.0.1:8000/api/teacher');
//       setTeachers(response.data.teachers);
//     } catch (error) {
//       console.error('Error fetching teachers:', error);
//     }
//   };

//   useEffect(() => {
//     fetchTeachers();
//   }, []);

//   // Handle creating a new teacher
//   const handleteacher = () => {
//     navigate('/create-teacher');
//   };

//   // Open dialog for adding/editing students
//   const handleOpenStudentDialog = (student = null, editing = false) => {
//     setCurrentStudent(student);
//     setIsEditingStudent(editing);
//     setOpenStudentDialog(true);
//   };

//   // Close student dialog
//   const handleCloseStudentDialog = () => {
//     setOpenStudentDialog(false);
//     setCurrentStudent(null);
//     setIsEditingStudent(false);
//   };

//   // Add a new student
//   const handleAddStudent = async () => {
//     if (!currentStudent || !currentStudent.name || !currentStudent.course) return;

//     try {
//       const response = await axios.post('http://127.0.0.1:8000/api/students', currentStudent);
//       setStudents([...students, response.data]);
//       handleCloseStudentDialog();
//     } catch (error) {
//       console.error('Error adding student:', error);
//     }
//   };

//   // Edit a student
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

//   // Delete a student
//   const handleDeleteStudent = async (studentToDelete) => {
//     try {
//       await axios.delete(`http://127.0.0.1:8000/api/students/${studentToDelete.id}`);
//       setStudents(students.filter((student) => student.id !== studentToDelete.id));
//     } catch (error) {
//       console.error('Error deleting student:', error);
//     }
//   };

//   return (
//     <>
//       <div>
//         <h1>Mount Zion College of Engineering and Technology</h1>
//         <div>Dashboard</div>

//         {/* Course List */}
//         <Box
//           sx={{
//             maxWidth: 360,
//             bgcolor: 'background.paper',
//             width: { xs: '90%', sm: '70%', md: '40%' },
//             padding: { xs: '20px', md: '40px' },
//             boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
//             borderRadius: '8px',
//             backgroundColor: '#fff',
//           }}
//         >
//           <List component="nav">
//             {courses.map((course, index) => (
//               <ListItemButton key={course} selected={selectedIndex === index} onClick={(event) => handleListItemClick(event, index)}>
//                 <ListItemText primary={course} />
//               </ListItemButton>
//             ))}
//           </List>
//         </Box>

//         {/* Display students based on the selected course */}
//         {selectedCourse && (
//           <div>
//             <h3>Students in {selectedCourse}</h3>
//             <ul>
//               {students.length > 0 ? (
//                 students.map((student) => (
//                   <li key={student.id}>
//                     {student.name} - {student.course}
//                     <Button onClick={() => handleOpenStudentDialog(student, true)}>Edit</Button>
//                     <Button onClick={() => handleDeleteStudent(student)}>Delete</Button>
//                   </li>
//                 ))
//               ) : (
//                 <p>No students found for {selectedCourse}</p>
//               )}
//             </ul>
//             <Button onClick={() => handleOpenStudentDialog({ name: '', course: selectedCourse }, false)}>Add Student</Button>
//           </div>
//         )}
//       </div>

//       {/* Teacher Dropdown and Teacher Dashboard */}
//       <div>
//         <Box
//           sx={{
//             maxWidth: 360,
//             bgcolor: 'background.paper',
//             width: { xs: '90%', sm: '70%', md: '40%' },
//             padding: { xs: '20px', md: '40px' },
//             boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
//             borderRadius: '8px',
//             backgroundColor: '#fff',
//           }}
//         >
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
//           <Button onClick={handleteacher}>Create Teacher</Button>
//         </Box>

//         {/* Conditionally render TeacherDashboard only if teacherCourse is available */}
//         {teacherCourse ? <TeacherDashboard course={teacherCourse} key={teacherCourse} /> : <p>Please select a teacher to see their course's student list.</p>}
//       </div>

//       {/* Dialog for Adding/Editing Student */}
//       <Dialog open={openStudentDialog} onClose={handleCloseStudentDialog}>
//         <DialogTitle>{isEditingStudent ? 'Edit Student' : 'Add Student'}</DialogTitle>
//         <DialogContent>
//           <TextField
//             autoFocus
//             margin="dense"
//             label="Student Name"
//             fullWidth
//             variant="outlined"
//             value={currentStudent ? currentStudent.name : ''}
//             onChange={(e) => setCurrentStudent({ ...currentStudent, name: e.target.value })}
//           />
//           <TextField
//             margin="dense"
//             label="Course"
//             fullWidth
//             variant="outlined"
//             value={currentStudent ? currentStudent.course : ''}
//             onChange={(e) => setCurrentStudent({ ...currentStudent, course: e.target.value })}
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseStudentDialog}>Cancel</Button>
//           <Button onClick={isEditingStudent ? handleEditStudent : handleAddStudent}>{isEditingStudent ? 'Update' : 'Add'}</Button>
//         </DialogActions>
//       </Dialog>
//     </>
//   );
// }

// export default Dashboard;

//thi is final


// import React, { useState, useEffect } from 'react';
// import {
//   Box, List, ListItemButton, ListItemText, InputLabel, MenuItem, FormControl, Select, 
//   Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Table, TableHead, 
//   TableBody, TableRow, TableCell
// } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import TeacherDashboard from './TeacherDashboard'; // Import TeacherDashboard

// function Dashboard() {
//   const navigate = useNavigate();
//   const [students, setStudents] = useState([]);
//   const [teachers, setTeachers] = useState([]);
//   const [selectedCourse, setSelectedCourse] = useState('');
//   const [selectedIndex, setSelectedIndex] = useState(-1);
//   const [courses, setCourses] = useState(['BBA', 'B.Sc', 'B.Com', 'B.Tech', 'MBA']);
//   const [openStudentDialog, setOpenStudentDialog] = useState(false);
//   const [currentStudent, setCurrentStudent] = useState(null);
//   const [isEditingStudent, setIsEditingStudent] = useState(false);
//   const [selectedTeacher, setSelectedTeacher] = useState(null);
//   const [teacherCourse, setTeacherCourse] = useState('');

//   // Fetch students by course
//   const handleListItemClick = async (_event, index) => {
//     setSelectedIndex(index);
//     const course = courses[index];
//     setSelectedCourse(course);

//     try {
//       const token = localStorage.getItem('token');
//       const response = await axios.get('http://127.0.0.1:8000/api/studentlist', { 
//         params: { course }, 
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

//   useEffect(() => {
//     fetchTeachers();
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

//     try {
//       const response = await axios.post('http://127.0.0.1:8000/api/students', currentStudent);
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

//   return (
//     <>
//       <div>
//         <h1>Mount Zion College of Engineering and Technology</h1>
//         <div>Dashboard</div>

//         {/* Course List */}
//         <Box sx={{ maxWidth: 360, bgcolor: 'background.paper', width: { xs: '90%', sm: '70%', md: '40%' }, padding: { xs: '20px', md: '40px' }, boxShadow: '0px 4px 12px rgba(0,0,0,0.1)', borderRadius: '8px', backgroundColor: '#fff' }}>
//           <List component="nav">
//             {courses.map((course, index) => (
//               <ListItemButton key={course} selected={selectedIndex === index} onClick={(event) => handleListItemClick(event, index)}>
//                 <ListItemText primary={course} />
//               </ListItemButton>
//             ))}
//           </List>
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
//     </>
//   );
// }

// export default Dashboard;




import React, { useState, useEffect } from 'react';
import {
  Box, List, ListItemButton, ListItemText, InputLabel, MenuItem, FormControl, Select,
  Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Table, TableHead,
  TableBody, TableRow, TableCell
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import TeacherDashboard from './TeacherDashboard'; // Import TeacherDashboard

function Dashboard() {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [courses, setCourses] = useState([]);
  const [openStudentDialog, setOpenStudentDialog] = useState(false);
  const [openCourseDialog, setOpenCourseDialog] = useState(false);
  const [currentStudent, setCurrentStudent] = useState(null);
  const [isEditingStudent, setIsEditingStudent] = useState(false);
  const [currentCourse, setCurrentCourse] = useState(null);
  const [isEditingCourse, setIsEditingCourse] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [teacherCourse, setTeacherCourse] = useState('');

  // Fetch students by course
  const handleListItemClick = async (_event, index) => {
    setSelectedIndex(index);
    const course = courses[index];
    setSelectedCourse(course);

    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://127.0.0.1:8000/api/studentlist', {
        params: { course },
        headers: { Authorization: `Bearer ${token}` }
      });
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  // Handle teacher selection change
  const handleChange = (event) => {
    const selectedTeacherUsername = event.target.value;
    const teacher = teachers.find((t) => t.username === selectedTeacherUsername);
    if (teacher) {
      setSelectedTeacher(teacher);
      setTeacherCourse(teacher.course);
    } else {
      setTeacherCourse('');
    }
  };

  const fetchTeachers = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/teacher');
      setTeachers(response.data.teachers);
    } catch (error) {
      console.error('Error fetching teachers:', error);
    }
  };

  const fetchCourses = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/courses');
      setCourses(response.data.courses); // Adjust based on your API response structure
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  useEffect(() => {
    fetchTeachers();
    fetchCourses();
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
    if (!currentStudent || !currentStudent.name || !currentStudent.course) return;

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/students', currentStudent);
      setStudents([...students, response.data]);
      handleCloseStudentDialog();
    } catch (error) {
      console.error('Error adding student:', error);
    }
  };

  const handleEditStudent = async () => {
    if (!currentStudent) return;

    try {
      await axios.put(`http://127.0.0.1:8000/api/students/${currentStudent.id}`, currentStudent);
      setStudents(students.map((student) => (student.id === currentStudent.id ? currentStudent : student)));
      handleCloseStudentDialog();
    } catch (error) {
      console.error('Error editing student:', error);
    }
  };

  const handleDeleteStudent = async (studentToDelete) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/students/${studentToDelete.id}`);
      setStudents(students.filter((student) => student.id !== studentToDelete.id));
    } catch (error) {
      console.error('Error deleting student:', error);
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

  const handleAddCourse = async () => {
    if (!currentCourse || !currentCourse.name) return;

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/courses', { name: currentCourse });
      setCourses([...courses, response.data]);
      handleCloseCourseDialog();
    } catch (error) {
      console.error('Error adding course:', error);
    }
  };

  const handleEditCourse = async () => {
    if (!currentCourse) return;

    try {
      await axios.put(`http://127.0.0.1:8000/api/courses/${currentCourse.id}`, { name: currentCourse.name });
      setCourses(courses.map((course) => (course.id === currentCourse.id ? currentCourse : course)));
      handleCloseCourseDialog();
    } catch (error) {
      console.error('Error editing course:', error);
    }
  };

  const handleDeleteCourse = async (courseToDelete) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/courses/${courseToDelete.id}`);
      setCourses(courses.filter((course) => course.id !== courseToDelete.id));
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  };

  return (
    <>
      <div>
        <h1>Mount Zion College of Engineering and Technology</h1>
        <div>Dashboard</div>

        {/* Course List */}
        <Box sx={{ maxWidth: 360, bgcolor: 'background.paper', width: { xs: '90%', sm: '70%', md: '40%' }, padding: { xs: '20px', md: '40px' }, boxShadow: '0px 4px 12px rgba(0,0,0,0.1)', borderRadius: '8px', backgroundColor: '#fff' }}>
          <List component="nav">
            {courses.map((course, index) => (
              <ListItemButton key={course.id} selected={selectedIndex === index} onClick={(event) => handleListItemClick(event, index)}>
                <ListItemText primary={course.name} />
                <Button onClick={(e) => { e.stopPropagation(); handleOpenCourseDialog(course, true); }}>Edit</Button>
                <Button onClick={(e) => { e.stopPropagation(); handleDeleteCourse(course); }}>Delete</Button>
              </ListItemButton>
            ))}
            <Button onClick={() => handleOpenCourseDialog({ name: '' }, false)}>Add Course</Button>
          </List>
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
                        <Button onClick={() => handleOpenStudentDialog(student, true)}>Edit</Button>
                        <Button onClick={() => handleDeleteStudent(student)}>Delete</Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={3}>No students found for {selectedCourse}</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
            <Button onClick={() => handleOpenStudentDialog({ name: '', course: selectedCourse }, false)}>Add Student</Button>
          </div>
        )}
      </div>

      {/* Teacher Dropdown and Teacher Dashboard */}
      <div>
        <Box sx={{ maxWidth: 360, bgcolor: 'background.paper', width: { xs: '90%', sm: '70%', md: '40%' }, padding: { xs: '20px', md: '40px' }, boxShadow: '0px 4px 12px rgba(0,0,0,0.1)', borderRadius: '8px', backgroundColor: '#fff' }}>
          <FormControl fullWidth>
            <InputLabel id="teacher-select-label">Teacher Lists</InputLabel>
            <Select labelId="teacher-select-label" id="teacher-select" value={selectedTeacher?.username || ''} label="Teacher Lists" onChange={handleChange}>
              {teachers.map((teacher, index) => (
                <MenuItem key={index} value={teacher.username}>
                  {teacher.username}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button onClick={() => navigate('/create-teacher')}>Create Teacher</Button>
        </Box>

        {/* Conditionally render TeacherDashboard only if teacherCourse is available */}
        {teacherCourse ? <TeacherDashboard course={teacherCourse} /> : <p>Please select a teacher to see their course's student list.</p>}
      </div>

      {/* Dialog for Adding/Editing Student */}
      <Dialog open={openStudentDialog} onClose={handleCloseStudentDialog}>
        <DialogTitle>{isEditingStudent ? 'Edit Student' : 'Add Student'}</DialogTitle>
        <DialogContent>
          <TextField autoFocus margin="dense" label="Student Name" fullWidth variant="outlined" value={currentStudent ? currentStudent.name : ''} onChange={(e) => setCurrentStudent({ ...currentStudent, name: e.target.value })} />
          <TextField margin="dense" label="Course" fullWidth variant="outlined" value={currentStudent ? currentStudent.course : ''} onChange={(e) => setCurrentStudent({ ...currentStudent, course: e.target.value })} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseStudentDialog}>Cancel</Button>
          <Button onClick={isEditingStudent ? handleEditStudent : handleAddStudent}>{isEditingStudent ? 'Update' : 'Add'}</Button>
        </DialogActions>
      </Dialog>

      {/* Dialog for Adding/Editing Course */}
      <Dialog open={openCourseDialog} onClose={handleCloseCourseDialog}>
        <DialogTitle>{isEditingCourse ? 'Edit Course' : 'Add Course'}</DialogTitle>
        <DialogContent>
          <TextField autoFocus margin="dense" label="Course Name" fullWidth variant="outlined" value={currentCourse ? currentCourse.name : ''} onChange={(e) => setCurrentCourse({ ...currentCourse, name: e.target.value })} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseCourseDialog}>Cancel</Button>
          <Button onClick={isEditingCourse ? handleEditCourse : handleAddCourse}>{isEditingCourse ? 'Update' : 'Add'}</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Dashboard;
