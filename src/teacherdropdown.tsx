
// import React, { useEffect, useState } from 'react';
// import { Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
// import axios from 'axios';
// import TeacherDashboard from './TeacherDashboard'; // Import TeacherDashboard to display students

// const TeacherDropdown = () => {
//   const [teachers, setTeachers] = useState([]); // Store teachers list
//   const [selectedTeacher, setSelectedTeacher] = useState(null); // Store selected teacher object
//   const [teacherCourse, setTeacherCourse] = useState(''); // Store selected teacher's course

//   useEffect(() => {
//     const fetchTeachers = async () => {
//       try {
//         const response = await axios.get('http://127.0.0.1:8000/api/teacher');
//         setTeachers(response.data.teachers); // Set teachers data from API
//       } catch (error) {
//         console.error('Error fetching teachers:', error);
//       }
//     };

//     fetchTeachers();
//   }, []);

//   const handleChange = (event: { target: { value: any; }; }) => {
//     const selectedTeacherUsername = event.target.value;

//     // Find the selected teacher object from the teachers array
//     const teacher = teachers.find(t => t.username === selectedTeacherUsername);

//     // Set the selected teacher and their course
//     setSelectedTeacher(teacher);
//     setTeacherCourse(teacher.course); // Assuming "course" is a property of the teacher object

//     // Debugging log to ensure selected teacher and course
//     console.log("Selected Teacher:", teacher);
//     console.log("Selected Teacher Course:", teacher?.course);
//   };

//   return (
//     <div>
//       <Box 
//         sx={{ 
//           maxWidth: 360, 
//           bgcolor: 'background.paper', 
//           width: { xs: '90%', sm: '70%', md: '40%' }, 
//           padding: { xs: '20px', md: '40px' }, 
//           boxShadow: '0px 4px 12px rgba(0,0,0,0.1)', 
//           borderRadius: '8px', 
//           backgroundColor: '#fff' 
//         }}
//       >
//         <FormControl fullWidth>
//           <InputLabel id="teacher-select-label">Teacher Lists</InputLabel>
//           <Select 
//             labelId="teacher-select-label" 
//             id="teacher-select" 
//             value={selectedTeacher?.username || ''} 
//             label="Teacher Lists" 
//             onChange={handleChange}
//           >
//             {teachers.map((teacher, index) => (
//               <MenuItem key={index} value={teacher.username}>
//                 {teacher.username} {/* Display the teacher's username */}
//               </MenuItem>
//             ))}
//           </Select>
//         </FormControl>
//       </Box>

//       {/* Conditionally render TeacherDashboard only if teacherCourse is available */}
//       {teacherCourse ? (
//         <TeacherDashboard course={teacherCourse} key={teacherCourse} /> // Add key to force re-render
//       ) : (
//         <p>Please select a teacher to see their course's student list.</p>
//       )}
//     </div>
//   );
// };

// export default TeacherDropdown;










































// import React, { useState, useEffect } from 'react';
// import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
// import axios from 'axios';

// function TeachersDropdown() {
//   const [teachers, setTeachers] = useState<string[]>([]); // State to store the list of teachers
//   const [name, setName] = useState(''); // State to store the selected teacher

//   // Fetch teacher list from API
//   useEffect(() => {
//     axios.get('http://127.0.0.1:8000/api/teacher')
//       .then(response => {
//         const teacherUsernames = response.data.teachers.map((teacher: any) => teacher.username); // Extract only usernames
//         setTeachers(teacherUsernames); // Set the teacher usernames in the state
//       })
//       .catch(error => {
//         console.error('Error fetching teachers:', error);
//       });
//   }, []);

//   // Handle selection change
//   const handleChange = (event: SelectChangeEvent) => {
//     setName(event.target.value as string);
//   };

//   return (
//     <Box sx={{ width: 300, margin: '20px auto' }}>
//       <Typography variant='h6'>Select a Teacher</Typography>
//       <FormControl fullWidth>
//         <InputLabel id="teacher-select-label">Teacher Lists</InputLabel>
//         <Select
//           labelId="teacher-select-label"
//           id="teacher-select"
//           value={name}
//           label="Teacher Lists"
//           onChange={handleChange}
//         >
//           {teachers.map((teacher, index) => (
//             <MenuItem key={index} value={teacher}>
//               {teacher}
//             </MenuItem>
//           ))}
//         </Select>
//       </FormControl>
//       {name && <Typography variant='body1' sx={{ marginTop: '20px' }}>Selected Teacher: {name}</Typography>}
//     </Box>
//   );
// }

// export default TeachersDropdown;




/////////////////////////////////////////////


