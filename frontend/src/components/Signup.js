import React from 'react';
import { Link as RouterLink } from "react-router-dom";
import { TextField, Button, FormControlLabel, Checkbox,  Paper, Avatar, Grid2, Typography, Link} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

function Signup() {
  const paperStyle = {padding :20, height:'80vh', width: 400, margin:"20px auto"};
  const avatarStyle = {backgroundColor:'#3f51b5'};
  return (
    <Grid2>
    <Paper elevation ={10} style ={paperStyle}>
      <Grid2 align='center'><Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
      <h2>Sign Up</h2>
      </Grid2>
      <TextField id="outlined-basic" label="Full Name" variant="outlined" size="small"  fullWidth required  margin="normal"/>
      <TextField id="outlined-basic" label="Address" variant="outlined" size="small"  fullWidth required  margin="normal"/>
      <TextField id="outlined-basic" label="Whatsapp Number" variant="outlined" size="small"  fullWidth required  margin="normal"/>
      <TextField id="outlined-basic" label="Password" type='password' variant="outlined" size="small"  fullWidth required  margin="normal" />
      <TextField id="outlined-basic" label="Confirm Password" type='password' variant="outlined" size="small"  fullWidth required  margin="normal" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" fullWidth/>
      <Grid2 item>
            <Button type="submit" color="primary" variant="contained" fullWidth >
              Sign Up
            </Button>
      </Grid2>
      
      <Typography sx={{ mt: 2 }}> Do you have an account ?
      <RouterLink to="/Login"> Login </RouterLink>
      </Typography>
     
    </Paper>

   </Grid2>
  )
}

export default Signup
