import './App.css';
import React from 'react';
import Header from './header/Header';
import Category from './category/Category';
import Cards from './cards/Cards';
import Suggestions from './suggestions/Suggestions';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Row} from 'react-bootstrap';

class App extends React.Component {

 constructor(props) {
    super(props);
    this.state = {"cards": []};
  }

componentWillMount() {
      fetch("https://api-dev.frugalpants.com/banks/cards")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              rawCards: result.response
            });
            this.buildCardItems(result.response)
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }

    buildCardItems(response){
    var json = response;
    json.map((cardDetails, i ) => {
        var obj = [];
        obj["value"] = cardDetails.cardName;
        obj["label"] = (<Row><Col><img className="rounded float-left img-fluid" src={cardDetails.cardImageUrl}/></Col><Col className="text-center">{cardDetails.cardName}</Col></Row>);
        this.state.cards.push(obj);
      })
    }
  render() {
    return (
        <div className="App">
              <header className="App-background">
                <Header> </Header>
                <div>
                    <Category> </Category>
                </div>
                <div>
                    <Cards cards={this.state.cards}> </Cards>
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
