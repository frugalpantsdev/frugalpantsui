import * as React from 'react';
import Box from '@mui/material/Box';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { Typography, Grid, Link } from '@mui/material';


class Suggest extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
    this.renderSuggestions.bind(this);
    this.setOpen.bind(this);
    this.getOpen.bind(this);
  }

  setOpen(element){
    let flag = this.getOpen(element);
    this.setState({[element]: !flag});
  }

  getOpen(element){
    if(!this.state[[element]]){
      return false;
    }
    return this.state[[element]];
  }

  renderItems(card, item){
    return ( this.getOpen(item.category) && 
        <>
        <Box m={1} >
        <Grid style = {{  backgroundColor: "#f2f5f6"}} p={1}  container key={card.id}>
                <Grid item  xs={6} >
                  <Box component="img" sx={{height: 65,width: 105,maxHeight: { xs: 85, md: 105 },maxWidth: { xs: 145, md: 145 }}} alt={card.card.cardName} src={card.card.cardLogoUrl}></Box>
                  <Typography style={{fontSize: 20}}>{card.card.cardName}</Typography>
               </Grid>     
                <Grid xs={6}>
                <Typography sx={{fontSize: 10}} >{card.reward.rewardValue +" "+ card.reward.rewardType} 
                  </Typography>
               
                <Grid item xs={12}>
                <Link sx={{fontSize: 10}} target= "_blank"  href={card.card.termsAndConditionsUrl}>Terms And Conditions </Link>
                </Grid>
                <Grid item xs={12}></Grid>
                <Link sx={{fontSize: 10}} target= "_blank" href={card.card.moreInfoUrl}>More Info </Link>
                </Grid>
                  <Grid xs={12}>
                <Typography sx={{fontSize: 10}}>{card.reward.rewardText}</Typography>
                </Grid>
            </Grid>
                  </Box>
                  </>
    )
  }

  renderSuggestions(props){
    return (<>
            <Paper elevation={0}>
                          {
                props.suggestedCards.map((item) => 
                    { return (<>
                    <Box sx={{bgcolor:  'rgba(71, 98, 130, 0.2)' , pb: this.getOpen(item.category) ? 2 : 0, }}>
                    <ListItemButton  
                                    alignItems="flex-start"
                                    onClick={() => this.setOpen(item.category)}
                                    sx={{
                                      px: 3, 
                                      pt: 2.5,
                                      pb: this.getOpen(item.category) ? 0 : 2.5,
                                      '&:hover, &:focus': { '& svg': { opacity: this.getOpen(item.category) ? 1 : 0 } },
                                    }}
                                  >
                                    <ListItemText
                                      primary={item.category}
                                      primaryTypographyProps={{
                                        fontSize: 15,
                                        fontWeight: 'medium',
                                        lineHeight: '20px',
                                        mb: '2px',
                                      }}
                                      sx={{ my: 0 }}
                                    />
                                    <KeyboardArrowDown
                                      sx={{
                                        mr: 1,
                                        opacity: 1,
                                        transform: this.getOpen(item.category) ? 'rotate(-180deg)' : 'rotate(0deg)',
                                        transition: '0.2s',
                                      }}
                                    />
                                  </ListItemButton>
                                  </Box>
                    {    
                        item.cardList.map(card => {
                                return (
                                    <>
                    {this.renderItems(card, item)}
                  </>
                  )
                })}
                </>)
                }
                )}
            </Paper>    
    </>);
  }




  render() {
    return (<>{this.renderSuggestions(this.props)}</>)

  }

}

export default Suggest;