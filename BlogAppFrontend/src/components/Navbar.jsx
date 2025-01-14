import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';



const Navbar = () => {


  const navigate = useNavigate()

  const handleLogout = () =>{
    sessionStorage.removeItem('logintoken');
    alert('Logged Out')
    navigate('/')
  }

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar style={{ backgroundColor: "brown" }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              BlogApp
            </Typography>

            <Link to={"/blogs"}>
              <Button style={{ color: "white" }}>HOME</Button>{" "}
            </Link>
            <Link to={"/addblogs"}>
              <Button style={{ color: "white" }}>ADDBLOG</Button>
            </Link>
            <Link to={"/"}>
              <Button style={{ color: "white" }} onClick={handleLogout}>LOGOUT</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Navbar
