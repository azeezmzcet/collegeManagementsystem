import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function Login() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleLogin = () => {
   
    axios.post('http://127.0.0.1:8000/api/login', { username: username,
      password: password})
      .then(response => {
        
        if (response.data.tokenName) {
          console.log('Login successful', response.data);
          localStorage.setItem("Token", response.data.tokenName);
          navigate('/dashboard'); 
        }else {
          setError('Login failed, no token returned');
      }
      })
      .catch((error) => {
        if(error.message){
          setError(error.response.data.message);
          console.log('Error', error);
        }else{
          setError('an error ,please try again');

        }
         // Show error if credentials are wrong
        
      });
  };

  return (
    <div>
      <h1>Mount Zion College of Engineering and Technology</h1>
      <Box>
        <Grid container spacing={2} sx={{
          width: { xs: '90%', sm: '70%', md: '40%' },
          padding: { xs: '20px', md: '40px' },
          boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
          borderRadius: '8px',
          backgroundColor: '#fff'
        }}>
          <Grid item xs={12} textAlign='center'>
            <Typography variant='h4' component='h1' color='black'>
              Login
            </Typography>
          </Grid>

          {error && <Typography color="error">{error}</Typography>} {/* Show error if any */}

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Username"
              type='text'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              variant='outlined'
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Password"
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              variant='outlined'
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              color="secondary"
              onClick={handleLogin} // Correctly handle the login
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Login;
