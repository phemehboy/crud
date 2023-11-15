import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";

import logo from "./images/decode traders.png";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";

import useStyles from "./styles";

const App = () => {
  const classes = useStyles();
  console.log("Welcome");
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          CRUD
        </Typography>
        <img src={logo} className={classes.image} height="60" alt="logo" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
