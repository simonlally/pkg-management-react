import React from "react";
import { Link } from "react-router-dom";
import "./manager.css";

// Components
import Logout from "../components/Logout";
import { Package } from "react-feather";

// Material UI
import { Container, Grid, Button } from "@material-ui/core";

class manager extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newTenant: false,
      newPackage: false,
      viewAllPackages: false
    };
  }

  render() {
    return (
      <Container style={{ width: "80%" }} className="card">
        <Grid
          direction="column"
          alignItems="center"
          justify="center"
          container
          spacing={3}
        >
          <h1>Linwood Management Frontdesk</h1>
          <Package />
          <h2>Package Management System</h2>

          <Grid item>
            <Button
              className="btn"
              variant="contained"
              color="primary"
              component={Link}
              to="/showpkgs"
            >
              View All Packages
            </Button>
          </Grid>

          <Grid item>
            <Button
              className="btn"
              variant="contained"
              color="primary"
              component={Link}
              to="/register"
            >
              Create New Tenant Account
            </Button>
          </Grid>
          <Grid item>
            <Button
              className="btn"
              variant="contained"
              color="primary"
              component={Link}
              to="/newpkg"
            >
              Enter New Package
            </Button>
          </Grid>
          <Logout />
        </Grid>
      </Container>
    );
  }
}

export default manager;
