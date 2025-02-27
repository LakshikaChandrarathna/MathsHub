import React from 'react';
import { Link as RouterLink } from "react-router-dom";
import { TextField, Button, FormControlLabel, Checkbox,  Paper, Avatar, Grid2, Typography, Link} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

function Login() {


  const paperStyle = {padding :20, height:'60vh', width: 400, margin:"20px auto"};
  const avatarStyle = {backgroundColor:'#3f51b5'};
  return (
    <Grid2>
    <Paper elevation ={10} style ={paperStyle}>
      <Grid2 align='center'><Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
      <h2>Login</h2>
      </Grid2>
      <TextField id="outlined-basic" label="User Name" variant="outlined" size="small"  fullWidth required  margin="normal"/>
      <TextField id="outlined-basic" label="Password" type='password' variant="outlined" size="small"  fullWidth required  margin="normal" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" fullWidth/>
      <Grid2 item>
            <Button type="submit" color="primary" variant="contained" fullWidth >
              Sign In
            </Button>
      </Grid2>
      <Typography sx={{ mt: 2 }}> 
      <Link href="#" >
      Forgot password ?
     </Link>
      </Typography >
      <Typography sx={{ mt: 2 }}> Do you have an account ?
      <RouterLink to="/Signup"> Sign Up </RouterLink>
      </Typography>
     
    </Paper>

   </Grid2>
  )
}

export default Login
