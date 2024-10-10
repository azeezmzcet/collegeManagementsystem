import { Box, Button, Grid2, TextField, Typography } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateTeacher() {
    const [list, setList] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const [error, setError] = useState('');
    const navigate = useNavigate();

    // const handleLogin = () => {
    //     axios.post('http://127.0.0.1:8000/api/login', { username, password })
    //         .then(response => {
    //             if (response.data.tokenName) {
    //                 console.log('Teacher login successful', response.data);
    //                 localStorage.setItem('Token', response.data.tokenName);
    //                 navigate('/dashboard'); // Assuming teachers have a different dashboard
    //             } else {
    //                 setError('Login failed, no token returned');
    //             }
    //         })
    //         .catch((error) => {
    //             if (error.response) {
    //                 setError(error.response.data.message); // Handle error from the backend
    //             } else {
    //                 setError('An unexpected error occurred.');
    //                 console.log('error', error);
    //             }
    //         });
    // }

    const handleChange = (event: SelectChangeEvent) => {
        setList(event.target.value as string);
    };

    const handleCreateTeacher = () => {
        // Implement the logic to create a teacher
        // This could be an API call to your backend
        console.log("Creating teacher with username:", username, "and course:", list);
        //Example API call (you'll need to implement this)
        axios.post('http://127.0.0.1:8000/api/create-teacher', { username, password, course: list })
            .then(response => {
                console.log("Teacher created:", response.data);
                navigate('/dashboard');
            })
            .catch(error => {
                console.log("Error creating teacher:", error);
            });
    };

    return (
        <div>
            <Box>
                <Grid2 container spacing={2} sx={{
                    width: { xs: '90%', sm: '70', md: '40%' },
                    padding: { xs: '20px', md: '40px' },
                    boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
                    borderRadius: '8px',
                    backgroundColor: '#fff',
                }}>

                    <Grid2 size={{ xs: 12 }} textAlign='center'>
                        <Typography variant='h4' component='h1' color='black'>Create Teacher</Typography>
                    </Grid2>

                    {/* {error && <Typography color="error">{error}</Typography>} */}

                    <Grid2 size={{ xs: 12 }}>
                        <TextField fullWidth
                            label="Username"
                            type='text'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            variant='outlined'></TextField>
                    </Grid2>

                    <Grid2 size={{ xs: 12 }}>
                        <TextField fullWidth
                            label="Password"
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            variant='outlined'></TextField>
                    </Grid2>

                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Choose Course</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={list}
                            label="Select Course"
                            onChange={handleChange}
                        >
                            <MenuItem value='B.Sc'>B.Sc</MenuItem>
                            <MenuItem value='BBA'>BBA</MenuItem>
                            <MenuItem value='B.Com'>B.Com</MenuItem>
                            <MenuItem value='B.Tech'>B.Tech</MenuItem>
                            <MenuItem value='MBA'>MBA</MenuItem>
                        </Select>
                    </FormControl>

                    <Button
                        fullWidth
                        variant="contained"
                        color="secondary"
                        onClick={handleCreateTeacher}
                    >
                        Create Staff
                    </Button>
{/* 
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={handleLogin}
                    >
                        Teacher Login
                    </Button> */}

                </Grid2>
            </Box>
        </div>
    );
}

export default CreateTeacher;
