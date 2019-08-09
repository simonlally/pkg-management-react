import React from "react";

import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Package } from "react-feather";
import Container from '@material-ui/core/Container';

class home extends React.Component {
  render() {
    return (
      <Container maxWidth="sm" style={{
        background: '#cbf2fd',
        paddingTop: '100px',
        border: '1px solid rgb(226, 226, 243)',
        marginTop: '100px'
      }}>
        <Grid
          direction="column"
          alignItems="center"
          justify="center"
          container
          spacing={3}
        >
          <h1>Linwood Management Home </h1>
          {<Package size="45" stroke="#d29c9c" fill="#b98324"/>}
          <p>Welcome to the Package Management System</p>
          <p>Tenants and Staff may login below:</p>
          <Button
            component={Link}
            to="/login"
            color="secondary"
            variant="contained"
            style={{width: "149px", padding: "14px"}}
          >
            Login
          </Button>
        </Grid>
      </Container>
    );
  }
}

export default home;
