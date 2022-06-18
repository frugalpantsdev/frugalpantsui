import './App.css';
import React from 'react';
import Header from './header/Header';
import Category from './category/Category';
import Cards from './cards/Cards';
import Suggestions from './suggestions/Suggestions';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
        <div className="App">
              <header className="App-background">
                <Header> </Header>
                <div>
                    <Category> </Category>
                </div>
                <div>
                    <Cards> </Cards>
                </div>
                <div>
                    <Suggestions></Suggestions>
                </div>
              </header>
            </div>
    );
  }
}

export default App;
