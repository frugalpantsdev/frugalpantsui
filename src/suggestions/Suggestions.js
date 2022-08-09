import React from 'react';
import {Grid, Typography, Box} from '@mui/material';

class Suggestions extends React.Component {

  constructor(props) {
    super(props);
    this.renderSuggestions.bind(this);
  }

  renderSuggestions(props) {
    return (
        props.suggestedCards.map(element => {
        return( <Grid container columnSpacing={2}>
            <Grid item xs={6}>
            <Typography paragraph>{element.category}</Typography>
            {element.cardList.map(card => {
               return( <Grid row key={card.id}>
                <Box component="img" sx={{height: 65,width: 105,maxHeight: { xs: 85, md: 105 },maxWidth: { xs: 145, md: 145 }}} alt={element.cardName} src={card.cardLogoUrl}></Box>
            </Grid>)
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
