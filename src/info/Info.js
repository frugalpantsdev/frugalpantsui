import { Typography } from '@mui/material';
import React from 'react';
import Select from 'react-select';

class Info extends React.Component {

  render() {
    return (
        <>
          <Typography variant='h5' align='center' color="textPrimary">Welcome to FrugalPants</Typography>
          <Typography variant='h6' align='center' color="textSecondary">FrugalPants is here to put money back into your pocket by maximizing your rewards.
           You don't need to track your rewards, Just tell us what you are shopping for today and the cards you own, we will help you choose the right card.</Typography>
        </>
    );
  }
}
export default Info;