import React from "react";
import { Link } from "react-router-dom";
import "./manager.css";

// Components
import Logout from "../components/Logout";
//import register from '../pages/register';

// Material UI
//import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

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
      <div>
        <h1>Linwood Management Frontdesk</h1>
        <h2>Package Management System</h2>
        <div className="container">
          <Grid direction="column" container spacing={3}>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/register"
              >
                Create New Tenant Account
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/newpkg"
              >
                Enter New Package
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/showpkgs"
              >
                View All Packages
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Logout />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default manager;
