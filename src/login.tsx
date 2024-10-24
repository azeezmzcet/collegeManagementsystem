
import { Alert, Box, Button, Grid, Snackbar, TextField, Typography } from '@mui/material';
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginRequest } from './login/actions';

function Login() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const [open, setOpen] = useState<boolean>(false);
  const [openError] = useState<boolean>(false);

  const [usernameedit, setUsernameedit] = useState<string>('');
  const [passwordedit, setPasswordedit] = useState<string>('');

//  const navigate = useNavigate();
 const dispatch=useDispatch();

 const validateUsername = (username: string) => {
  if (!username) {
    setUsernameedit('Username is required');
  } else {
    setUsernameedit('');
  }
};



const validatePassword = (password: string) => {
  if (!password) {
    setPasswordedit('Password is required');
  } else if (password.length < 6) {
    setPasswordedit('Password must be at least 6 characters');
  } else {
    setPasswordedit('');
  }
};

  const handleLogin = () => {
 validateUsername(username);
 validatePassword(password);
if(!usernameedit && !passwordedit){
  dispatch(loginRequest(username,password));
  console.log('function logon workig');
  setOpen(true);

}else{
  setError('Please fix the errors');
  //setError(true);
  setOpen(false);
}
  
  }

const handleSnaker =()=>{
  setOpen(false);
  setError(null);
}
    



  return (
    <div>
      <h1> College Management</h1>
      <Box display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="50vh">
        <Grid container spacing={2} sx={{
          width: { xs: '90%', sm: '70%', md: '40%' },
          padding: { xs: '20px', md: '40px' },
          boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
          borderRadius: '8px',
          //background: "rgb(238,174,202)",
          background:" radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(46,73,103,1) 100%)",
         
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
              onChange={(e) => {setUsername(e.target.value);validateUsername(e.target.value)}}
              variant='outlined'
              required
              error={!!usernameedit}
              helperText={usernameedit}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Password"
              type='password'
              value={password}
              onChange={(e) => {setPassword(e.target.value); validatePassword(e.target.value)}}
              variant='outlined'
              required
              error={!!passwordedit}
              helperText={passwordedit}
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              color="secondary"
              onClick={handleLogin}
            >
              Login
            </Button>
            <Snackbar
              open={open}
              onClose={handleSnaker}
              anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
              autoHideDuration={3000}
            >
              <Alert onClose={handleSnaker} severity="success">
                Successfully logged in!
              </Alert>
            </Snackbar>
           
            <Snackbar
              open={!!openError}
              onClose={handleSnaker}
              anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
              autoHideDuration={3000}
            >
              <Alert onClose={handleSnaker} severity="error">
                Oops! Something went wrong.
              </Alert>
            </Snackbar>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Login;

