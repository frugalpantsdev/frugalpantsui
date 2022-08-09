import React from 'react';
import {Grid, Typography, Box, Link} from '@mui/material';

class Suggestions extends React.Component {

  constructor(props) {
    super(props);
    this.renderSuggestions.bind(this);
  }

  renderSuggestions(props) {
    return (
        props.suggestedCards.map(element => {
        return( <Grid container columnSpacing={2}>
            <Grid item  m={2} p={2} >
            <Typography paragraph sx={{borderBottom: "solid", textAlign: "center"}}>{element.category}</Typography>
            {element.cardList.map(card => {
               return(<>
              <Grid style = {{ borderBottom: "solid", backgroundColor: "#FFFDD0"}} p={1} m={1} container key={card.id}>
                <Grid  xs={6} item>
                  <Box component="img" sx={{height: 65,width: 105,maxHeight: { xs: 85, md: 105 },maxWidth: { xs: 145, md: 145 }}} alt={element.cardName} src={card.cardLogoUrl}></Box>
                </Grid>
                <Grid xs={6}>
                <Link style={{fontSize: 15}} target= "_blank" href={card.moreInfoUrl}>More Info </Link>
                </Grid>
                <Grid item xs={6}>
                <Typography style={{fontSize: 15}}>{card.cardName}</Typography>
                </Grid>
                <Grid xs={6}>
                <Link style={{fontSize: 15}} target= "_blank"  href={card.termsAndConditionsUrl}>Term And Conditions </Link>
                </Grid>
                <Typography gutterBottom></Typography>
            </Grid>
            </>
              )
            })
          }
            </Grid>
          </Grid>)
        })
    )
  }


  render() {
    return (
       <>
        {this.renderSuggestions(this.props)}
       </>
    );
  }
}

export default Suggestions;
