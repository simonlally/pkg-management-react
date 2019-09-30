import React from "react";
import Axios from "axios";

import Logout from "../components/Logout";
import { ListItemText, ListItem, Container, Grid } from "@material-ui/core";
import { CheckCircle, Circle, Package } from "react-feather";
import moment from "moment";

import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";
import "react-notifications/dist/react-notifications.css";

class tenantHome extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      packages: []
    };
  }

  isEmpty(arr) {
    if (arr === undefined || arr.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  componentDidMount() {
    const userHandle = this.props.location.state.handle;

    const user = {
      handle: userHandle
    };

    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    };

    const getPackagesUrl =
      "https://us-central1-mydb-34040.cloudfunctions.net/api/getpackages";

    Axios.post(getPackagesUrl, user, headers)
      .then(res => {
        this.setState({
          packages: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <Container>
        <Logout />
        {this.isEmpty(this.state.packages) && (
          <Container maxWidth="xs">
            <Grid
              spacing={3}
              container
              direction="column"
              alignItems="center"
              alignContent="center"
              style={{
                height: "100px"
              }}
            >
              <Package size="45" stroke="#d29c9c" fill="#b98324" />
              <div>You have no packages</div>
              <div>Check back soon!</div>
            </Grid>
          </Container>
        )}
        <NotificationContainer />
        <div>
          <ul>
            {this.state.packages.map(pkg => {
              {
                !pkg.isPickedUp &&
                  NotificationManager.warning(
                    "You have a new package waiting!"
                  );
              }
              return (
                <ListItem
                  key={pkg.packageId}
                  style={{
                    backgroundColor: pkg.isPickedUp ? "#dbdbdb" : "#ffde2d",
                    margin: "15px"
                  }}
                >
                  {pkg.isPickedUp && (
                    <CheckCircle style={{ padding: "12px" }} />
                  )}
                  {!pkg.isPickedUp && <Circle style={{ padding: "12px" }} />}
                  <ListItemText
                    primary={pkg.packageDescription}
                    secondary={moment(pkg.receivedAt).format("lll")}
                  />
                  <p />
                  <ListItemText
                    primary={"received by: " + pkg.staffName}
                  ></ListItemText>
                </ListItem>
              );
            })}
          </ul>
        </div>
      </Container>
    );
  }
}

export default tenantHome;
