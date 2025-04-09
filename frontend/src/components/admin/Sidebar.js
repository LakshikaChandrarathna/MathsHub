import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Divider } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import UploadIcon from "@mui/icons-material/CloudUpload";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/ExitToApp";

function Sidebar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      {/* Menu Button */}
      <IconButton onClick={toggleDrawer} sx={{ position: "fixed", top: 10, left: 10 }}>
        <MenuIcon />
      </IconButton>

      {/* Sidebar Drawer */}
      <Drawer anchor="left" open={open} onClose={toggleDrawer}>
        <List sx={{ width: 250 }}>
          <ListItem>
            <ListItemText primary="Menu" sx={{ fontWeight: "bold", textAlign: "center" }} />
          </ListItem>
          <Divider />

          {/* Sidebar Items */}
          <ListItem button onClick={() => alert("Go to Home")}>
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>

          <Link to="/UploadFiles"> 
           <ListItem >
            <ListItemIcon><UploadIcon /></ListItemIcon>
            <ListItemText primary="Uploads" />
          </ListItem>
          </Link>

          <ListItem button onClick={() => alert("Go to Settings")}>
            <ListItemIcon><SettingsIcon /></ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>

          <Divider />

          <ListItem button onClick={() => alert("Logging Out")}>
            <ListItemIcon><LogoutIcon /></ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}

export default Sidebar;
