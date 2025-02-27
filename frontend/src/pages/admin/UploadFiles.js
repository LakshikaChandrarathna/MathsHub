import React, { useState } from "react";
import { TextField, Button ,Box, FormControlLabel, Checkbox,  Paper, Avatar, Grid2, Typography, Link} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Navbar from "../../components/admin/Navbar";

function UploadFiles() {
 
    const paperStyle = {padding :20, height:'60vh', width: 400, margin:"20px auto"};
    const avatarStyle = {backgroundColor:'#3f51b5'};

  return (
    
    <Grid2>
      <Navbar />
      
    <Paper elevation ={10} style ={paperStyle}>
      
      <Box component="section" sx={{ p: 5, border: '1px dashed blue' }}>
      <Grid2 align='center'>
      <h2>Upload Your Files</h2>
      </Grid2>
      <Grid2 align='center'>
      <Button align="center"
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
        >
        Upload files
        {/* <VisuallyHiddenInput
            type="file"
            onChange={(event) => console.log(event.target.files)}
            multiple
        /> */}
</Button>
    </Grid2>
    </Box>
    
      
      
     
    </Paper>

   </Grid2> 
  )
}

export default UploadFiles