// import React, { useEffect, useState } from 'react';
// import { Box, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';
// import axios from 'axios';

// const TeacherDropdown = () => {
//     const [teachers, setTeachers] = useState([]);
//     const [name, setName] = useState('');

//     useEffect(() => {
//         const fetchTeachers = async () => {
//             try {
//                 const response = await axios.get('http://127.0.0.1:8000/api/teacher'); // Adjust the API endpoint as needed  
//                 setTeachers(response.data.teachers);
//                 console.log('showing 2',response.data.teachers);
//                  // Make sure this matches your API response structure
//             } catch (error) {
//                 console.error('Error fetching teachers:', error);
//             }
//         };

//         fetchTeachers();
//     }, []);

//     const handleChange = (event) => {
//         setName(event.target.value);
//     };

//     const handleteacher = () => {
//         // Logic to handle creating a teacher
//         console.log('Creating teacher:', name);
//     };
    

//     return (
//         <div>
//             <Box 
//                 sx={{ 
//                     maxWidth: 360, 
//                     bgcolor: 'background.paper', 
//                     width: { xs: '90%', sm: '70%', md: '40%' }, 
//                     padding: { xs: '20px', md: '40px' }, 
//                     boxShadow: '0px 4px 12px rgba(0,0,0,0.1)', 
//                     borderRadius: '8px', 
//                     backgroundColor: '#fff' 
//                 }}
//             >
//                 <FormControl fullWidth>
//                     <InputLabel id="teacher-select-label">Teacher Lists</InputLabel>
//                     <Select 
//                         labelId="teacher-select-label" 
//                         id="teacher-select" 
//                         value={name} 
//                         label="Teacher Lists" 
//                         onChange={handleChange}
//                     >
//                         {teachers.map((teacher, index) => (
//                             <MenuItem key={index} value={teacher.username}> {/* Use the appropriate property for value */}
//                                 {teacher.username} {/* Display the appropriate property */}
//                             </MenuItem>
//                         ))}
//                     </Select>
//                 </FormControl>
//                 <Button onClick={handleteacher}>Create Teacher</Button>
//             </Box>
//         </div>
//     );
// };

// export default TeacherDropdown;



// import React, { useEffect, useState } from 'react';
// import { Box, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';
// import axios from 'axios';
// import TeacherDashboard from './TeacherDashboard'; // Import TeacherDashboard to display students

// const TeacherDropdown = () => {
//   const [teachers, setTeachers] = useState([]); // Store teachers list
//   const [selectedTeacher, setSelectedTeacher] = useState(null); // Store selected teacher object
//   const [teacherCourse, setTeacherCourse] = useState(''); // Store selected teacher's course

//   useEffect(() => {
//     const fetchTeachers = async () => {
//       try {
//         const response = await axios.get('http://127.0.0.1:8000/api/teacher');
//         setTeachers(response.data.teachers); // Set teachers data from API
//       } catch (error) {
//         console.error('Error fetching teachers:', error);
//       }
//     };

//     fetchTeachers();
//   }, []);

//   const handleChange = (event) => {
//     const selectedTeacherUsername = event.target.value;

//     // Find the selected teacher object from the teachers array
//     const teacher = teachers.find(t => t.username === selectedTeacherUsername);
    
//     // Set the selected teacher and their course
//     setSelectedTeacher(teacher);
//     setTeacherCourse(teacher?.course); // Assuming "course" is a property of the teacher object
//   };

//   return (
//     <div>
//       <Box 
//         sx={{ 
//           maxWidth: 360, 
//           bgcolor: 'background.paper', 
//           width: { xs: '90%', sm: '70%', md: '40%' }, 
//           padding: { xs: '20px', md: '40px' }, 
//           boxShadow: '0px 4px 12px rgba(0,0,0,0.1)', 
//           borderRadius: '8px', 
//           backgroundColor: '#fff' 
//         }}
//       >
//         <FormControl fullWidth>
//           <InputLabel id="teacher-select-label">Teacher Lists</InputLabel>
//           <Select 
//             labelId="teacher-select-label" 
//             id="teacher-select" 
//             value={selectedTeacher?.username || ''} 
//             label="Teacher Lists" 
//             onChange={handleChange}
//           >
//             {teachers.map((teacher, index) => (
//               <MenuItem key={index} value={teacher.username}>
//                 {teacher.username} {/* Display the teacher's username */}
//               </MenuItem>
//             ))}
//           </Select>
//         </FormControl>
//       </Box>

//       {/* Pass the teacherCourse to the TeacherDashboard if a course is selected */}
//       {teacherCourse && <TeacherDashboard course={teacherCourse} />}
//     </div>
//   );
// };

// export default TeacherDropdown;


/////


