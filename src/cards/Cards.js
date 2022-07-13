import './Cards.css';
import React from 'react';
import Select from 'react-select';
import {Col, Row} from 'react-bootstrap';

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {"cards": []};

  }

  componentWillMount() {
      fetch("http://api-dev.frugalpants.com/banks/cards")
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
    console.log(this.state.cards);
    }



  render() {
    return (
        <div className="Cards">
            <Select options={this.state.cards}  isMulti name="colors" className="basic-multi-select" placeholder="Cards I Own" classNamePrefix="select" > </Select>
        </div>
    );
  }
}
export default Cards;