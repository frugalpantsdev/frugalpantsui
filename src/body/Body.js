import './Body.css';
import React from 'react';
import Category from '../category/Category';
import { Container, Box } from '@mui/system';
import Cards from '../cards/Cards';
import {Button, Grid, Typography} from '@mui/material';
import Info from '../info/Info';

class Body extends React.Component {

  constructor(props) {
    super(props);
    this.state = {"cards": []};
  }

componentWillMount() {
    fetch("https://api.frugalpants.com/banks/cards")
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
      var obj = [];
      obj["value"] = cardDetails.cardName;
      obj["label"] = (<Grid container spacing={2} ><Grid item><Box component="img" sx={{height: 90,width: 145,maxHeight: { xs: 90, md: 90 },
      maxWidth: { xs: 145, md: 145 },}} alt={cardDetails.cardName} src={cardDetails.cardImageUrl} /></Grid>
      <Grid item><Typography paragraph >{cardDetails.cardName}</Typography> </Grid></Grid>);
      cardList.push(obj);
    })
    this.setState({"cards": cardList});
  }

  render() {
    return (
        <main>
          <div>
            <Container maxWidth="sm" sx={{ p: 2 }}>
            <Info></Info>
            <Box m={2} pt={3}>
              <Category> </Category>
            </Box>
            <Box m={2} pt={3}>
              <Cards cards={this.state.cards}></Cards>
            </Box>
            <Box m={2} pt={3}>
              <Button style={{
        maxWidth: '500px', maxHeight: '30px', minWidth: '100px', minHeight: '30px',
        borderRadius: 35,
        backgroundColor: "#169c56", width:"px",
        padding: "14px 30px",
        fontSize: "14px"
    }}
    variant="contained" align='center' color='primary'>Suggest cards</Button>
              </Box>


            </Container>
          </div>
        </main>
    );
  }
}

export default Body;
