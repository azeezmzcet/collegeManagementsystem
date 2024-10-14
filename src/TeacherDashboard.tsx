// import React from 'react';
// import SeperateStudentList from './seperatestudentlist';


// function TeacherDashboard() {
//     const [course] = React.useState('B.Sc'); // You can retrieve this from login response

//     return (
//         <div>
//             <h1>Teacher Dashboard</h1>
//             {/* Pass the teacher's course to the SeperateStudentList component */}
//             <SeperateStudentList course={course} />
//         </div>
//     );
// }

// export default TeacherDashboard;


// import axios from "axios";
// import { useState } from "react";

// interface Student {
//   name: string;
//   course: string;
// }

// function TeacherDashboard() {
//     const [students, setStudents] = useState<Student[]>([]);
  
//     // Trying to fetch data here would lead to problems
//      const course = localStorage.getItem('course');
//     axios.get("http://127.0.0.1:8000/api/studentlist", {
//        params: { course }
//     }).then((response) => {
//       setStudents(response.data);
//     });
  
//     // Render happens immediately, before data is fetched
//     return (
//       <div>
//         <ol>
//           {students.map((student, index) => (
//             <li key={index}>
//               {student.name} - {student.course}
//             </li>
//           ))}
//         </ol>
//       </div>
//     );
//   }

// export default TeacherDashboard;
 


import axios from "axios";
import { useState, useEffect } from "react";

interface Student {
  name: string;
  course: string;
}

function TeacherDashboard() {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    // Function to fetch students
    const fetchStudents = async () => {
        console.log('studentlist1');
      try {
        console.log('studentlist2');
        // const course =localStorage.getItem('course');
        const response = await axios.get("http://127.0.0.1:8000/api/studentlist")
            // params:{course}
        
        console.log('/studentlist3');
        
        console.log('studentlist',response.data.value);
        setStudents(response.data);
        
         
      } catch (error) {
        console.error("Error fetching students", error);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div>
      <ol>
        {students.map((student, index) => (
          <li key={index}>
            {student.name} - {student.course}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default TeacherDashboard;
