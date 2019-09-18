import React from "react";
import Axios from "axios";

import { Link } from "react-router-dom";

import { Container, Grid, TextField, Button } from "@material-ui/core";
import { Package } from "react-feather";

import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";
import "react-notifications/dist/react-notifications.css";

class newPackage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tenantName: "",
      staffName: "",
      packageDetails: "",
      isSubmitted: null
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    //const url = 'http://localhost:5000/mydb-34040/us-central1/api/newpkg';
    const url = "https://us-central1-mydb-34040.cloudfunctions.net/api/newpkg";
    var headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    };

    const data = {
      tenantName: this.state.tenantName,
      staffName: this.state.staffName,
      packageDescription: this.state.packageDetails
    };

    Axios.post(url, data, headers)
      .then(res => {
        console.log(res);
        this.setState({ isSubmitted: true });
      })
      .catch(err => console.log(err));

    document.getElementById("new-package-form").reset();
  }

  render() {
    return (
      <div>
        <Button
          component={Link}
          to="/manager"
          variant="contained"
          color="primary"
        >
          Back
        </Button>
        <Container className="card" maxWidth="sm">
          <NotificationContainer />
          {this.state.isSubmitted &&
            NotificationManager.success("New package created successfully")}

          <form id="new-package-form">
            <Grid
              direction="column"
              container
              alignItems="center"
              justify="center"
              spacing={3}
            >
              <h3>Enter New Package Information</h3>
              <Package size="45" stroke="#d29c9c" fill="#b98324" />
              <Grid item xs={12}>
                <TextField
                  type="text"
                  label="Tenant Name"
                  placeholder="Tenant Name"
                  onChange={e => this.setState({ tenantName: e.target.value })}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="text"
                  label="Frontdesk Staff Name"
                  placeholder="Frontdesk Staff Name"
                  onChange={e => this.setState({ staffName: e.target.value })}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Package Details"
                  rowsMax="4"
                  variant="outlined"
                  onChange={e =>
                    this.setState({ packageDetails: e.target.value })
                  }
                />
              </Grid>
              <Button
                color="secondary"
                variant="contained"
                onClick={e => this.handleSubmit(e)}
              >
                Submit New Package
              </Button>
            </Grid>
          </form>
        </Container>
      </div>
    );
  }
}

export default newPackage;
