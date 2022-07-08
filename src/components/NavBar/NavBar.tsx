import React from "react";
import {AppBar, Typography, IconButton, Toolbar} from "@mui/material";

export const NavBar = () => {
  return(
    <AppBar position="static">
      <Toolbar variant="dense">
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>

        </IconButton>
        <Typography variant="h6" color="inherit" component="div">
          SONGS
        </Typography>
      </Toolbar>
    </AppBar>
  )
}