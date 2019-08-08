import React from "react";
import Axios from "axios";

import { Link } from "react-router-dom";

// Material UI
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

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

    console.log(data);

    Axios.post(url, data, headers)
      .then(res => {
        console.log(res);
        this.setState({ isSubmitted: true });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <NotificationContainer />
        {this.state.isSubmitted &&
          NotificationManager.success("New package created successfully")}
        <Button
          component={Link}
          to="/manager"
          variant="contained"
          color="primary"
        >
          Back
        </Button>
        <form className="new-package-form">
          <Grid
            direction="column"
            container
            alignItems="center"
            justify="center"
            spacing={3}
          >
            <h3>Enter New Package Information</h3>
            <Grid item xs={12}>
              <TextField
                type="text"
                placeholder="Tenant Name"
                onChange={e => this.setState({ tenantName: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="text"
                placeholder="Frontdesk Staff Name"
                onChange={e => this.setState({ staffName: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Package Details"
                rowsMax="4"
                margin="normal"
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
        {/* {this.state.isSubmitted && <Redirect to="/manager" />} */}
      </div>
    );
  }
}

export default newPackage;
