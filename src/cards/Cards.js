import './Cards.css';
import React from 'react';
import Select from 'react-select';

class Cards extends React.Component {

  render() {
    return (
        <div className="Cards">
            <Select options={this.props.cards}  isMulti name="colors" className="basic-multi-select" placeholder="Cards I Own" classNamePrefix="select" > </Select>
        </div>
    );
  }
}
export default Cards;