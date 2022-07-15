import './Suggestions.css';
import React from 'react';
import {Row,Col,Button, Container} from 'react-bootstrap';


class Suggestions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {"suggestedCards": []};
    this.findSuggestions = this.findSuggestions.bind(this);
    }

   findSuggestions() {
   console.log("here")
   this.setState(state => ({suggestedCards :[{category:"Gas",cards:[{url: "https://secure.bankofamerica.com/content/images/ContextualSiteGraphics/CreditCardArt/en_US/Approved_PCM/8cty_cshsigcm_v_250x157.png",name: "Bank Of America Cash Rewards"}]},
                {category:"Gas",cards:[{url: "https://secure.bankofamerica.com/content/images/ContextualSiteGraphics/CreditCardArt/en_US/Approved_PCM/8cty_cshsigcm_v_250x157.png",name: "Bank Of America Cash Rewards"}]}]}))
    }

  render() {
    return (
        <div className="Suggestions">
        <Button variant="success"  onClick={this.findSuggestions}>Suggest which card to use</Button>
            <div className="CardSuggestion">
                <Container>
                    <Col>
                    {this.state.suggestedCards.map((cardResponse, i ) => {
                        return <Row className="justify-content-center"><Col className="col-md-5"><div className="p-1 mb-2 bg-secondary  text-white">For your {cardResponse.category}</div></Col>
                            {cardResponse.cards.map((card,j) => <Row><Col><Row><div className="p-3"><img className="rounded float-left img-thumbnail" src={card.url}/></div></Row><Row><div className="p-3">{card.name} </div></Row></Col> </Row>)}
                           </Row>
                    })}
                    </Col>
                </Container>
            </div>
        </div>
    );
  }
}
export default Suggestions;