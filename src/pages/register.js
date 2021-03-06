import React from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

import { Grid, Button, TextField } from "@material-ui/core";
import { UserPlus } from "react-feather";

import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";
import "react-notifications/dist/react-notifications.css";
import { Container } from "@material-ui/core";

class register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      handle: "",
      success: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const tenant = {
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.password,
      handle: this.state.handle,
      isStaff: false
    };

    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    };

    const url = "https://us-central1-mydb-34040.cloudfunctions.net/api/signup";
    Axios.post(url, tenant, headers)
      .then(res => {
        if (res.status === 201) {
          this.setState({ success: true });
        }
      })
      .catch(err => {
        console.log(err);
      });

    document.getElementById("new-tenant-form").reset();
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
          <form id="new-tenant-form">
            <Grid
              direction="column"
              container
              alignItems="center"
              justify="center"
              spacing={3}
            >
              <h3>Register a New Tenant</h3>
              <UserPlus />
              <Grid item xs={12} style={{ marginTop: "50px" }}>
                <TextField
                  type="text"
                  placeholder="tenant email"
                  label="Tenant Email Addres"
                  onChange={event =>
                    this.setState({ email: event.target.value })
                  }
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="password"
                  label="Tenant Password"
                  placeholder="tenant password"
                  onChange={event =>
                    this.setState({
                      password: event.target.value,
                      confirmPassword: event.target.value
                    })
                  }
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="text"
                  placeholder="tenant name"
                  label="Tenant Full Name"
                  onChange={event =>
                    this.setState({ handle: event.target.value })
                  }
                  variant="outlined"
                />
              </Grid>
              <Button
                color="secondary"
                variant="contained"
                onClick={event => this.handleSubmit(event)}
              >
                Submit
              </Button>
            </Grid>
          </form>
        </Container>
        <NotificationContainer />
        {this.state.success &&
          NotificationManager.success("New tenant registered successfully")}
      </div>
    );
  }
}

export default register;
