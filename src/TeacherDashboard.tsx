import axios from 'axios';
import { useState, useEffect } from 'react';

interface Student {
  name: string;
  course: string;
}

interface TeacherDashboardProps {
  course: string; // Receive the selected teacher's course as a prop
}

function TeacherDashboard({ course }: TeacherDashboardProps) {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStudents = async () => {
      setLoading(true);
      setError(null);

      try {
        const token = localStorage.getItem('Token');
        

        // Fetch students for the selected teacher's course
        const response = await axios.get('http://127.0.0.1:8000/api/studentlist', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: { course }, // Send the course as a query parameter
        });

        setStudents(response.data);
      } catch (error) {
        console.error('Error fetching students:', error);
        setError('Failed to fetch students.');
      } finally {
        setLoading(false);
      }
    };

    if (course) {
      fetchStudents();
    }
  }, [course]); // Refetch students whenever the course changes

  return (
    <div>
      <h3>Students in {course}</h3>
      {loading && <p>Loading daaa...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ol>
        {students.length > 0 ? (
          students.map((student, index) => (
            <li key={index}>
              {student.name} - {student.course}
            </li>
          ))
        ) : (
          <p>No students found for this course.</p>
        )}
      </ol>
    </div>
  );
}

export default TeacherDashboard;



//with css
// import axios from 'axios';
// import { useState, useEffect } from 'react';
// import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';

// interface Student {
//   name: string;
//   course: string;
// }

// interface TeacherDashboardProps {
//   course: string; // Receive the selected teacher's course as a prop
// }

// function TeacherDashboard({ course }: TeacherDashboardProps) {
//   const [students, setStudents] = useState<Student[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchStudents = async () => {
//       setLoading(true);
//       setError(null);

//       try {
//         const token = localStorage.getItem('Token');

//         // Fetch students for the selected teacher's course
//         const response = await axios.get('http://127.0.0.1:8000/api/studentlist', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//           params: { course }, // Send the course as a query parameter
//         });

//         setStudents(response.data);
//       } catch (error) {
//         console.error('Error fetching students:', error);
//         setError('Failed to fetch students.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (course) {
//       fetchStudents();
//     }
//   }, [course]); // Refetch students whenever the course changes

//   return (
//     <div>
//       <h3>Students in {course}</h3>
//       {loading && <p>Loading data...</p>}
//       {error && <p style={{ color: 'red' }}>{error}</p>}
      
//       {students.length > 0 ? (
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Name</TableCell>
//               <TableCell>Course</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {students.map((student, index) => (
//               <TableRow key={index}>
//                 <TableCell>{student.name}</TableCell>
//                 <TableCell>{student.course}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       ) : (
//         !loading && <p>No students found for this course.</p>
//       )}
//     </div>
//   );
// }

// export default TeacherDashboard;


















































































// // import React from 'react';
// // import SeperateStudentList from './seperatestudentlist';


// // function TeacherDashboard() {
// //     const [course] = React.useState('B.Sc'); // You can retrieve this from login response

// //     return (
// //         <div>
// //             <h1>Teacher Dashboard</h1>
// //             {/* Pass the teacher's course to the SeperateStudentList component */}
// //             <SeperateStudentList course={course} />
// //         </div>
// //     );
// // }

// // export default TeacherDashboard;


// // import axios from "axios";
// // import { useState } from "react";

// // interface Student {
// //   name: string;
// //   course: string;
// // }

// // function TeacherDashboard() {
// //     const [students, setStudents] = useState<Student[]>([]);
  
// //     // Trying to fetch data here would lead to problems
// //      const course = localStorage.getItem('course');
// //     axios.get("http://127.0.0.1:8000/api/studentlist", {
// //        params: { course }
// //     }).then((response) => {
// //       setStudents(response.data);
// //     });
  
// //     // Render happens immediately, before data is fetched
// //     return (
// //       <div>
// //         <ol>
// //           {students.map((student, index) => (
// //             <li key={index}>
// //               {student.name} - {student.course}
// //             </li>
// //           ))}
// //         </ol>
// //       </div>
// //     );
// //   }

