import './Cards.css';
import React from 'react';
import Select from 'react-select';
import {Col, Row} from 'react-bootstrap';

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {"cards": [
                    {value:'bofa2',label:<Row><Col><img className="rounded float-left img-fluid" src="https://secure.bankofamerica.com/content/images/ContextualSiteGraphics/CreditCardArt/en_US/Approved_PCM/8cty_cshsigcm_v_250x157.png"/></Col><Col className="text-center">Bank Of America Secured Card 1</Col></Row> },
                    {value:'bofa3',label:<Row><Col><img className="rounded float-left img-fluid" src="https://secure.bankofamerica.com/content/images/ContextualSiteGraphics/CreditCardArt/en_US/Approved_PCM/8cty_cshsigcm_v_250x157.png"/></Col><Col>Bank Of America Secured Card 2</Col></Row> },
                    {value:'bofa4',label:<Row><Col><img className="rounded float-left img-fluid" src="https://secure.bankofamerica.com/content/images/ContextualSiteGraphics/CreditCardArt/en_US/Approved_PCM/8cty_cshsigcm_v_250x157.png"/></Col><Col>Bank Of America Secured Card 3</Col></Row> },
                    {value:'bofa5',label:<Row><Col><img className="rounded float-left img-fluid" src="https://secure.bankofamerica.com/content/images/ContextualSiteGraphics/CreditCardArt/en_US/Approved_PCM/8cty_cshsigcm_v_250x157.png"/></Col><Col>Bank Of America Secured Card 4</Col></Row> },
                    {value:'bofa6',label:<Row><Col><img className="rounded float-left img-fluid" src="https://secure.bankofamerica.com/content/images/ContextualSiteGraphics/CreditCardArt/en_US/Approved_PCM/8cty_cshsigcm_v_250x157.png"/></Col><Col>Bank Of America Secured Card 5</Col></Row> },
                    {value:'bofa7',label:<Row><Col><img className="rounded float-left img-fluid" src="https://secure.bankofamerica.com/content/images/ContextualSiteGraphics/CreditCardArt/en_US/Approved_PCM/8cty_cshsigcm_v_250x157.png"/></Col><Col>Bank Of America Secured Card 6</Col></Row> },
                    {value:'bofa8',label:<Row><Col><img className="rounded float-left img-fluid" src="https://secure.bankofamerica.com/content/images/ContextualSiteGraphics/CreditCardArt/en_US/Approved_PCM/8cty_cshsigcm_v_250x157.png"/></Col><Col>Bank Of America Secured Card 7</Col></Row> }]};
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