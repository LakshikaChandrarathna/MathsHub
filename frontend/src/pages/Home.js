import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Container, Paper, Grid, Box, Card, CardContent, IconButton } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import MenuIcon from "@mui/icons-material/Menu";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import Navbar from "../components/admin/Navbar";



function Home() {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  // Handle file selection
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFiles([...uploadedFiles, file.name]);
    }
  };

  return (
    <>
    <Box>
        <Navbar />
    </Box>
    <Box sx={{ display: "flex" ,  }}>
      {/* Sidebar */}
      

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* Top Navigation Bar */}
       

        {/* Hero Section */}
        <Box
          sx={{
            backgroundImage: "url('/images/image2.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "#CCCCFF",
            textAlign: "center",
            py: 4,
            borderRadius: 2,
            mt: 0,
            height:600,
          }}
        >
            <Box  display="flex" 
            flexDirection="column" 
            justifyContent="center" 
            alignItems="center" 
            height="50vh" // Adjust height as needed
            textAlign="center">
          <Typography variant="h2" fontFamily="'Poppins' sans-serif" fontWeight="bold">
          Unlock Knowledge, Shape Your Future
          </Typography>
          <Typography variant="h6" sx={{ mt: 1, opacity: 0.9 }}>
            A simple platform to share and download lecture materials.
          </Typography>
          </Box>
        </Box>

        {/* Upload & Recent Uploads Section */}
        <Container sx={{ mt: 4 }}>
          <Grid container spacing={4}>
            {/* Upload Section */}
            <Grid item xs={12} md={6}>
              <Card sx={{ p: 4, textAlign: "center", borderRadius: 3, boxShadow: 3 }}>
                <CardContent>
                  <Typography variant="h5" gutterBottom fontWeight="bold">
                    Upload Your Notes
                  </Typography>
                  <input type="file" accept=".pdf,.doc,.ppt" id="upload-file" hidden onChange={handleFileUpload} />
                  <label htmlFor="upload-file">
                    <Button component="span" variant="contained" startIcon={<CloudUploadIcon />} sx={{ mt: 2 }}>
                      Upload File
                    </Button>
                  </label>
                </CardContent>
              </Card>
            </Grid>

            {/* Recent Uploads Section */}
            <Grid item xs={12} md={6}>
              <Card sx={{ p: 4, borderRadius: 3, boxShadow: 3 }}>
                <CardContent>
                  <Typography variant="h5" gutterBottom fontWeight="bold">
                    Recent Uploads
                  </Typography>
                  {uploadedFiles.length === 0 ? (
                    <Typography>No files uploaded yet.</Typography>
                  ) : (
                    <ul>
                      {uploadedFiles.map((file, index) => (
                        <li key={index}>{file}</li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
    </>
  );
}

export default Home;