// // export default TeacherDashboard;
 


// import axios from "axios";
// import { useState, useEffect } from "react";

// interface Student {
//   name: string;
//   course: string;
// }

// function TeacherDashboard() {
//   const [students, setStudents] = useState<Student[]>([]);

//   useEffect(() => {
//     // Function to fetch students
//     const fetchStudents = async () => {
//         console.log('studentlist1');
//       try {
//         console.log('studentlist2');
//         // const course =localStorage.getItem('course');
//         const response = await axios.get("http://127.0.0.1:8000/api/students")
//             // params:{course}
        
//         console.log('/studentlist3');
        
//         console.log('studentlist',response.data.value);
//         setStudents(response.data);
        
         
//       } catch (error) {
//         console.error("Error fetching students", error);
//       }
//     };

//     fetchStudents();
//   }, []);

//   return (
//     <div>
//       <ol>
//         {students.map((student, index) => (
//           <li key={index}>
//             {student.name} - {student.course}
//           </li>
//         ))}
//       </ol>
//     </div>
//   );
// }

// export default TeacherDashboard;






// import axios from "axios";
// import { useState, useEffect } from "react";

// interface Student {
//   name: string;
//   course: string;
// }

// function TeacherDashboard() {
//   const [students, setStudents] = useState<Student[]>([]);
//   const teacherCourse = localStorage.getItem('course'); // Assuming teacher's course is stored on login

//   useEffect(() => {
//     const fetchStudents = async () => {
//       try {
//         const course = localStorage.getItem('teacherCourse');
//         // Fetch students based on the teacher's course
//         const response = await axios.get("http://127.0.0.1:8000/api/students-by-course", {
//             headers: {
//                 Authorization: `Bearer ${localStorage.getItem('authToken')}`, // Include the token for authentication
//               },
//          params: { course }
          
//         });
        
//         setStudents(response.data);
//       } catch (error) {
//         console.error("Error fetching students", error);
//       }
//     };

//     fetchStudents();
//   }, [teacherCourse]);

//   return (
//     <div>
//       <h3>Students in {teacherCourse}</h3>
//       <ol>
//         {students.length > 0 ? (
//           students.map((student, index) => (
//             <li key={index}>
//               {student.name} - {student.course}
//             </li>
//           ))
//         ) : (
//           <p>No students found for this course.</p>
//         )}
//       </ol>
//     </div>
//   );
// }

// export default TeacherDashboard;



















// import axios from "axios";
// import { useState, useEffect } from "react";

// interface Student {
//   name: string;
//   course: string;
// }

// function TeacherDashboard() {
//   const [students, setStudents] = useState<Student[]>([]);
//   const [loading, setLoading] = useState<boolean>(true); // Loading state
//   const [error, setError] = useState<string | null>(null); // Error state
//   const teacherCourse = localStorage.getItem('course'); // Assuming the teacher's course is stored on login

//   useEffect(() => {
//     const fetchStudents = async () => {
//       setLoading(true); // Set loading to true before fetching data
//       setError(null); // Reset error state

//       try {
//         const token = localStorage.getItem('authToken');
        
//         const course = localStorage.getItem('course');
//         // Fetch students based on the teacher's course

//         if (!course) {
//             console.error("No course found in localStorage");
//             return;
//           }

//         const response = await axios.get("http://127.0.0.1:8000/api/studentlist", {
//           headers: {
//             Authorization: `Bearer ${token}`, // Include the token for authentication
//           },
//           params: { course }
//         });

//         setStudents(response.data);
//       } catch (error) {
//         console.error("Error fetching students", error);
//         setError("Failed to fetch students."); // Set error message
//       } finally {
//         setLoading(false); // Set loading to false after fetching
//       }
//     };

//     fetchStudents();
//   }, [teacherCourse]);

//   return (
//     <div>
//       <h3>Students in {teacherCourse}</h3>
//       {loading && <p>Loading...</p>} {/* Show loading message */}
//       {error && <p style={{ color: 'red' }}>{error}</p>} {/* Show error message */}
//       <ol>
//         {students.length > 0 ? (
//           students.map((student, index) => (
//             <li key={index}>
//               {student.name} - {student.course}
//             </li>
//           ))
//         ) : (
//           <p>No students found for this course.</p>
//         )}
//       </ol>
//     </div>
//   );
// }

