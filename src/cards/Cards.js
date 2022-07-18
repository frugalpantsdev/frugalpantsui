import React from 'react';
import Select from 'react-select';

class Cards extends React.Component {

  render() {
    return (
        <>
            <Select options={this.props.cards}  isMulti name="colors" className="basic-multi-select" placeholder="Cards I Own" classNamePrefix="select" > </Select>
        </>
    );
  }
}
export default Cards;