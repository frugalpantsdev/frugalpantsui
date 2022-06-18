import './Category.css';
import React from 'react';
import Select from 'react-select';

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.categories = {"categories": [{value:'GROCERY',label:"Grocery"},
                    {value:'GAS',label:"Gas"},
                    {value:'PHARMACY',label:"Pharmacy"},
                    {value:'OTHER',label:"Other"},
                    {value:'WHOLESALE',label:"Wholesale"},
                    {value:'HOTEL',label:"Hotel"},
                    {value:'CARS',label:"Cars"},
                    {value:'RESTAURANT',label:"Restaurant"}]};
  }
  render() {
    return (
        <div className="Category">
            <Select options={this.categories.categories} placeholder="I am shopping for"
                                                        isMulti
                                                        name="colors"
                                                        className="basic-multi-select"
                                                        classNamePrefix="select" />
        </div>
    );
  }
}
export default Category;