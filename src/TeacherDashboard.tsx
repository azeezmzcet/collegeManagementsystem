// import axios from 'axios';
// import { useState, useEffect } from 'react';


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
//       {loading && <p>Loading daaa...</p>}
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




// TeacherDashboard.tsx
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStudentsRequest } from './course/actions'; // Import the action

function TeacherDashboard({ course }: TeacherDashboardProps) {
  const dispatch = useDispatch();
  const { students, loading, error } = useSelector((state: any) => state.teacherReducer); // Access the Redux state

  useEffect(() => {
    if (course) {
      dispatch(fetchStudentsRequest(course)); // Dispatch the action to fetch students
    }
  }, [course, dispatch]);

  return (
    <div>
      <h3>Students in {course}</h3>
      {loading && <p>Loading data...</p>}
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
