import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Paper,
  Input,
  Grid,
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Navbar from "../../components/admin/Navbar";

function UploadFiles() {
  const paperStyle = {
    padding: 20,
    height: 'auto',
    width: 400,
    margin: "20px auto",
  };

  const [file, setFile] = useState(null);

  return (
    <Grid>
      <Navbar />

      <Paper elevation={10} style={paperStyle}>
        <Box
          component="section"
          sx={{
            p: 4,
            border: '1px dashed blue',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3, // adds vertical space between children
          }}
        >
          <h2>Upload Your Files</h2>

          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
          >
            Upload files
            {/* <input
              type="file"
              hidden
              onChange={(e) => console.log(e.target.files)}
              multiple
            /> */}
          </Button>

          <Box sx={{ width: '100%' }}>
            <h3>File Name</h3>
            <Input fullWidth />

            <Box sx={{ mt: 2 }}>
              <h3>File Place</h3>
              <Input fullWidth />
            </Box>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
}

export default UploadFiles;