// export default TeacherDashboard;










// import axios from "axios";
// import { useState, useEffect } from "react";

// interface Student {
//   name: string;
//   course: string;
// }

// function TeacherDashboard() {
//   const [students, setStudents] = useState<Student[]>([]); // Students state
//   const [loading, setLoading] = useState<boolean>(true); // Loading state
//   const [error, setError] = useState<string | null>(null); // Error state
  
//   const teacherCourse = localStorage.getItem('course'); // Fetch teacher's course from localStorage

//   useEffect(() => {
//     const fetchStudents = async () => {
//       setLoading(true); // Show loading indicator
//       setError(null); // Reset any previous errors

//       try {
//         const token = localStorage.getItem('authToken'); // Get token from localStorage

//         if (!token) {
//           setError('Authentication token is missing. Please log in again.');
//           return; // Exit if no token is found
//         }

//         if (!teacherCourse) {
//           console.error("No course found in localStorage");
//           return;
//         }

//         // Fetch students for the specific teacher's course
//         const response = await axios.get("http://127.0.0.1:8000/api/studentlist", {
//           headers: {
//             Authorization: `Bearer ${token}`, // Send token in the request headers
//           },
//           params: { course: teacherCourse } // Send teacher's course as a parameter
//         });

//         setStudents(response.data); // Set the fetched students in the state
//       } catch (error) {
//         console.error("Error fetching students", error);
//         setError("Failed to fetch students."); // Show error if fetching fails
//       } finally {
//         setLoading(false); // Hide loading indicator
//       }
//     };

//     fetchStudents(); // Trigger the function when component mounts
//   }, [teacherCourse]);

//   return (
//     <div>
//       <h3>Students in {teacherCourse}</h3>
//       {loading && <p>Loading...</p>} {/* Show loading message */}
//       {error && <p style={{ color: 'red' }}>{error}</p>} {/* Show error message if any */}
//       <ol>
//         {students.length > 0 ? (
//           students.map((student, index) => (
//             <li key={index}>
//               {student.name} - {student.course}
//             </li>
//           ))
//         ) : (
//           <p>No students found for this course.</p> // Handle case when no students are found
//         )}
//       </ol>
//     </div>
//   );
// }

// export default TeacherDashboard;












//teacher dasboard student course list   oooooooooooooook


// import axios from "axios";
// import { useState, useEffect } from "react";

// interface Student {
//   name: string;
//   course: string;
// }

// function TeacherDashboard() {
//   const [students, setStudents] = useState<Student[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   // Get teacher's course from localStorage
//   const teacherCourse = localStorage.getItem('teacherCourse');

//   useEffect(() => {
//     const fetchStudents = async () => {
//       setLoading(true);
//       setError(null);

//       try {
//         // Get the token for authorization
//         const token = localStorage.getItem('Token');

//         if (!teacherCourse) {
//           console.error("No course found in localStorage");
//           return;
//         }

//         // Fetch students based on the teacher's course
//         const response = await axios.get("http://127.0.0.1:8000/api/studentlist", {
//           headers: {
//             Authorization: `Bearer ${token}`, // Pass token for authentication
//           },
//           params: { course: teacherCourse } // Send course as a query param
//         });

//         setStudents(response.data);
//       } catch (error) {
//         console.error("Error fetching students", error);
//         setError("Failed to fetch students.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchStudents();
//   }, [teacherCourse]);

//   return (
//     <div>
//       <h3>Students in {teacherCourse}</h3>
//       {loading && <p>Loading...</p>}
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <ol>
//         {students.length > 0 ? (
//           students.map((student, index) => (
//             <li key={index}>
//               {student.name} - {student.course}
//             </li>
//           ))
//         ) : (
//           <p>No students found for this course.</p>
//         )}
//       </ol>
//     </div>
//   );
// }

// export default TeacherDashboard;









