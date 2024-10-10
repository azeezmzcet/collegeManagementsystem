// import axios from "axios";
// import { useState, useEffect } from "react";
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

// function SeperateStudentList({ course  }) {
//     const [students, setStudents] = useState([]);
//     const [error, setError] = useState('');

//     useEffect(() => {
//         // Fetch students once the component is mounted
//         if (course) {
//             axios.get('http://127.0.0.1:8000/api/studentlists', {
//                 params: { course }  // Pass the course as a query parameter
//             })
//             .then(response => {
//                 if (response.data) {
//                     setStudents(response.data);  // Set the student data
//                 } else {
//                     setError('No students found for this course.');
//                 }
//             })
//             .catch(error => {
//                 setError('Error fetching students.');
//             });
//         }
//     }, [course]);

//     return (
//         <div>
//             {error && <p>{error}</p>}
//             <TableContainer component={Paper}>
//                 <Table sx={{ minWidth: 650 }} aria-label="student table">
//                     <TableHead>
//                         <TableRow>
//                             <TableCell>Student Name</TableCell>
//                             <TableCell align="right">Name</TableCell>
//                             <TableCell align="right">Course</TableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {students.map((studentlist, index) => (
//                             <TableRow key={index}>
//                                 <TableCell component="th" scope="row">
//                                     {studentlist.name}
//                                 </TableCell>
//                                 <TableCell align="right">{studentlist.course}</TableCell>
//                                 {/* <TableCell align="right">{student.email}</TableCell> */}
//                             </TableRow>
//                         ))}
//                     </TableBody>
//                 </Table>
//             </TableContainer>
//         </div>
//     );
// }

// export default SeperateStudentList;
