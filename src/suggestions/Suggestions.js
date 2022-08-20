import React from 'react';
import {Grid, Typography, Box,Icon, Link, Tooltip} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import Carousel from 'react-material-ui-carousel'

class Suggestions extends React.Component {

  constructor(props) {
    super(props);
    this.renderSuggestions.bind(this);
  }


  renderSuggestions(props) {
    return (
        props.suggestedCards.map(element => {
        return( 
          <Grid container columnSpacing={2}>
            <Grid item xs={12}>   
            <Typography paragraph sx={{textAlign: "center"}}>{element.category}</Typography>
            {element.cardList.map(card => {
               return(<>
              <Grid style = {{  backgroundColor: "#f2f5f6"}} p={1}  container key={card.id}>
                <Grid item  xs={6} >
                  <Box component="img" sx={{height: 65,width: 105,maxHeight: { xs: 85, md: 105 },maxWidth: { xs: 145, md: 145 }}} alt={card.card.cardName} src={card.card.cardLogoUrl}></Box>
                  <Typography style={{fontSize: 15}}>{card.card.cardName}</Typography>
               </Grid>     
                <Grid xs={6}>
                <Typography >{card.reward.rewardValue +" "+ card.reward.rewardType} <Tooltip title={card.reward.rewardText}>
                    <Icon><InfoIcon style={{fontSize:"medium"}}>
                      </InfoIcon >
                      </Icon>
                  </Tooltip></Typography>
               
                <Grid item xs={12}>
                <Link  target= "_blank"  href={card.card.termsAndConditionsUrl}>Terms And Conditions </Link>
                </Grid>
                <Grid item xs={12}></Grid>
                <Link  target= "_blank" href={card.card.moreInfoUrl}>More Info </Link>
                </Grid>
            </Grid>
            </>
              )
            })
          }
            </Grid>
          </Grid>
          )
        })
    )
  }


  render() {
    return (
       <>
       <Carousel  autoPlay={true} fullHeightHover={true} duration={1}>
        {this.renderSuggestions(this.props)}
        </Carousel>
       </>
    );
  }
}

export default Suggestions;
