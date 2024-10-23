

import {
  useState,
  useEffect,
} from "react";
import { fetchStudentsRequest } from "./course/actions";
import { useDispatch, useSelector } from "react-redux";
import { selectStudents } from "./course/selectors";
import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";



interface TeacherDashboardProps {
  course?: string;
  courseType?: string; // Receive the selected teacher's course as a prop
  showlogut?:boolean;
}

function TeacherDashboard({ course , showlogut=true }: TeacherDashboardProps) {

  const [error] = useState<string | null>(null);
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const students = useSelector(selectStudents);
  console.log("akjsdkjnasdkjn")
  

  useEffect(() => {
    if (course) { // teachercourse
      dispatch(fetchStudentsRequest({ course }));
    } else {
      const course = localStorage.getItem("course");
      dispatch(fetchStudentsRequest({ course }));
    }
  }, [course]);



  const handlelogout=()=>{
    navigate('/')
    localStorage.clear();
    console.log('storage clear');
 
  }



  return (
    <div style={{backgroundColor:'black'}}>
      {showlogut && (
      <Button onClick={handlelogout} variant="contained" style={{position:"absolute" ,top:'45px',right:'180px'}}>LOGOUT</Button>
      )}
      <Box>
       
      <Typography variant="h4" gutterBottom   color="white">
        Student List
      </Typography>
      
        
      {error && <Typography color="error">{error}</Typography>}

      {students.length > 0 ? (

        <TableContainer component={Paper} sx={{ maxHeight: 550 }} >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="left" width={"100px"}><b>ID</b></TableCell>
                <TableCell align="left"><b>Name</b></TableCell>
                <TableCell align="left" ><b>Course</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {students.map((student: { id: string; name: string; course: string }) => (
                <TableRow key={student.id}>
                  <TableCell>{student.id}</TableCell>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.course}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Typography>No students found for this course.</Typography>
      )}
     </Box>
    </div>
  );
}

export default TeacherDashboard;
