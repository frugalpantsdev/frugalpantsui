import './Body.css';
import React from 'react';
import Category from '../category/Category';
import { Container, Box } from '@mui/system';
import Cards from '../cards/Cards';
import {Button, Table, TableRow, TableCell} from '@mui/material';
import Info from '../info/Info';
import Footer from '../footer/Footer';

class Body extends React.Component {

  constructor(props) {
    super(props);
    this.state = {"cards": []};
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
        temp["label"] = (<Table>
            <TableRow>
              <TableCell align="left"><Box component="img" sx={{height: 65,width: 105,maxHeight: { xs: 85, md: 105 },maxWidth: { xs: 145, md: 145 }}} alt={element.cardName} src={element.cardLogoUrl}></Box></TableCell>
              <TableCell align="left" sx={{"overflow-wrap": "break-word"}}>{element.cardName}</TableCell>
            </TableRow>
        </Table>);
        temp["value"] = cardDetails.id+"-"+element.id;
        options.push(temp);
      });
      obj["options"] = options;
      cardList.push(obj);
    })
    this.setState({"cards": cardList});
  }

  render() {
    return (
        <main>
          <div>
            <Container maxWidth="sm" >
            <Info></Info>
            <Box m={2} pt={3}>
              <Category> </Category>
            </Box>
            <Box m={1} pt={1}>
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
              

        <Footer></Footer>
            </Container>
          </div>
        </main>
    );
  }
}

export default Body;
