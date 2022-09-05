import React from 'react';
import Select from 'react-select';

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.categories = {"categories": [{value:'ONLINE_SHOPPING',label:"Online Shopping"},
                    {value:'GAS',label:"Gas"},
                    {value:'DINING',label:"Dining"},
                    {value:'DRUG_STORES',label:"Pharmacy/Drug Stores"},
                    {value:'HOME_IMPROVEMENT',label:"Home Improvement"},
                    {value:'FURNISHING',label:"Furnishing"},
                    {value:'GROCERY',label:"Grocery"},
                    {value:'WHOLESALE_CLUBS',label:"Wholesale Clubs"},
                    {value:'OTHER',label:"Other"}]};
  }
  render() {
    return (
        <>
            <Select menuPortalTarget={document.body} menuPosition={'fixed'}  options={this.categories.categories} placeholder="I am shopping for"
                                                        isMulti
                                                        name="colors" onChange={this.props.handleCategory}
                                                        className="basic-multi-select"
                                                        classNamePrefix="select" />
        </>
    );
  }
}
export default Category;