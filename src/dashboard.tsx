import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import axios from 'axios';

function Dashboard() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);                                                                  
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // Handle course selection and fetch students
  const handleListItemClick = async (_event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
    setSelectedIndex(index);
    const course = ['BBA', 'B.Sc', 'B.Com', 'B.Tech','MBA'][index];
    setSelectedCourse(course);

    try {
      // Fetch students based on selected course
      const response = await axios.get('http://127.0.0.1:8000/api/studentlist', { params: { course } });
      setStudents(response.data); // Store students in state
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  // Handle teacher selection change
  const handleChange = (event: SelectChangeEvent) => {
    setName(event.target.value as string);
  };

  // Handle creating a new teacher
  const handleteacher=()=>{
    navigate('/create-teacher')
}


  return (
    <>
      <div>
        <h1>Mount Zion College of Engineering and Technology</h1>
        <div>Dashboard</div>

        {/* Course List */}
        <Box
          sx={{
            maxWidth: 360,
            bgcolor: 'background.paper',
            width: { xs: '90%', sm: '70', md: '40%' },
            padding: { xs: '20px', md: '40px' },
            boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
            borderRadius: '8px',
            backgroundColor: '#fff',
          }}
        >
          <List component="nav">
            {['BBA', 'B.Sc', 'B.Com', 'B.Tech','MBA'].map((course, index) => (
              <ListItemButton
                key={course}
                selected={selectedIndex === index}
                onClick={(event) => handleListItemClick(event, index)}
              >
                <ListItemText primary={course} />
              </ListItemButton>
            ))}
          </List>
        </Box>

        {/* Display students based on the selected course */}
        {selectedCourse && (
          <div>
            <h3>Students in {selectedCourse}</h3>
            <ul>
              {students.length > 0 ? (
                students.map((student) => <li key={student.id}>{student.name} - {student.course}</li>)
              ) : (
                <p>No students found for {selectedCourse}</p>
              )}
            </ul>
          </div>
        )}
      </div>

      {/* Teacher List and Add New Teacher */}
      <div>
        <Box
          sx={{
            maxWidth: 360,
            bgcolor: 'background.paper',
            width: { xs: '90%', sm: '70', md: '40%' },
            padding: { xs: '20px', md: '40px' },
            boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
            borderRadius: '8px',
            backgroundColor: '#fff',
          }}
        >
          <FormControl fullWidth>
            <InputLabel id="teacher-select-label">Teacher Lists</InputLabel>
            <Select
              labelId="teacher-select-label"
              id="teacher-select"
              value={name}
              label="Teacher Lists"
              onChange={handleChange}
            >
              {teachers.map((teacher, index) => (
                <MenuItem key={index} value={teacher}>
                  {teacher}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Button onClick={handleteacher}>Create Teacher</Button>
        </Box>
      </div>
    </>
  );
}

export default Dashboard;






















