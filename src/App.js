import './App.css';
import React from 'react';
import Header from './header/Header';
import Body from './body/Body';
import { CssBaseline } from '@mui/material';

class App extends React.Component {

 constructor(props) {
    super(props);
    this.state = {"cards": []};
  }

  render() {
    return (
        <>
          <CssBaseline />
          <Header></Header>
          <Body></Body>
        </>
    );
  }
}

export default App;
