
// Creating teacher part.
import { Box, Button, Grid2, TextField, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTeacherRequest } from "./createteacher/actions";
import { useNavigate } from "react-router-dom";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { selectCourses } from "./course/selectors";

interface TeacherPayload {
  username: string;
  password: string;
  course: string;
}

function CreateTeacher() {
  const [list, setList] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const courses = useSelector(selectCourses);

  const handleChange = (event: SelectChangeEvent) => {
    setList(event.target.value as string);
  };

  const handleCreateTeacher = (): void => {
    const newTeacher: TeacherPayload = { username, password, course: list };
    dispatch(createTeacherRequest(newTeacher));
    navigate("/dashboard");
  };

  const handleback=()=>{
    navigate("/dashboard");
  }

  return (
    
    <div>
      <Box display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="50vh"
      
     
      >
        <Grid2
          container
          spacing={2}
          sx={{
            width: { xs: "90%", sm: "70%", md: "50%" },
            padding: { xs: "20px", md: "40px" },
            boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
            borderRadius: "8px",
            backgroundImage:'url(https://img.freepik.com/free-photo/empty-dark-concrete-wall-room-studio-background-floor-perspective-with-blue-soft-light-displays_1258-108916.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1729468800&semt=ais_hybrid)',
            backgroundSize: 'cover', 
            
          }}
        >
          <ArrowCircleLeftIcon  onClick={handleback}  fontSize="large" sx={{color:'white'}} />
          <Grid2 size={{ xs: 12 }} textAlign="center">
            <Typography variant="h4" component="h1" color="white">
              Create Teacher
            </Typography>
          </Grid2>

          <Grid2 size={{ xs: 12}} sx={{color:'white'}}>
            <TextField
              fullWidth
              label="Username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              variant="outlined"
              InputProps={{
                style: { color: 'white' }, // This will change the input text color
              }}
              InputLabelProps={{
                style: { color: 'blue' }, // This will change the label color
              }}
            ></TextField>
          </Grid2>

          <Grid2 size={{ xs: 12 }} sx={{color:'white'}}>
            <TextField
              fullWidth
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              variant="outlined"
              
    InputProps={{
      style: { color: 'white' }, // This will change the input text color
    }}
    InputLabelProps={{
      style: { color: 'blue' }, // This will change the label color
    }}
    
            />
          </Grid2>

          <FormControl fullWidth >
            <InputLabel id="demo-simple-select-label" sx={{ color: 'blue' }} >Choose Course</InputLabel>
            <Select 
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={list}
              label="Select Course"
              onChange={handleChange}
              sx={{
                color: 'white', // Change the selected text color
                
              }}
              
            >
               {/* Dynamically populate courses */}
               {courses.map((course: unknown) => (
                <MenuItem key={course.id} value={course.name}>
                  {course.name}
                </MenuItem>
               ))}
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
        </Grid2>
      </Box>
    </div>
   
  );
}

export default CreateTeacher;
