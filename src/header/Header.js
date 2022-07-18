import React from 'react';
import { AppBar, Toolbar,Typography } from '@mui/material';

class Header extends React.Component {

 constructor(props) {
    super(props);
    this.state = {"cards": []};
  }

  render() {
    return (
       <>
       <AppBar position='relative' style={{backgroundColor:'linear-gradient(to bottom, #596a72 100%,#cedce7 100%);'}}>
       { /* position='relative' */ }
         <Toolbar>
            {/* <Box component="img" sx={{
              height: 45,
              width: 45,
              maxHeight: { xs: 45, md: 45 },
              maxWidth: { xs: 45, md: 45 },
            }} alt="Frugal Pants" src="/logo.png" /> */}
            <Typography variant='h5'>Frugal Pants</Typography>
        </Toolbar>
       </AppBar>
       </>
    );
  }
}

export default Header;
