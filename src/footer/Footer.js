import { Link, Box } from '@mui/material';
import React from 'react';
import { Divider } from '@mui/material';

class Footer extends React.Component {

 constructor(props) {
    super(props);
    this.state = {"cards": []};
  }

  render() {
    return (
       <>

       <footer style={{color: "gray", bottom: 0, position:'relative'}} >
        <Box>
            <Link href="#" underline="hover" m={1} p={1}>Feedback</Link>
            <Link href="#" underline="hover" m={1} p={1}>Terms of use</Link>
            <Link href="#" underline="hover" m={1} p={1}>Privacy policy</Link>
        </Box>
       </footer>
       </>
    );
  }
}

export default Footer;