import React from "react";

import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Package } from "react-feather";

class home extends React.Component {
  render() {
    return (
      <Grid
        direction="column"
        alignItems="center"
        justify="center"
        container
        spacing={3}
      >
        <h1>Linwood Management Home </h1>
        {<Package />}
        <p>Welcome to the Package Management System</p>
        <p>Tenants and Staff may login below:</p>
        <Button
          component={Link}
          to="/login"
          color="secondary"
          variant="contained"
        >
          Login
        </Button>
      </Grid>
    );
  }
}

export default home;
