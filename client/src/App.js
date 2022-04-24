import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import Recipes from './Components/Recipes/Recipes';
import Form from './Components/Form/Form';
import img1 from './images/food.png';
import { getRecipes } from './actions/recipes'
import useStyles from './styles';
const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecipes());
  }, [])

  return (
    < Container maxWidth="lg" >
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Recipe App</Typography>
        <img className={classes.image} src={img1} alt="recipes" height="100" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent="space-between" alignItems="stretch" spacing={4}>
            <Grid item xs={12} sm={7}>
              <Recipes />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container >
  );
}

export default App;
