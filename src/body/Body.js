import './Body.css';
import React from 'react';
import Category from '../category/Category';
import { Container, Box } from '@mui/system';
import { Grid, Button} from '@mui/material';
import Info from '../info/Info';
import Footer from '../footer/Footer';
import Suggestions from '../suggestions/Suggestions';
import Select from 'react-select';


class Body extends React.Component {

  constructor(props) {
    super(props);
    this.state = {"cards": [], suggestions:[]};
    this.handleCardChange = this.handleCardChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.fetchSuggestions = this.fetchSuggestions.bind(this);
  }

componentWillMount() {
    fetch("https://api.frugalpants.com/banks/cardsWithBankDetails")
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
  var cardList = [];
  json.map((cardDetails, i ) => {
      var obj = {};
      obj["label"] = cardDetails.bankName;
      let options = [];
      cardDetails.cards.forEach(element => {
        var temp = {};
        temp["label"] = (
        <Grid container>
          <Grid item xs={6}>
            <Box component="img" sx={{height: 65,width: 105,maxHeight: { xs: 85, md: 105 },maxWidth: { xs: 145, md: 145 }}} alt={element.cardName} src={element.cardLogoUrl}></Box>
          </Grid>
          <Grid item xs={6}>
           {element.cardName}  
          </Grid>
        </Grid>
          );
        temp["value"] = cardDetails.id+"-"+element.id;
        temp["cardId"] = element.id;
        options.push(temp);
      });
      obj["options"] = options;
      cardList.push(obj);
    })
    this.setState({"cards": cardList});
  }

  handleCardChange(selectedOptions) {
    let selectedCardIds = []; 
    selectedOptions.forEach( element => {
      selectedCardIds.push(element.cardId);
    });
    this.setState({selectedCards: selectedCardIds});
  }

  handleCategoryChange(selectedOptions) {
    let selectedCategories = []; 
    selectedOptions.forEach( element => {
      selectedCategories.push(element.value);
    });
    this.setState({selectedCategory: selectedCategories});
  }

  fetchSuggestions(){
    let request = {};
    request["cardIds"] = this.state.selectedCards;
    request["categoryIds"] = this.state.selectedCategory;
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify( request )
  };
    fetch("http://api.frugalpants.com/suggestion/suggestions", requestOptions)
    .then(res => res.json())
    .then(
      (result) => {
          this.setState({suggestions: result});
        }
      )
  }


  render() {
    return (
        <main>
          <div>
            <Container maxWidth="sm" >
            <Info></Info>
            <Box m={2} pt={3}>
              <Category handleCategory={this.handleCategoryChange}> </Category>
            </Box>
            <Box m={1} pt={1}>
            <Select options={this.state.cards}  isMulti name="colors" className="basic-multi-select" onChange={this.handleCardChange} placeholder="Cards I Own" classNamePrefix="select" > </Select>
            </Box>
            <Box m={2} pt={3}>
              <Button style={{
                    maxWidth: '500px', maxHeight: '30px', minWidth: '100px', minHeight: '30px',
                    borderRadius: 35, 
                    backgroundColor: "#169c56", width:"px",
                    padding: "14px 30px",
                    fontSize: "14px"
              }}
              variant="contained" align='center' onClick={this.fetchSuggestions} color='primary'>Suggest cards</Button>  </Box>
                          <Suggestions suggestedCards = {this.state.suggestions}></Suggestions>

            </Container>
        <Footer></Footer>
          </div>
        </main>
    );
  }
}

export default Body;
