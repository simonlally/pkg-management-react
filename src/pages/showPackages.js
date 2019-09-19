import React from "react";
import Axios from "axios";
import Logout from "../components/Logout";
import { Link } from "react-router-dom";

import { Check, Trash2 } from "react-feather";
import "./showPackages.css";
import {
  Container,
  Grid,
  Button,
  ListItem,
  ListItemText
} from "@material-ui/core";

class showPackages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pkgs: []
    };

    this.delete = this.delete.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
  }

  componentDidMount() {
    console.log("packages component mounted");
    const url =
      "https://us-central1-mydb-34040.cloudfunctions.net/api/packages";
    Axios.get(url)
      .then(res => {
        console.log(res);
        this.setState({
          pkgs: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  updateStatus(event, pkg) {
    event.preventDefault();

    const data = {
      isPickedUp: true,
      packageId: pkg.packageId
    };

    console.log(data);

    var headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    };

    const url =
      "https://us-central1-mydb-34040.cloudfunctions.net/api/updatestatus";
    Axios.post(url, data, headers)
      .then(res => {
        // this should be done using a lifecycle method
        window.location.reload();
      })
      .catch(err => {
        console.log(err);
      });
  }

  delete(event, pkg) {
    event.preventDefault();

    const data = {
      packageId: pkg.packageId
    };

    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    };

    const url = "https://us-central1-mydb-34040.cloudfunctions.net/api/delete";

    Axios.post(url, data, headers)
      .then(() => {
        window.location.reload();
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <Container>
        <Button
          component={Link}
          to="/manager"
          variant="contained"
          color="primary"
        >
          Back
        </Button>
        <Grid>
          <div>
            <ul>
              {this.state.pkgs.map(pkg => {
                return (
                  <ListItem
                    key={pkg.packageId}
                    style={{
                      backgroundColor: pkg.isPickedUp ? "#dbdbdb" : "#ffde2d",
                      margin: "15px"
                    }}
                  >
                    {pkg.isPickedUp && (
                      <Check style={{ padding: "0px 40px" }} />
                    )}
                    {!pkg.isPickedUp && (
                      <Button
                        size="small"
                        variant="contained"
                        color="primary"
                        onClick={event => this.updateStatus(event, pkg)}
                      >
                        Received
                      </Button>
                    )}
                    <ListItemText
                      primary={pkg.packageDescription}
                      secondary={pkg.receivedAt}
                    />
                    <p>
                      For tenant: <strong>{pkg.tenantName}</strong>
                    </p>
                    <br />
                    <p> &nbsp; </p>
                    <p> Received by staff: {pkg.staffName}</p>
                    <div className="delete">
                      <Button
                        onClick={event => {
                          this.delete(event, pkg);
                        }}
                        color="secondary"
                      >
                        <Trash2 />
                      </Button>
                    </div>
                  </ListItem>
                );
              })}
            </ul>
          </div>
        </Grid>

        <Logout />
      </Container>
    );
  }
}

export default showPackages;
